import { set } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';
import updateFirebaseBin from 'modules/app/factories/updateFirebaseBin';
import whenLiveCurrentUser from 'modules/app/actions/whenLiveCurrentUser';

export default [
  set(state`app.currentBin.packageQuery`, props`query`),
  whenLiveCurrentUser,
  {
    true: updateFirebaseBin('packageQuery'),
    false: [],
  },
];
