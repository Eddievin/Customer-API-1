const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: { type: String },
  address: { type: String },
  phone: { type: String },
  email: { type: String },
});

module.exports = mongoose.model("Customer", CustomerSchema);
