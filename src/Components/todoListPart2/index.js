import { memo } from "react";
import "./index.css";

const List = (props) => {
  const { index, Item, EditTextUpdate, DeleteFun } = props;
  const DeleteItems = () => {
    DeleteFun(index);
  };
  const EditText = () => {
    EditTextUpdate(index);
  };
  return (
    <li className="liElement" onClick={DeleteItems}>
      <p className="p">{Item}</p>
      <button onClick={EditText}>Edit Text</button>
    </li>
  );
};
export default memo(List);
