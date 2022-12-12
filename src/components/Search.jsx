import { useState } from "react";
import List from './List';
function Search() {
    const [searched,setSearched]=useState("");

    return (  
        <div>
            <h2>Expenses</h2>
            <input type="text" placeholder="Type to search..." style={{width:'100%',padding:'7px',margin:'2rem 0'}} onChange={(e)=>setSearched(e.target.value)}/>
             <List searchedvalue={searched}/>
        </div>
    );
}

export default Search;