const express = require("express");
const app = express();
app.use(express.json());
let mongose = require("mongoose");
let Write = require("./models/Writes");
mongose
  .connect(
    "mongodb+srv://omarDB:omarppomarpp1@mydb.d6k2m.mongodb.net/?retryWrites=true&w=majority&appName=myDB"
  )
  .then(() => {
    console.log("connecting successfully");
  })
  .catch((err) => {
    console.log(err);
  });


app.post("/newWrite", async (req, res) => {
  try {
    const newWrite = new Write();
    newWrite.writerId = req.query.writerId;
    newWrite.collectionId = req.query.collectionId;
    newWrite.title = req.body.title;
    newWrite.body = req.body.body;
    newWrite.numberOfLikes = 0;
    newWrite.numberOfComments = 0;
    newWrite.dateOfUpload = req.body.dateOfUpload;
    await newWrite.save();
    res.json(["upload successfully",newWrite]);
  } catch (err) {
    console.log("error is ", err);
  }
});



app.listen(3000);
