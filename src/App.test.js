import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import App from './App';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { searchRobots, requestRobots } from './reducers';

const rootReducer = combineReducers({ searchRobots, requestRobots });


function render(
  ui, 
  {
    initialState,
    store = createStore(rootReducer, applyMiddleware(thunkMiddleware)),
    ...renderOptions
  } = {}
  ) {
  function Wrapper({ children }) {
    return <Provider store={store} >{children}</Provider>
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions })
}


describe('<App>', () => {

  it('renders without crashing', () => {
    render(<App />, { initialState: {}});
  });
})