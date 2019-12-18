import actions from "../actions/actions";

const { REQUEST_WEATHER, RECEIVE_WEATHER, ERROR } = actions;

const initialState = {
  isFetching: false,
  error: undefined,
  data: undefined
};

export default function apiReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RECEIVE_WEATHER:
      return {
        ...state,
        isFetching: false,
        data: payload,
        error: undefined
      };
    case ERROR:
      return {
        ...state,
        isFetching: false,
        data: undefined,
        error: payload
      };
    case REQUEST_WEATHER:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
}
