import express from "express";

const app = express();

// app.get("/", (req, res) => {
//     res.send("server is ready")
// })

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Ye hai pehala joke",
      content: "joke ho gaya",
    },
    {
      id: 2,
      title: "Ye hai dusra joke",
      content: "ye joke bhi  ho gaya",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`Server is listening on ${port}`);
});
