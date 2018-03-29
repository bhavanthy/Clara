import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({ idToken: null, credentials: {}});

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return state.set('idToken', action.token);
    case actions.LOGIN_REQUEST:
    return state.set('credentials', action.credentials);
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
