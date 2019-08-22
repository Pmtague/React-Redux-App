import axios from 'axios';

export const FETCH_CAT_FACTS_START = 'FETCH_CAT_FACTS_START';
export const FETCH_CAT_FACTS_SUCCESS = 'FETCH_CAT_FACTS_SUCCESS';
export const FETCH_CAT_FACTS_FAIL = 'FETCH_CAT_FACTS_FAIL';


export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_CAT_FACTS_START });
        axios
            .get('https://cat-fact.herokuapp.com/facts')
            .then(res => {
                console.log('Get data', res.data);
                dispatch({ type: FETCH_CAT_FACTS_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log('Error!', err.response)
                dispatch({ type: FETCH_CAT_FACTS_FAIL, payload: err.response });
            })

    };
};