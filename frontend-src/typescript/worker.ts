import * as Comlink from 'comlink'

export default class App {
  foo() {
    return 123;
  }
}

Comlink.expose(new App())