import React from "react";

function Home() {
  return (
    <div>
      <blockquote className="blockquote">
        <p className="navbar navbar-light bg-light justify-content-between">
          Welcome
        </p>
      </blockquote>
      <p className="navbar justify-content-between">
        <em>
          This a React GOT website. It provides functionality to search for
          Characters and also find data for the Character Houses. Over the
          course of eight seasons, Game of Thrones broke many records, created a
          few controversies, and gave us 73 ambitious episodes of television.
          And, of course, it made us all want a dragon of our own..
        </em>
      </p>
    </div>
  );
}

export default Home;
