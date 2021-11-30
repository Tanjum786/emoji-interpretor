import React, { useState } from "react";
import "./styles.css";
// var username =prompt("enter your name");
// var color = "blue";
var emojies = {
  "😀": "Smiling",
  "😳": "  disbelief",
  "🤗": "Huging face",
  "😔": "sad",
  "❤️": "love",
  "😑": "annoyance",
  "😭": "crying face"
};
var emojiesKnow = Object.keys(emojies);

export default function App() {
  var [emoji, setEmoji] = useState(" ");
  var [meaning, setMeaning] = useState("...emoji meaning will appear here...");
  function emojiInputHandlear(event) {
    var userInput = event.target.value;
    setEmoji(userInput);
    if (userInput in emojies) {
      setMeaning(emojies[userInput]);
    } else {
      setMeaning("failure to recognize the emoji");
    }
  }
  function emojiClick(emoji) {
    var meaning = emojies[emoji];
    setMeaning(meaning);
  }
  return (
    <body>
      <div className="App">
        <h1>inside outt</h1>
        <input
          onChange={emojiInputHandlear}
          value={emoji}
          placeholder={"search your emojis"}
        />
        <h2>{emoji}</h2>
        <h2> {meaning} </h2>

        {/* <h2> Emojis we know</h2> */}
        {emojiesKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClick(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </body>
  );
}
