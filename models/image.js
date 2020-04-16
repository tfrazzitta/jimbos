var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var ImageSchema = new Schema({
      filename: {type: String},
      path:{type:String}, 
      //data:{type:String},                                                          
      data: Buffer,
      id:{type: Schema.Types.ObjectId}  
});

// Create the Model
var Image = mongoose.model("Image", ImageSchema);

// Export it for use elsewhere
module.exports = Image;
