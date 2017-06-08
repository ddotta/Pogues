import { getUserAttributes } from 'utils/remote-api';

export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

/**
 * Value the questionnaire list returned by the remote call
 *
 * @param   {object} user   questionnaire list returned by the remote API
 * @returns {object}          LOAD_QLIST_SUCCESS action
 */
export const loadUserSuccess = ({ user }) => ({
  type: LOAD_USER_SUCCESS,
  payload: user,
});

/**
 * Track error when loading questionnaire list failed
 *
 * @param   {string} err   error message
 * @returns {object}       LOAD_QLIST_FAILURE action
 */
export const loadUserFailure = err => ({
  type: LOAD_USER_FAILURE,
  payload: err,
});

/**
 * Load questionnaire list
 *
 * Asyncrhonous, relies on Redux Thunk to be processed.
 *
 * The raw questionnaire list returned by the remote call will be processed to
 * comply to the reducer requirements.
 *
 * @returns {function}        thunk which dispatches LOAD_QLIST_SUCCESS and
 *                            LOAD_QLIST_FAILURE actions
 */
export const loadUser = () => dispatch => {
  dispatch({
    type: LOAD_USER,
    payload: null,
  });
  return getUserAttributes()
    .then(user => {
      return dispatch(loadUserSuccess({ user }))
    })
    .catch(err => dispatch(loadUserFailure(err)));
};
