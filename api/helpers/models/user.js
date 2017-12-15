module.exports = require ('../models')('User', {
    firstName               : { type: String, trim: true, default: ''},
    middleName              : { type: String, trim: true, default: null},
    lastName                : { type: String, trim: true, default: ''},
    displayName             : { type: String, trim: true },
    email                   : { type: String, trim: true, default: '' },
    username                : { type: String, unique: 'Username already exists', required: 'Please fill in a username', lowercase: true, trim: true },
    password                : { type: String, default: '' },
    salt                    : { type: String },
    roles                   : [{ type: String}],
    updated                 : { type: Date },
    created                 : { type: Date, default: Date.now },
    org                     : { type:'ObjectId', ref:'Organization', default:null, index:true },
    title                   : { type:String, default: '' },
    phoneNumber             : { type:String, default: '' },
    salutation              : { type:String, default: '' },
    department              : { type:String, default: '' },
    faxNumber               : { type:String, default: '' },
    cellPhoneNumber         : { type:String, default: '' },
    address1                : { type:String, default: '' },
    address2                : { type:String, default: '' },
    city                    : { type:String, default: '' },
    province                : { type:String, default: '' },
    country                 : { type:String, default: '' },
    postalCode              : { type:String, default: '' },
    notes                   : { type:String, default: '' },
    // Siteminder User Guid - smgov_userguid header
    userGuid                : { type: String, unique: 'User GUID already exists', lowercase: true, trim: true  },
    // Siteminder User Type   - smgov_usertype header
    userType                : { type: String, unique: false, lowercase: true, trim: true, default: '' },
});
