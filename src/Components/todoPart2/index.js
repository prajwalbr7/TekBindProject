import { useState } from "react";
import List from "../todoListPart2";
import "./index.css";

const TodoApp=()=>{
  const [inputText, setinputText] = useState("");
  const [data, setdata] = useState([]);

  const onChange = (value) => {
    console.log(value);
    let text = value;
    setinputText(text);
  };

  const AddText = () => {
    let updatedData = [...data, inputText];
    if (inputText.trim() === "") return;
    setdata(updatedData);
    setinputText("");
  };

  const onkeydownEvent = (e) => {
    if (e.key === "Enter") {
      AddText();
    }
  };

  const DeleteList = (id) => {
    console.log(id);
    let Filter = data.filter((_, index) => index !== id);
    setdata(Filter);
  };

  const EditTextUpdate = (id) => {
    setinputText(data[id])
  };
  return (
    <div className="TodoContainer">
      <input
        value={inputText}
        type="text"
        placeholder="Enter a text"
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onkeydownEvent}
      />
      <button onClick={AddText}>Add Text</button>
      {data.length > 0 ? (
        data.map((Item, index) => (
          <List
            DeleteFun={DeleteList}
            EditTextUpdate={EditTextUpdate}
            Item={Item}
            index={index}
            key={index}
          />
        ))
      ) : (
        <p>Start your Day</p>
      )}
    </div>
  );
}
export default TodoApp;