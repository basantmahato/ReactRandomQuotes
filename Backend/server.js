const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const quotes = [
  { "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.", "author": "Nelson Mandela" },
  { "quote": "The way to get started is to quit talking and begin doing.", "author": "Walt Disney" },
  { "quote": "Life is what happens when you're busy making other plans.", "author": "John Lennon" },
  { "quote": "The purpose of our lives is to be happy.", "author": "Dalai Lama" },
  { "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.", "author": "Martin Luther King Jr." },
  { "quote": "The best way to predict the future is to create it.", "author": "Peter Drucker" },
  { "quote": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt" },
  { "quote": "Your time is limited, so don’t waste it living someone else’s life.", "author": "Steve Jobs" },
  { "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill" },
  { "quote": "Happiness depends upon ourselves.", "author": "Aristotle" },
  { "quote": "Do what you can, with what you have, where you are.", "author": "Theodore Roosevelt" },
  { "quote": "It always seems impossible until it's done.", "author": "Nelson Mandela" },
  { "quote": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt" },
  { "quote": "If you want to lift yourself up, lift up someone else.", "author": "Booker T. Washington" },
  { "quote": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson" },
  { "quote": "Everything you’ve ever wanted is on the other side of fear.", "author": "George Addair" }
];

app.get("/quotesapi", (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

app.listen(4000, () => {
  console.log("✅ Server is running on http://localhost:4000");
});
