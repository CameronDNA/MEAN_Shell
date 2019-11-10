var mongoose = require( 'mongoose' );

var BooksSchema = new mongoose.Schema({
  CreatedDate: {  type: Date, default : new Date() },
  DeletedDate: {  type: Date },
  Author: {  type: String },
  Name: {  type: String, required: true },
});

//unique : true -> force primary key

module.exports  = mongoose.model('Books', BooksSchema);
