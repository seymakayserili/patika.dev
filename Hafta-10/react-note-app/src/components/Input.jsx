import {useRef} from "react";

import {useSelector, useDispatch} from "react-redux";
import {changeTheme} from "../redux/ColorTheme/ColorSlice"
import {addNote} from "../redux/Notes/NotesSlice"


function Input() {

  const colorThemes = ["pink","purple","yellow","blue","green"];
  const colorTheme = useSelector((state) => state.colorTheme.theme)
  const dispatch = useDispatch();

  const titleRef = useRef();
  const noteRef = useRef();

  const handleSubmit = () => {
    dispatch(addNote({title: titleRef.current.value, note: noteRef.current.value,theme:colorTheme}));
    titleRef.current.value = "";
    noteRef.current.value = "";
  };
  
  return (
    <div className='input'>
        <input type="text"  placeholder='Title' ref={titleRef}/>
        <textarea name="noteArea" cols="60" rows="5" placeholder='Enter your note here' ref={noteRef}>
        </textarea>
        <div className='inputFooter'>
        <div className='colorPicker'>
          {
            colorThemes.map((element,index) => {

              return <button onClick={(e) => {dispatch(changeTheme(e.target.value))}} key={index} value={element} className={colorTheme == element ? `colorPickerButton ${element} selected` : `colorPickerButton ${element}`}></button>
            })
          }
        </div>
        <button className={`submitButton ${colorTheme}`} onClick={handleSubmit}>Add</button>
        </div>
    </div>
  )
}

export default Input;