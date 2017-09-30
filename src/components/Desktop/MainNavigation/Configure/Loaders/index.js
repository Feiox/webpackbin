import React from 'react';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';
import classnames from 'classnames';
import styles from './styles.css';
import Checkbox from 'common/components/Checkbox';

import BabelLoader from './BabelLoader';
import CssLoader from './CssLoader';
import TypescriptLoader from './TypescriptLoader';
import CoffeeScriptLoader from './CoffeeScriptLoader';
import RawLoader from './RawLoader';
import JsonLoader from './JsonLoader';
import PugLoader from './PugLoader';
import HandlebarsLoader from './HandlebarsLoader';
import VueLoader from './VueLoader';

const loaderComponents = {
  babel: BabelLoader,
  css: CssLoader,
  typescript: TypescriptLoader,
  coffeescript: CoffeeScriptLoader,
  raw: RawLoader,
  json: JsonLoader,
  pug: PugLoader,
  handlebars: HandlebarsLoader,
  vue: VueLoader,
};

export default connect(
  {
    currentLoader: state`app.currentBin.currentLoader`,
    loaders: state`app.currentBin.loaders`,
    loaderSelected: signal`configure.loaderSelected`,
    loaderToggled: signal`configure.loaderToggled`,
  },
  function Loaders({ currentLoader, loaders, loaderSelected, loaderToggled }) {
    const Loader = loaderComponents[currentLoader];

    return (
      <div className={styles.wrapper}>
        <ul className={styles.loadersList}>
          {Object.keys(loaderComponents).map(function(loaderName) {
            return (
              <li
                className={classnames(styles.loaderItem, {
                  [styles.activeLoaderItem]: loaderName === currentLoader,
                })}
                onClick={() => loaderSelected({ loaderName })}
              >
                <Checkbox
                  checked={loaderName in loaders}
                  onChange={() => loaderToggled({ loaderName })}
                />
                {loaderName}
              </li>
            );
          })}
        </ul>
        <Loader />
      </div>
    );
  }
);
