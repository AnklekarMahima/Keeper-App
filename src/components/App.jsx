import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [listitems, updateListItems] = useState([]);
  

  function addItem(inputNote) {
    updateListItems((prevValue) => {
      return [...prevValue, inputNote];
    });
  }

  function deleteNote(id) {
    updateListItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addItem} />
      {listitems.map((item, index) => (
        <Note
          id={index}
          key={index}
          Title={item.title}
          Content={item.content}
          onDelete={deleteNote}
          
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
