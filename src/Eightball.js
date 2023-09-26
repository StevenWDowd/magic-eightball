import React from "react";
import { useState } from "react";
import _ from "lodash";

const ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];
/**
 * Magic Eightball displaying message and color on click.
 *
 * Props: answers, an array of objects with a msg and a color (both strings)
 * answers = [
 * { msg: "It is certain.", color: "green" }, ...
 * ]
 *
 * State: result: an object from answers
 * { msg: "It is certain.", color: "green" }
 *
 * App -> Eightball
 */
function Eightball({ answers = ANSWERS }) {
  const [result, setResult] = useState({
    msg: "Think of a question",
    color: "black"
  });

  function getAnswer() {
    return setResult(_.sample(answers));
  }

  return (
    <div className="Eightball-container">
      <div className="Eightball" style={{ backgroundColor: result.color }}
        onClick={getAnswer}>{result.msg}</div>
      <button className="Eightball-reset" onClick={() => setResult({
        msg: "Think of a question",
        color: "black"
      })}>reset</button>
    </div>
  );
}

export default Eightball;