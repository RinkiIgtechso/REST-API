const {Query} = require('mongoose');
const dotenv = require("dotenv");
const events = require("../models/eventSchema");
const moment = require("moment");
const jwt = require("jsonwebtoken");

dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// Get All Events ------
exports.getEvents =  async (req, res) =>{

    try{
        if(!req.headers.authorization) throw "No login token"
        const token = req.headers.authorization.split(" ")[1];
        if (!token) return res.status(400).json({ err: "No login token was found" });
        const user = jwt.verify(token, JWT_SECRET_KEY);
        req.email = user?.email;
        req.mobile = user?.mobile;

        const event = await events.find();
        res.status(200).json(event);
    }catch(err){
        console.log(err);
        res.status(400).json(err)
    }
}

// Get Event by id
exports.singleEvent = async (req, res) => {
    const { id } = req.params;
    
    try{
        if(!req.headers.authorization) throw "No login token"
        const token = req.headers.authorization.split(" ")[1];
        if (!token) return res.status(400).json({ err: "No login token was found" });
        const user = jwt.verify(token, JWT_SECRET_KEY);
        req.email = user?.email;
        req.mobile = user?.mobile;

        const singleEventData = await events.findOne({_id:id});
        res.status(200).json(singleEventData);
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

// Create Event ---------
exports.postEvents = async (req, res) =>{
    const {name, date, stime, etime, description,status} = req.body;
    if(!name || !date || !stime || !etime ){
        res.status(400).json({error:"All Input is required"})
    }
    
    try{
        if(!req.headers.authorization) throw "No login token"
        const token = req.headers.authorization.split(" ")[1];
        if (!token) return res.status(400).json({ err: "No login token was found" });
        const user = jwt.verify(token, JWT_SECRET_KEY);
        req.email = user?.email;
        req.mobile = user?.mobile;

        const eventData = new events({name, date, stime, etime, description,status});
        await eventData.save();
        res.status(200).json(eventData);
    }catch(err){
        console.log(err);
        res.status(400).json(err)
    }
}

// Updated Events -------
exports.updateEvents = async (req, res)  =>{
    const {id} = req.params;

    try{
        if(!req.headers.authorization) throw "No login token"
        const token = req.headers.authorization.split(" ")[1];
        if (!token) return res.status(400).json({ err: "No login token was found" });
        const user = jwt.verify(token, JWT_SECRET_KEY);
        req.email = user?.email;
        req.mobile = user?.mobile;

        const { description,status} = req.body;
        const updateEvent = await events.findByIdAndUpdate({_id:id},{ description,status },{new: true});

        await updateEvent.save();
        res.status(200).json({msg:"Updated event successfuly",data:updateEvent});
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

//  Delete Events --------
exports.deleteEvents = async (req, res) =>{
    const {id} = req.params;

    try{
        if(!req.headers.authorization) throw "No login token"
        const token = req.headers.authorization.split(" ")[1];
        if (!token) return res.status(400).json({ err: "No login token was found" });
        const user = jwt.verify(token, JWT_SECRET_KEY);
        req.email = user?.email;
        req.mobile = user?.mobile;

        const deleteEvent = await events.findByIdAndDelete({_id:id});
        res.status(200).json({msg:"successfully deleted",data:deleteEvent});
    }catch(error){
        console.log(error);
        res.status(400).json(error);
    }
}