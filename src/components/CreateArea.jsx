import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";


function CreateArea(props) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    // const name = event.target.name
    // const value = event.target.value
    const { name, value } = event.target; //Destructuring  Above 2 line into 1 line.
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    if (!(formData.title === "" && formData.content === "")) {
      // If Both Empty Not adding the notes.
      props.saveFunc(formData); // we declare this saveFunc in App.jsx as saveToDo
      setFormData({ title: "", content: "" });
    }
    

    event.preventDefault(); //Prevent the site from refreshing need to add this when using forms.
  }

  // click animation
  const [isExpanded, setisExpanned] = useState(false);

  function expand(event) {
    setisExpanned(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={formData.content}
          onChange={handleChange}
          onClick={expand}
        />

        <Zoom in={isExpanded} timeout={1000}>
          <Fab type="submit" color="info">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

// const [value, setValue] = React.useState(0);
