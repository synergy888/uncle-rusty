var q = require('q');
var NodePbkdf2 = require('node-pbkdf2');
var _ = require('lodash-node');
var generatePassword = require('password-generator');

// generates a new user password
exports.genPass = function() {
    return generatePassword(8, false)
}

var length = 128;
var iterations = 1200;
var hasher = new NodePbkdf2({iterations: iterations, saltLength: length, derivedKeyLength: length});

// generates a password hash when given:
// pass - user password

function genHash(pass) {
    return q.ninvoke(hasher, 'encryptPassword', pass)
        .then(function(encryptedResult) {
            var result = NodePbkdf2.deserializeEncryptedPassword(encryptedResult);
            return {salt: result.salt, hash: result.derivedKey };
        })
        .fail(function(err) {
            console.error("encryption failed " + err);
        });
};
exports.genHash = genHash;


// hashes the user's password
// deletes pass attribute and sets salt and hash attributes
// returns promise
exports.hashUser = function(user) {
    if (!user.hash && user.pass) {
        return genHash(user.pass)
            .then(function(result) {
                delete user['pass'];
                _.merge(user, result);
                return user;
            });
    }
    return q.resolve(user);
}


// authenticates user against provided password
// user - user data. Assumes user has generated hash
// pass - provided password of user
// returns promise with true/false value depending on whether
// the user is authenticated or not
exports.authenticateUser = function(user, pass) {
    if (user && user.hash && user.salt) {
        if (user.status !== 'Active') {
            return q.resolve(false);
        }

        var serializedPass = NodePbkdf2.serializeEncryptedPassword({
            salt: user.salt,
            derivedKey: user.hash,
            derivedKeyLength: length,
            iterations: iterations
        });

        return q.ninvoke(hasher, 'checkPassword', pass, serializedPass)
            .then(function(result) {
                return result;
            })
            .fail(function(err) {
                console.error("Password check failed " + err);
            });
    }
    else {
        return q.reject(new Error('User data is invalid.'));
    }
}