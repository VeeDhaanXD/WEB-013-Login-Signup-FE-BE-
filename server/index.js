const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./Models/Data");
const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://User1:1234@cluster0.rzwaa5g.mongodb.net/Software?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
  .then(user =>{
   if (user) {
        if (user.password === password) {
          res.json("Successful");
        } else {
          res.json("Wrong Password");
         
        }
      } else {
        res.json("No Record Exists");
      }
    })   
    

  })


app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((Users) => res.json(Users))
    .catch((err) => res.json(err));
});

app.listen(3000, () => {
  console.log("🌏 DataBase Connected Successfully");
});

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const UserModel = require('./Models/Data');

// const app = express();

// app.use(express.json());
// app.use(cors());

// mongoose.connect(
//   "mongodb+srv://User1:1234@cluster0.rzwaa5g.mongodb.net/Software?retryWrites=true&w=majority&appName=Cluster0"
// )
// .then(() => console.log("✅ MongoDB connected"))
// .catch((err) => console.error("❌ MongoDB connection error:", err));

// app.post('/register', (req, res) => {
//   console.log("Incoming POST /register data:", req.body);

//   UserModel.create(req.body)
//     .then(user => {
//       console.log("✅ User created in DB:", user);
//       res.json(user);
//     })
//     .catch(err => {
//       console.error("❌ User creation error:", err);
//       res.status(500).json({ error: "Failed to register user" });
//     });
// });

// app.listen(3000, () => {
//   console.log("🚀 Server running on port 3000");
// });
