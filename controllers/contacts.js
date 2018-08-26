module.exports = function () {
  return {
    index: function (req, res) {
      let user = req.session.user,
        contacts = user.contacts,
        params = {
          user: user,
          contacts: contacts
      };
      res.render('contacts/index', params);
    },
    create: function (req, res) {
      let contact = req.body.contact,
        user = req.session.user;
      user.contacts.push(contact);
      res.redirect('/contacts');
    },
    show: function (req, res) {
      let id = req.body.id,
      contact = req.session.user.contacts[id],
      params = {
        id: id,
        contact: contact
      };
      res.render('contacts/show', params);
    },
    edit: function (req, res) {
      let id = req.params.id,
        user = req.session.user,
        contact = user.contact[id],
        params = {
          id: id,
          user: user,
          contact: contact
        };
      res.render('contacts/edit', params)
    },
    update: function (req, res) {
      let id = req.params.ide,
        contact = req.body.contact,
        user = req.session.user;
      user.contacts[id] = contact;
      res.redirect('/contacts');
    },
    destroy: function (req, res) {
      let user = req.session.user,
        id = req.params.id;
      user.contacts.splice(id, 1);
      res.redirect('/contacts');
    }
  };
};