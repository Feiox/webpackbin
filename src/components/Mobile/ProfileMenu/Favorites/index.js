import React from 'react';
import { connect } from '@cerebral/react';
import MenuItem from 'common/components/MenuItem';
import Description from 'common/components/Description';
import { state, signal } from 'cerebral/tags';

export default connect(
  {
    bins: state`favorites.list`,
    favoriteClicked: signal`favorites.favoriteClicked`,
  },
  function Favorites({ bins, favoriteClicked }) {
    return (
      <div>
        {Object.keys(bins).map(binKey => {
          return (
            <MenuItem
              icon="newBin"
              onClick={() => favoriteClicked({ binKey: bins[binKey].binKey })}
            >
              <div>
                {bins[binKey].name}
                <Description light>
                  {new Date(bins[binKey].datetime).toLocaleDateString()}
                </Description>
              </div>
            </MenuItem>
          );
        })}
      </div>
    );
  }
);
