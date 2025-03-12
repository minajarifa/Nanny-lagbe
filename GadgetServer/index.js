const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://gadget-shop-9b564.firebaseapp.com",
    "https://gadget-shop-9b564.web.app",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser())
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.63qrdth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const uri = `mongodb://localhost:27017`;
console.log(process.env.ACCESS_TOKEN_SECRET);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    const usersCollection = client.db("conceptual").collection("usersData");
    const postCollection = client.db("conceptual").collection("post");
    const bookCollection = client.db("conceptual").collection("booking");

    // _____________________JWT generate_________________________
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1d",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "product",
          sameSite: process.env.NODE_ENV === "product" ? "none" : "strict",
        })
        .send({ success: true });
    });
    // _____________________clear token on logout________________
    app.get("/logout", async (req, res) => {
      res
        .clearCookie("token", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "product",
          sameSite: process.env.NODE_ENV === "product" ? "none" : "strict",
          maxAge: 0,
        })
        .send({ success: true });
    });

    // _____________________bookCollection_______________________
    app.post("/booking", async (req, res) => {
      const result = await bookCollection.insertOne(req.body);
      res.send(result);
    });
    app.get("/booking", async (req, res) => {
      const result = await bookCollection.find().toArray();
      res.send(result);
    });
    app.get("/booking/:email", async (req, res) => {
      const email = req.params.email;
      const result = await bookCollection.find({ email }).toArray();
      res.send(result);
    });
    // _____________________usersCollection______________________
    // add user data to post
    app.post("/userData", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });
    // get all userData
    app.get("/usersData", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });
    // get a userData by email
    app.get("/usersData/:email", async (req, res) => {
      const email = req.params.email;
      const result = await usersCollection.findOne({ email });
      res.send(result);
    });
    // _____________________________________________
    // __________________postCollection_____________

    app.post("/nannyCollection", async (req, res) => {
      const user = req.body;
      const result = await postCollection.insertOne(user);
      res.send(result);
    });
    app.get("/nannyCollection", async (req, res) => {
      const result = await postCollection.find().toArray();
      res.send(result);
    });
    app.get("/nannyCollection/:email", async (req, res) => {
      const email = req.params.email;
      const result = await postCollection.find({ email }).toArray();
      res.send(result);
    });
    app.get("/nanny/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await postCollection.findOne(query);
      res.send(result);
    });
    app.delete("/postDelete/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await postCollection.deleteOne(query);
      res.send(result);
    });

    app.put("/nannyCollection/:id", async (req, res) => {
      const user = req.body;
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const data = {
        $set: {
          ...user,
        },
      };
      const result = await postCollection.updateOne(query, data);
      res.send(result);
    });

    // _____________________________________________

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send(
    "You successfully connected to MongoDB! Hello from Nanny Lagbe........"
  );
});
app.listen(port, () => console.log(`server running or port ${port}`));
