const express = require("express");
const cors = require("cors");
// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.63qrdth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const uri = `mongodb://localhost:27017`;

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
    const productsCollection = client.db("conceptual").collection("products");
    const usersCollection = client.db("conceptual").collection("usersData");
    // const nannyCollection=client.db("conceptual").collection()
    // add user data to post
    app.post("/userData", async (req, res) => {
      const user = req.body;
      const result = usersCollection.insertOne(user);
      res.send(result);
    });
    // FormPage to add post
    app.post("/products", async (req, res) => {
      const result = await productsCollection.insertOne(req.body);
      res.send(result);
    });
    // get all post to Card Page
    app.get("/allProducts", async (req, res) => {
      const result = await productsCollection.find().toArray();
      res.send(result);
    });
    app.get("/userProducts/:email", async (req, res) => {
      const result = await productsCollection
        .find({ email: req.params.email })
        .toArray();
      res.send(result);
    });
    app.get("/singleProduct/:id", async (req, res) => {
      const id = { _id: new ObjectId(req.params.id) };
      const result = await productsCollection.findOne(id);
      res.send(result);
    });
    app.put("/updateProduct/:id", async (req, res) => {
      const user = req.body;
      const id = { _id: new ObjectId(req.params.id) };
      const data = {
        $set: {
          ...user,
        },
      };
      const result = await productsCollection.updateOne(id, data);
      res.send(result);
    });
    app.delete("/delete/:id", async (req, res) => {
      const id = { _id: new ObjectId(req.params.id) };
      const result = await productsCollection.deleteOne(id);
      return;
      res.send(result);
    });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send(
    "You successfully connected to MongoDB! Hello from tutore server........"
  );
});
app.listen(port, () => console.log(`server running or port ${port}`));
