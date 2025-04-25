const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const app = express();
const PORT = 8080;

app.use(cors());

const BlogPosts = [
    {
      slug: 'learning-react',
      title: 'Learning React',
      description: 'React is a powerful JavaScript library for building user interfaces.',
    },
    {
      slug: 'react-router-basics',
      title: 'React Router Basics',
      description: 'Learn how to use React Router to handle routing in your React applications.',
    },
    {
      slug: 'state-vs-props',
      title: 'Understanding State vs Props',
      description: 'A fundamental concept in React is understanding the difference between state and props.',
    },
    {
      slug: 'hooks-overview',
      title: 'Hooks Overview',
      description: 'React Hooks let you use state and other React features without writing a class.',
    }
  ];

app.get("/", (req, res) => {
  res.send("API đang chạy!");
});

app.get("/api/posts", (req, res) => {
  res.json(BlogPosts);
});

app.get("/api/posts/:slug", (req, res) => {
  const { slug } = req.params;
  const post = BlogPosts.find((item) => item.slug === slug);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.json(post);
});

app.get("/api/stats", (req, res) => {
  const count = BlogPosts.length;
  res.json(count);
});

app.post("/api/post", jsonParser, (req, res) => {
  const post = {
    slug: req.body.slug,
    title: req.body.title,
    description: req.body.description
  };
  BlogPosts.push(post);
  res.status(200).send({ message: "Posted successful" });
});

app.post("/api/login", jsonParser, (req, res) => {
  const account = {
    username: req.body.username,
    password: req.body.password
  };

  if(account.username == "admin" && account.password == "123") {
    res.status(200).send({message: "Login succesful"});
  } else {
    res.status(400).send({message: "Login failed"});
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running at http://localhost:8080`);
});
