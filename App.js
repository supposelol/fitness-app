import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import { fetchExercises } from './components/exercisesSlice';
import Main from './components/Main';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  return <Main />;
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
