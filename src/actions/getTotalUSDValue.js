export const TOTAL_USD_REQUEST = 'TOTAL_USD_REQUEST';
export const TOTAL_USD_SUCCESS = 'TOTAL_USD_SUCCESS';
export const TOTAL_USD_ERROR = 'TOTAL_USD_ERROR';

const getUSD = async () => {
  const res = await fetch(
    'https://cors-anywhere.herokuapp.com/https://efx-trustless-data.herokuapp.com/api/v1/last24HoursVolume',
    {
      method: 'GET',
    }
  );
  return processResponse(res);
};

const processResponse = response => {
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    let responseBody = response.json();
    if (response.status === 200 || response.status === 201) {
      return responseBody;
    }
    return responseBody.then(error => {
      return Promise.reject(error);
    });
  }
  if (response.status === 200 || response.status === 201) {
    return response;
  }
  console.log(Promise.reject(response));
  return Promise.reject(response);
};

export function geTotalUSD() {
  return dispatch => {
    dispatch({
      type: TOTAL_USD_REQUEST,
    });

    getUSD()
      .then(response => {
        dispatch({
          type: TOTAL_USD_SUCCESS,
          payload: {
            response,
          },
        });
      })
      .catch(error => {
        dispatch({
          type: TOTAL_USD_ERROR,
          payload: {
            error,
          },
        });
      });
  };
}
