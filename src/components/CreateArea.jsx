import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [inputNote, updateNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    updateNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addNote(inputNote);
          updateNote({
            title: "",
            content: "",
          });
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputNote.content}
        />
        <button><AddIcon/></button>
      </form>
    </div>
  );
}

export default CreateArea;
