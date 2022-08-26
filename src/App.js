import React, {useEffect, useState} from "react";
import './style.css';

//    https://restcountries.com/#api-endpoints-v3-all

// https://restcountries.com/v3.1/all

function App() {
  const[dados, setDados] = useState([]);

  useEffect(() => {
    function loadApi(){
      let url = "https://restcountries.com/v3.1/all"

      fetch(url)
      .then((resultado) => resultado.json())
      .then((json)=>{
        setDados(json)
      })
    }
    loadApi()

  }, []);

  return (
    <div className="container">
      <header>
        <strong>Lista de Países</strong>
      </header>
      <table cellspacing="0">
        <thead>
          <tr>
            <th>Countries List</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Area</th>
            <th>Currencies</th>
          </tr>
        </thead>
      {dados.map((item) =>{
        return(
          <tr>   
            <td>
              {item?.name?.official || "-"}
            </td>
            <td>
              {item?.capital || "-"}
            </td>
            <td>
              {item?.area || "-"}
            </td>
              {Object.keys(item.currencies).map(subitem => <td> {subitem} </td>)}
          </tr>
        )
      })}
      </table>
    </div>

  );
}

export default App;
