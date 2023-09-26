import React from "react";
import { useState } from "react";
import _ from "lodash";

/**
 * Magic Eightball displaying message and color on click.
 * Props: answers, an array of objects with a msg and a color (both strings)
 * State: result: an object from answers
 * App -> Eightball
 */
function Eightball({ answers }) {
  const [result, setResult] = useState({msg: "Think of a question",
                                        color: "black"});

  return (
    <div className="eightball" style={{backgroundColor:result.color}}
                onClick={() => setResult(_.sample(answers))}>{result.msg}</div>
  )
}

export default Eightball;