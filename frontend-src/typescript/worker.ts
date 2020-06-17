import { createStore } from 'redux';
import { exposeStore } from 'redux-in-worker'

import { State, initialState } from './state'
import { Action } from './actions'

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
  }
  return state;
}

exposeStore(createStore(reducer))
