import * as Collections from './Collections';
import * as Services from './Services';
import setupFirebase from './setupFirebase';

let started;
async function start () {
  if (!started) {
    // Do one-time setup here
    started = true;
  }
}

// TODO: include example of generating Enums from schema
const Enums = {};

export default function setup () {
  const {Admin, app} = setupFirebase();

  return {
    Admin,
    app,
    Collections,
    Enums,
    Services,
    start
  };
}
