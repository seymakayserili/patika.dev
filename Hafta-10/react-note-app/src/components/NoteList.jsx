import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {deleteNote} from "../redux/Notes/NotesSlice";


function NoteList() {

    const filter = useSelector((state) =>  state.filterNote.search);

    
    const notes = useSelector((state) => state.notes.notes);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        if(window.confirm("Note silinsin mi?")){
            dispatch(deleteNote(id));
        };
    };
    let filteredNotes = notes;

    {
        filter != "" ?  filteredNotes = notes.filter((element) => {
            if(element.title.includes(filter) || element.note.includes(filter)){
                return element
            }
        }) : filteredNotes;
    }
  return (
    <div className="noteListWrapper">
        <div className='noteList'>
            {filteredNotes.length != 0 ?
                (filteredNotes.map((element) => {
                    return <div className="note" key={element.id}>
                    <div className={`noteTitle ${element.theme}`}>
                        <div>{element.title}</div>
                    </div>
                    <div className='noteBody'>
                     {element.note}
                    </div>
                    <div className='noteFooter'>
                        <div><button className={`noteButton ${element.theme}`} onClick={() => handleDelete(element.id)}>Sil</button></div>
                    </div>
                </div>
                })) : <div><h2>Not almaya başlayabilirsin...</h2></div>
            }
        </div>
    </div>
  )
}

export default NoteList