import React from 'react'
import axios from "axios";


    function Search() {
        return (
          <nav class="navbar navbar-light bg-light justify-content-between">
          <a class="navbar-brand">Enter a Game of Thrones Character</a>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-primary my-2 my-sm-0" onClick={handleclick} type="submit">Search</button>
          </form>
        </nav>
        );
      }

      function handleclick()
      {
        
        axios.get("https://thronesapi.com/api/v2/Characters").then((response) => {
          let data = response.data;
        alert(data);
      
      })
      }
    
export default Search