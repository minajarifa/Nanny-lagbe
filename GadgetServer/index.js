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
//this is verify token
app.use(cookieParser());
// middle ware
const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  // console.log("token", token);
  if (!token) return res.status(401).send({ message: "unauthorized access" });
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
      if (error) {
        console.log(error);
        return res.status(401).send({ message: "unauthorized access" });
        // return
      }
      req.user = decoded;
      // console.log("decoded", decoded);
      next();
    });
  }
};
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.63qrdth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const uri = `mongodb://localhost:27017`;
// console.log(process.env.ACCESS_TOKEN_SECRET);
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
      const email = req.body;
      const token = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET, {
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
    app.get("/booking/:email", verifyToken, async (req, res) => {
      const parentEmail = req.params.email;
      console.log(parentEmail)
      const result = await bookCollection.find({ parentEmail }).toArray();
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
    app.get("/usersData", verifyToken, async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });
    // get a userData by email
    app.get("/usersData/:email", verifyToken, async (req, res) => {
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
    // for pagination
    app.get("/post-count", async (req, res) => {
      const filter = req.query.filter;
      console.log(filter);
      const count = await postCollection.countDocuments();
      res.send({ count });
    });
    app.get("/nannyCollection", async (req, res) => {
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size) - 1;
      const filter = req.query.filter;
      let query = {};
      if (filter) query = { skills: filter };
      const result = await postCollection
        .find(query)
        .skip(page * size)
        .limit(size)
        .toArray();
      res.send(result);
    });
    app.get("/nannyCollection/:email", verifyToken, async (req, res) => {
      const tokenEmail = req.user.email;
      const email = req.params.email;
      if (email !== tokenEmail) {
        return res.status(401).send({ message: "unauthorized access" });
      }
      const result = await postCollection.find({ email }).toArray();
      res.send(result);
    });
    app.get("/nanny/:id", verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await postCollection.findOne(query);
      res.send(result);
    });
    app.delete("/postDelete/:id", verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await postCollection.deleteOne(query);
      res.send(result);
    });

    app.put("/nannyCollection/:id", verifyToken, async (req, res) => {
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
