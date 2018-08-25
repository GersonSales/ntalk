module.exports = function () {
  return  {
    index: function (req, res) {
      res.render('home/index');
    },
    login: function (req, res) {
      console.log(req.body);
      let name = req.body.user.name;
      if (name.length > 2) {
        let user = req.body.user;
        user['contacts'] = [];
        req.session.user = user;
        res.redirect('/contacts');
      } else {
        res.redirect('/');
      }
    },
    logout: function (req, res) {
      req.session.destroy();
      res.redirect('/');
    }

  };
};