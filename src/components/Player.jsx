import { useState } from "react";

export default function Player({ initalName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableName, setEditableName] = useState(initalName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleInputChange(event) {
    setEditableName(event.target.value);
  }

  let editedName = <span className="player-name">{editableName}</span>;

  if (isEditing) {
    editedName = (
      <input type="text" value={editableName} onChange={handleInputChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {editedName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
