import changeCode from '../actions/changeCode'
import {set} from 'cerebral/operators'
import {state} from 'cerebral/tags'

export default [
  changeCode,
  set(state`bin.isLinting`, true)
]