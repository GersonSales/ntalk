module.exports = function (app) {
  let contacts = app.controllers.contacts,
    auth = require('./../middleware/authenticator');
  /*GET*/
  app.get('/contacts', auth, contacts.index);
  app.get('/contact/:id', auth, contacts.show);
  app.get('/contact/:id/edit', auth, contacts.edit);

  /*POST*/
  app.post('/contact', auth, contacts.create);

  /*PUT*/
  app.put('/contact/:id', auth, contacts.update);

  /*DELETE*/
  app.del('/contact/:id', auth, contacts.destroy);
};