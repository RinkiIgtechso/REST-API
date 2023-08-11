const { Query } = require("mongoose");
const users = require("../models/usersSchema");
const moment = require("moment");

//  create user
exports.userpost = async(req, res)=>{
    const {firstname, email, mobile, gender, status} = req.body;
    if(!firstname || !email || !mobile || !gender || !status){
        res.status(400).json({error:"All Input is required"})
    }

    try{
        const preuser = await users.findOne({email:email});
        if(preuser){
            res.status(400).json({error:"This user already exist in our database"})
        }else{
            const dateCreate = moment(new Date()).format("YYYY MM DD hh:mm:ss");

            const userData = new users({firstname, email, mobile, gender, status, datecreated: dateCreate});

            await userData.save();
            res.status(200).json(userData);
        }
    }catch(err){
        console.log(err);
        res.status(400).json(err)
    }
}


//  get all user
exports.getUsers = async (req, res)=>{
    // const search = req.query.search || "";
    // const status = req.query.status || "";
    // const gender = req.query.gender || "";
    // const sort = req.query.sort || "";
    // const page = req.query.page || 1;
    // const ITEM_PER_PAGE = req.query.items || 4;

    // const query = {
    //     firstname: {$regex: search, $options:"i"}
    // }

    // if(status !== "All" ){
    //     query.status = status   
    // }

    // if(gender !== "All" ){
    //     query.gender = gender   
    // }

    try{
        // const skip = (page - 1) * ITEM_PER_PAGE;

        // count Document
        // const count = await users.countDocuments(query);

        const userData = await users.find();
        // .sort({datecreated:sort == "new"? -1 : 1})
        // .limit(ITEM_PER_PAGE)
        // .skip(skip)

        // const pageCount = Math.ceil(count/ITEM_PER_PAGE); // 8/4 = 2
        res.status(200).json(userData);

        // res.status(200).json({
        //     pagination:{
        //         count: pageCount
        //     },
        //     userData
        // });
    }catch(err){
        res.status(400).json(err);
        console.log("catch block error");
    }
}

// http://localhost:5005/user/getAllUser?search=&status=All&gender=All&sort=new

// get single user
exports.getSingleuser = async(req, res) => {
    const {id} = req.params;

    try{
        const singleuserData = await users.findOne({_id:id});
        res.status(200).json(singleuserData);
    }catch(error){
        res.status(400).json(err);
        console.log("catch block error");
    }
}

// delete user

exports.deleteUser = async (req, res) => {
    const {id} = req.params;

    try{
        const deleteUserData = await users.findByIdAndDelete({_id:id});

        res.status(200).json(deleteUserData);
    }catch(error){
        res.status(400).json(err);
        console.log("catch block error");
    }
}

// updateuser

exports.updateUser = async (req, res) => {
    const {id} = req.params;
    const {firstname, email, mobile, gender, status} = req.body;

    try{
        const dateUpdate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

        const updateUserdata = await users.findByIdAndUpdate({_id:id},{firstname, email, mobile, gender, status, datecreated: dateUpdate},{new: true});

        await updateUserdata.save();

        res.status(200).json(updateUserdata);
    }catch(error){
        res.status(400).json(error);
        console.log("catch block error");
    }
}