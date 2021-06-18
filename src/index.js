import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className='person'>
      <img src={url} />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section class='person-list'>
      <Person img="34" name="Narendra" job="Developer">
        <p>"I am a Developer"</p>
      </Person>
      <Person img="22" name="Digvijay" job="Data Scientist"></Person>
      <Person img="56" name="Pratik" job="Front-End Developer"></Person>
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById("root"));
