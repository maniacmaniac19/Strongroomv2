const LocalStrategy = require('passport-local').Strategy;
const db = require('./models/index')

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user)
    });
    passport.deserializeUser((user, done) =>{
        done(null, user)

    });

    passport.use(new LocalStrategy((username, password, done) =>{
          db.Users.findOne({ username: username },  (err, user) => {
            if (err) { return done(err); }
            else{
                if(user){
                    valid = user.comparePassword(password, user.password)
                    if (valid){
                        done(null, {
                            username:user.username,
                            password: user.password
                        })
                    }
                }
            }
            
          });
        console.log(username, password)
        }
      ));
}