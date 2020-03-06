const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const  userDB = {
    id: 1,
    email: 'test@mail.com',
    password: 'test'
};

passport.serializeUser(function(user, done) {
    console.log('Сериализация: ', user);
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    console.log('Десериализация: ', id);
    const user = (userDB.id === id) ? userDB : false;
    done(null, user);
    // User.findById(id, function(err, user) {
    //   done(err, user);
    // });
  });

  passport.use(
    new LocalStrategy({ usernameField: "email" }, function(
      email,
      password,
      done
    ) {
      if (email === userDB.email && password === userDB.password) {
        return done(null, userDB);
      } else {
        return done(null, false);
      }
      //   User.findOne({ username: username }, function (err, user) {
      //     if (err) { return done(err); }
      //     if (!user) {
      //       return done(null, false, { message: 'Incorrect username.' });
      //     }
      //     if (!user.validPassword(password)) {
      //       return done(null, false, { message: 'Incorrect password.' });
      //     }
      //     return done(null, user);
      //   });
    })
  );