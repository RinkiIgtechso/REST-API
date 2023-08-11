const express = require("express");
const userRouter = new express.Router();
const controllers = require("../Controllers/userControllers");

// routes
userRouter.post("/user/register", controllers.userpost);
userRouter.post("/user/login", controllers.userlogin);
userRouter.get("/user/getAllUser", controllers.getUsers);
userRouter.get("/user/singleuser/:id", controllers.getSingleuser);
userRouter.delete("/user/deleteuser/:id", controllers.deleteUser);
userRouter.put("/user/updateuser/:id", controllers.updateUser);

module.exports = userRouter;