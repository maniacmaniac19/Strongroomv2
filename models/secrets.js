const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TweetSchema object
const SecretSchema = new Schema({
  name: {
    type: String,
    required: "You must include some content in your note"
  },
  password: {
    type: String,
    required: "You must include some content in your note"
  },
  username: {
    type: String,
    required: "You must include some content in your note"
  },
  URL: {
    type: String,
  },
  owner: {
    type: String,
}

});

// This creates our model from the above schema, using Mongoose's model method
var Secret = mongoose.model('Secret', SecretSchema);

// Export the Tweet model
module.exports = Secret;