import { React, useEffect, useState } from 'react';
import axios from "axios";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Hello() {
  return <h2>Hello I am Cheeze!</h2>;
}

function Testpage() {
  return (
    <>
	    <h1>Welcome to my page!</h1>
      <Hello />
      
      <><div>
        <button onClick={refreshPage}>Click to reload!</button>
      </div>
      </>
	    
    </>
  );
}


async function fetchData1() {
  
  try {
    const result = await axios.get("https://randomuser.me/api/");
    console.log(result.data.results) ;
    const data = result.data.results;
    let name = data[0]['name']['title']+'. '+data[0]['name']['first']+' '+data[0]['name']['last'] ;
    let email = data[0]['email'];
   
    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);
    console.log(name, email) ;
    
    
    
  } catch (error) {
    console.error(error);
  }
}

function refreshPage() {
  window.location.reload(false);
}


fetchData1();

ReactDOM.render(<Testpage />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
