import { 
    FETCH_CAT_FACTS_START,
    FETCH_CAT_FACTS_SUCCESS,
    FETCH_CAT_FACTS_FAIL 
}   from "../actions";

const initialState = {
    catFacts: [],
    isLoading: false,
    error: ''
  };

  export const catReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CAT_FACTS_START:
            return {
            ...state,
            isLoading: true,
            error: ""
            };
        case FETCH_CAT_FACTS_SUCCESS:
            return {
            ...state,
            catFacts: action.payload,
            isLoading: false,
            error: ""
            };
        case FETCH_CAT_FACTS_FAIL:
            return {
                ...state,
                error: action.payload
            };
         default:
            return state;
    }
  };