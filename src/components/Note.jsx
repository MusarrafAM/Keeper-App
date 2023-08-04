import ModeEditOutlineTwoToneIcon from "@mui/icons-material/ModeEditOutlineTwoTone";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import DeleteIcon from "@mui/icons-material/Delete";
import { motion } from "framer-motion";
import { useState } from "react";

function Note(props) {
  const [edit, setEdit] = useState(false);
  const [headingtextColour, setHeadingTextColour] = useState('black')
  const [contenttextColour, setContentTextColour] = useState('black')

  function handleDelete() {
    props.deleteFunc(props.id);
  }

  function handleEdit() {
    setEdit(true);
    setHeadingTextColour("blue")
    setContentTextColour("#FF2171")
  }

  function handleCorrect() {
    setEdit(false);
    setHeadingTextColour("black")
    setContentTextColour("black")
  }

  return (
    // <Zoom in={true} timeout={600}>
    <motion.div
      className="note"
      initial={{ opacity: 0, scale: 1.4 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(0,0,0)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {!edit ? (
        <button onClick={handleEdit}>
          <ModeEditOutlineTwoToneIcon style={{ color: '#8C3333' } }/>
        </button>
      ) : (
        <button onClick={handleCorrect}>
          <CheckTwoToneIcon  style={{ color: 'green' }}/>
        </button>
      )}
      <h1 contentEditable={edit} className="heading"  style={{ color: headingtextColour }}>{props.title}</h1>
      <p contentEditable={edit} className="content"  style={{ color: contenttextColour }}>{props.content}</p>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </motion.div>
    // </Zoom>
  );
}

export default Note;
