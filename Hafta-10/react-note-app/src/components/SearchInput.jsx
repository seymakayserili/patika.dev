import {useState,useEffect} from 'react';
import {useDispatch} from  "react-redux";
import {filterNote} from "../redux/Filter/FilterSlice"

function SearchInput() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(filterNote(search));
  },[search]);
  
  return (
    <div className='searchInput'>
        <input type="text" placeholder='Search' value={search} onChange={(e) => {setSearch(e.target.value)}}/>
    </div>
  )
}

export default SearchInput;