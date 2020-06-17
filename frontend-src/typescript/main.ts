import { render } from 'preact/compat'
import { Provider } from 'react-redux'
import { wrapStore } from 'redux-in-worker';
import { html } from 'htm/preact';

import { App } from './ui/app';
import { initialState } from './state'

const worker = new Worker('worker.js', { type: 'module' })
const store = wrapStore(worker, initialState);

render(
  html`
  <${Provider} store=${store}>
    <${App} />
  </${Provider}>
  `,
  document.body
)