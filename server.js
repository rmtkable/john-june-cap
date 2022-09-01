// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const path = require("path");

// require("dotenv").config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const uri = "mongodb+srv://johns:password1234@cluster0.cr9e0xj.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(uri,{
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// });
// const connection = mongoose.connection;

// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

// const attractionsRouter = require("./backend/Routes/attractions");
// const contactRouter = require("./backend/Routes/contact");

// app.use("/attractions", attractionsRouter);
// app.use("/contact", contactRouter);

// // app.use(express.static(path.join(__dirname, "./build")));

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });
