import { TOTAL_USD_REQUEST, TOTAL_USD_SUCCESS, TOTAL_USD_ERROR } from '../actions/getTotalUSDValue';

const initialState = {
  fetching: false,
  error: null,
};

export default function totalUSD(state = initialState, action) {
  switch (action.type) {
    case TOTAL_USD_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case TOTAL_USD_SUCCESS:
      return {
        fetching: false,
        error: null,
        ...action.payload,
      };
    case TOTAL_USD_ERROR:
      return {
        fetching: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
