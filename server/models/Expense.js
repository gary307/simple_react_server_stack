//models/Expense.js
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var expenseSchema = new Schema({
  description: String,
  amount: String,
  month: String,
  year: String
});

module.exports = mongoose.model("Expense", expenseSchema);
