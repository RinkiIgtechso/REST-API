const mongoose = require("mongoose");
const validator = require("validator");

const eventSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    date:{
        type: String,
        required: true
    },
    stime:{
        type: String,
        required: true
    },
    etime:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    status:{
        type: String,
        enum:["Active","In-Active","Archived"],
        required:false,
        default:"In-Active"
    },
    datecreated: Date,
    dateUpdated: Date
})

const events = new mongoose.model("events", eventSchema);
module.exports = events;