const express = require("express");
const eventRouter = new express.Router();
const controllers = require("../Controllers/eventController");

// routes
eventRouter.get("/events/all", controllers.getEvents);
eventRouter.get("/events/singleEvent/:id", controllers.singleEvent);
eventRouter.post("/events/createEvent", controllers.postEvents);
eventRouter.delete("/events/deleteEvent/:id", controllers.deleteEvents);
eventRouter.put("/events/update/:id", controllers.updateEvents);
 
module.exports = eventRouter;