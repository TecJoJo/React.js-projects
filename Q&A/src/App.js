import React, { useState } from "react";
import questions from "./data";
import data from "./data";
import Question from "./Question";
import SingleQuestion from "./Question";
//my own solution is here

/*function App() {
  return (
    <section>
      {data.map((question) => {
        const { id, title, info } = question;
        return (
          <section id={id}>
            <div>{title}</div>
            <article>{info}</article>
          </section>
        );
      })}
    </section>
  );
}*/

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and ansers about login</h3>
        <section className="info">
          {questions.map((question) => {
            const { id } = question;
            return <SingleQuestion key={id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
