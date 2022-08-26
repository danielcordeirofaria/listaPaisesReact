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
      
      <table cellspacing="0" className="table">
        <thead>
          <tr>
            <th colspan="4" className="tableTitle">Countries List</th>
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
              {item?.name?.common || "-"}
            </td>
            <td>
              {item?.capital || "-"}
            </td>
            <td>
              {item?.area.toFixed(2) || "-"}
            </td>
            <td>
            {item.currencies && Object.keys(item?.currencies).map(sub => <p>{sub}</p>)|| "-"}            </td>
          </tr>
        )
      })}
      </table>
      <div className="footer">
        <p>Desenvolvido por Daniel Faria</p>
        <p className="year">2022</p>
      </div>
    </div>

  );
}

export default App;
