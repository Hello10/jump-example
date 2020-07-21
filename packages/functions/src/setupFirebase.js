import * as Admin from 'firebase-admin';

import * as service_account from '../../../env/jump_example_service_account.json';

let app;

export default function setupFirebase () {
  if (!app) {
    const credential = Admin.credential.cert(service_account);
    const {project_id} = service_account;
    const database_url = `https://${project_id}.firebaseio.com`;
    app = Admin.initializeApp({
      credential,
      databaseURL: database_url
    });
  }
  return {
    app,
    Admin
  };
}
