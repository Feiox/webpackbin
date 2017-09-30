import { createNewBin } from 'utils';

function resetCurrentBin({ state }) {
  state.set('app.currentBin', createNewBin(state.get('app.user.uid')));
  state.set('sandbox.url', null);
}

export default resetCurrentBin;
