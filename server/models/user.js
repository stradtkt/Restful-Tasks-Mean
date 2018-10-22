const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        required: true,
        trim: true,
        unique: true,
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validator: {
            validator(value) {
                return validator.isEmail(value);
            }
        }
    },
    password: {
        required: true,
        type: String
    }
}, {
    timestamps: true
});

userSchema.plugin(uniqueValidator, {message: '{PATH} must be unique'});

userSchema.pre('save', function(next) {
    if(!this.isModified('password')) {
        return next();
    }
    bcrypt.hash(this.password, 10)
        .then(hashed => {
            this.password = hashed;
            next();
        })
        .catch(next);
});

userSchema.statics.validatePassword = function(candidatePassword, hashedPassword) {
    return bcrypt.compare(candidatePassword, hashedPassword);
};
module.exports = mongoose.model('User', userSchema);