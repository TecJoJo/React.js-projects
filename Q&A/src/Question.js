import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (props) => {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle((currentToggle) => !toggle);
  };
  return (
    <article className="question">
      <header>
        <h4>{props.title}</h4>
        <button className="btn" onClick={toggleButton}>
          {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {toggle && <p>{props.info}</p>}
    </article>
  );
};

export default Question;
