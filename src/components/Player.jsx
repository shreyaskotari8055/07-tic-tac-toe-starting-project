import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}){
const [playerName,setPlayerName] = useState(initialName);
const [isEditing, setISEditing] = useState(false);

  function handleClick(){
    // setISEditing(!isEditing) // not a good practice
    setISEditing((editing)  => !editing)
    
    if(isEditing){
      onChangeName(symbol, playerName)
    }
  }

  function handleChange(event){
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player name">{playerName}</span>
//   let buttoonCaption = 'Edit';
  if(isEditing){
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}></input>
//    buttoonCaption = 'Save'
  }

return (

    <li className = {isActive ? 'active' : undefined}> 
      <span className="player">
        {editablePlayerName}
        <span className="player symbol">{symbol}</span>
      </span>
        <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>

    )
}