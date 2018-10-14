const mongoose =  require('mongoose');
console.log(process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI,(err)=>{
    if(!err){
        console.log("Successfully connected to MOngo");
    }else{
        console.log("Error in mongoDb connection", JSON.stringify(err, undefined,2)) // for proper indentation of error
    }
})

require('./user.model')