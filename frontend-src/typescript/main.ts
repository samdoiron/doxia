import App from './worker';
import * as Comlink from 'comlink'

const app = Comlink.wrap(new Worker('worker.js')) as Comlink.Remote<App>;

(async () => {
  console.log(await app.foo());
})();