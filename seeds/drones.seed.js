// Iteration #1

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');
mongoose.set('strictQuery', false);
const MONGO_URL = "mongodb://0.0.0.0:27017/lab-express-drones";

mongoose
  .connect(MONGO_URL)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .then(() => {
    return Drone.create(drones);
  })
  .then((createdDrones) => console.log(`Total drones created: ${createdDrones.length}`))
  .then(() => mongoose.connection.close())
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
  