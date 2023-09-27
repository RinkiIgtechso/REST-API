require("dotenv").config();
const express = require("express");
const app = express();
require("./db/connection")
const cors = require("cors");
const userRouts = require("./Routes/userRouter");
const eventRouts = require("./Routes/eventRouter");
const PORT = 5005;
const swaggerSpec = require("./ApiDoc");
const swaggerUi= require("swagger-ui-express");

app.use(cors());
app.use(express.json());
app.use(userRouts);
app.use(eventRouts);

//  getresponse 
app.get("/", (req, res)=>{
    res.status(200).json("server start");
}) 

// ---- schema for documents ----
/**
 * @swagger
 *  components:
 *      schema:
 *          User:
 *              type: object
 *              properties:
 *                  firstname:
 *                      type: string
 *                  email:
 *                      type: string
 *                  gender:
 *                      type: string 
 *                  status:
 *                      type: string
 *                  mobile: 
 *                      type: string 
 *          Login:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                  mobile:
 *                      type: string   
 *          Event:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  date:
 *                      type: string
 *                  stime:
 *                      type: string
 *                  etime:
 *                      type: string
 *                  description: 
 *                      type: string
 *                  status:
 *                      type: string
 *          UpdateEvent:
 *              type: object
 *              properties:
 *                  description: 
 *                      type: string
 *                  status:
 *                      type: string
 */

/**
 * @swagger
 * /:
 *  get:
 *      summary: This api is used to check if it is working or not.
 *      description: This api is used to check if it is working or not.
 *      responses:
 *          200:
 *              description: To test Get method
 */

// ----- user api documentation ------
/**
 * @swagger
 * /user/getAllUser:
 *  get:
 *      tags:
 *          - User
 *      summary: This api is get all user information.
 *      description: To get all the user information, pass the token while making request.
 *      responses:
 *          200:
 *              description: To test Get method
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                                  $ref: '#components/schema/User'
 */

/**
 * @swagger
 * /user/singleuser/{id}:
 *  get:
 *      tags:
 *          - User
 *      summary: This api is get particular user information.
 *      description: To get the particular user information, pass the token while making request.
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *                type: string
 *      responses:
 *          200:
 *              description: To test Get method
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                                  $ref: '#components/schema/User'
 */

/**
 * @swagger
 * /user/updateuser/{id}:
 *  put:
 *      tags:
 *          - User
 *      summary: This api is get particular user information.
 *      description: To get the particular user information, pass the token while making request.
 *      requestBody:
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/User'
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *                type: string
 *      responses:
 *          200:
 *              description: To test Get method
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                                  $ref: '#components/schema/User'
 */

/**
 * @swagger
 * /user/register:
 *  post:
 *      tags:
 *          - User
 *      summary: This api is to create a new user
 *      description: This api is for creating the new user.
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/User'
 *      responses:
 *          200:
 *              description: Added successfully
 */

/**
 * @swagger
 * /user/register:
 *  post:
 *      tags:
 *          - User
 *      summary: This api is to create a new user
 *      description: This api is for creating the new user.
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/User'
 *      responses:
 *          200:
 *              description: Added successfully
 */

/**
 * @swagger
 * /user/login:
 *  post:
 *      tags:
 *          - User
 *      summary: For login
 *      description: This api is for login by email and mobile
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/Login'
 *      responses:
 *          200:
 *              description: Logined successfully
 */

/**
 * @swagger
 * /user/deleteuser/{id}:
 *  delete:
 *      tags:
 *          - User
 *      summary: Delete the user by id.
 *      description: To delete the particular user by Id.
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              schema:
 *                  type: string
 *      responses:
 *          200:
 *              description: Deleted successfully
 */

// ----- event api documentation ------
/**
 * @swagger
 * /events/all:
 *  get:
 *      tags:
 *          - Events
 *      summary: This api is get all information about events.
 *      description: This api is get all information about events.
 *      responses:
 *          200:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                                  $ref: '#components/schema/Event'
 */

/**
 * @swagger
 * /events/singleEvent/{id}:
 *  get:
 *      tags:
 *          - Events
 *      summary: This api is get particular event information.
 *      description: To get the particular event information, pass the token while making request.
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *                type: string
 *      responses:
 *          200:
 *              description: To test Get method
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                                  $ref: '#components/schema/User'
 */

/**
 * @swagger
 * /events/update/{id}:
 *  put:
 *      tags:
 *          - Events
 *      summary: This api is update particular event information.
 *      description: To update the particular event information, pass the token while making request.
 *      requestBody:
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/UpdateEvent'
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *                type: string
 *      responses:
 *          200:
 *              description: To test Get method
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                                  $ref: '#components/schema/Event'
 */

/**
 * @swagger
 * /events/createEvent:
 *  post:
 *      tags:
 *          - Events
 *      summary: This api is to create a new event
 *      description: This api is for creating the new event.
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/Event'
 *      responses:
 *          200:
 *              description: Created successfully
 */



/**
 * @swagger
 * /events/deleteEvent/{id}:
 *  delete:
 *      tags:
 *          - Events
 *      summary: Delete the event by id.
 *      description: To delete the particular event by Id.
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              schema:
 *                  type: string
 *      responses:
 *          200:
 *              description: Deleted successfully
 */


app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//  server start
app.listen(PORT, ()=>{
    console.log(`Server start the PORT No: ${PORT}`)
})