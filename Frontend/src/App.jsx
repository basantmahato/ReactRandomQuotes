import React, { useState } from "react";

function App() {
  const [quote, setQuote] = useState(
    "The only limit to our realization of tomorrow is our doubts of today."
  );
  const [author, setAuthor] = useState("Franklin D. Roosevelt");

  const fetchJoke = async () => {
    try {
      const response = await fetch("/jokesapi");
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4">
     
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 drop-shadow-lg">
        🎭 Random Quotes
      </h1>

    
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-6 sm:p-8 max-w-xl w-full text-center">
        <p className="text-lg sm:text-xl font-medium text-gray-800 italic mb-4">
          “{quote}”
        </p>
        <p className="text-sm sm:text-base font-semibold text-gray-600">
          – {author}
        </p>

        <button
          onClick={fetchJoke}
          id="new-quote"
          className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold shadow-md hover:scale-105 transform transition"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
