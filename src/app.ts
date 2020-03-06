import express from 'express';
import bodyParser from 'body-parser';
import "reflect-metadata";

import { getRepository } from 'typeorm';
import  User from './models/user.entity';

//import session from 'express-session';
// const FileStore = require('session-file-store')(session);
import passport from "passport";
import passportLocal from "passport-local";

const LocalStrategy = passportLocal.Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (email, password, done) => {
      const user = getRepository(User);
      let result = await user.findOne({ email: email });
      if (!result) {
        return done(null, false);
      }
      if (result.password !== password) {
        return done(null, false);
      }
      return done(null, result);
    }
  )
);

passport.serializeUser(function ( user: any, done) {
  done(null, user.email);
});
 passport.deserializeUser( async function(userEmail:string, done) {
  const user = getRepository(User);
  let result = await user.findOne({email: userEmail});
  if(result)
    done(null, result.email);
 });
 
class App {
  public app: express.Application;
  public port: number;
 
  constructor(controllers, port) {
    this.app = express();
    this.port = port;
    
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    console.log(123)
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(passport.initialize());
    this.app.use(passport.session());

    this.app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
      next();
    });

    // this.app.use(
    //   session({
    //     secret: 'xxx123',
    //     store: new FileStore(),
    //     cookie: {
    //       path: '/',
    //       httpOnly: true,
    //       maxAge: 60 * 60 * 1000,
    //     },
    //     resave: false,
    //     saveUninitialized: false
    //   })
    // )
  }
 
  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;