import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './css/main.css'


function App() {
  return (
    <>
      <div className="storeRedirect">
      <Link to="/store"> <Button className="buttons">Men's</Button> </Link>
      <Link to="/store"> <Button className="buttons">Women</Button> </Link>
      <Link to="/store"> <Button className="buttons">Kids</Button> </Link>
      </div>
    </>
  );
}

export default App;
