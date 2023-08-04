import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [allnotes, setAllnotes] = useState([
    { title: "Friday", content: "Met an amazing personality" },
  ]);

  function saveToDo(newNote) {
    setAllnotes((prevDatas) => {
      return [...prevDatas, newNote];
    });
  }

  function deleteItem(id) {
    setAllnotes((preValue) => {
      return preValue.filter((eachNote, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea saveFunc={saveToDo} />
      {allnotes.map((eachToDo, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={eachToDo.title}
            content={eachToDo.content}
            deleteFunc={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
