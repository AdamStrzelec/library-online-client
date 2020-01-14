import 'bootstrap/dist/css/bootstrap.css';


import React from 'react';
import Map from '../../components/Map/Map'

const Contact = () => (
    <div className="bg-secondary">
        <h1 className="offset-5 pt-3">KONTAKT</h1>
        <div className="d-flex">
        <div className="offset-1 col-5 pt-5 pb-5">
    
    <p>Siedzibę naszej firmy znajdziesz pod: Tarnów 33-100</p>
    <p>Jana Pawła 21</p>
    <p>Telefon:545636727</p>
    <p>fax:4235346456</p>
    
    </div>
    <div className="offset-1" >
        <Map></Map>
    </div>
        </div>
  
    
 </div>
);

export default Contact;