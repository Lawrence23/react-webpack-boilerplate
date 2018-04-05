import { ON_SET_SAMPLE_DATA } from '../actions/types';
import { updateStore } from '../utils';

const onSetPageTitle = () => (dispatch, getState) => {
  dispatch(updateStore({ title: 'React + Webpack' }, ON_SET_SAMPLE_DATA));
};

export default onSetPageTitle;
