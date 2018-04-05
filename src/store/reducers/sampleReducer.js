import createReducer from '../lib/createReducer';
import { ON_SET_SAMPLE_DATA } from '../actions/types';

const sampleData = createReducer(
  {},
  {
    [ON_SET_SAMPLE_DATA](state, action) {
      return {
        ...state,
        ...action.value,
      };
    },
  },
);

export default sampleData;
