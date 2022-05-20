var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
    var Usuario = mongoose.model('Usuario');
    passport.use(new GitHubStrategy({
    clientID: '68b4102ef3cd6e9e8a89',
    clientSecret: '736aa634bfd0d2fe316bde461e8a53368d509467',
    callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done) {
        Usuario.findOrCreate(
            { "login" : profile.username},
            { "nome" : profile.username},
            function(erro, usuario) {
            if(erro)
            console.log(erro);
            return done(erro);
            }
            );
        return done(null, usuario);
        
    }));
    passport.serializeUser(function(usuario, done) {
        done(null, usuario._id);
        });
        passport.deserializeUser(function(id, done) {
            Usuario.findById(id).exec()
            .then(function(usuario) {
            done(null, usuario);
            });
        });
    };