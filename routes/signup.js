module.exports = function (app) {
  var signup = app.controllers.signup;
  app.get('/signup', signup.index);
};