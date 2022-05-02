import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import axios from 'axios';

function App() {

  const uri="http://localhost:8000/api/ambassadors/";
  const [data, setData] = useState([]);
  const dataGet=async()=>{
    await axios.get(uri)
        .then(response=>{
          setData(response.data);
        })
  }

  useEffect(()=>{
    dataGet();
  },[])
  return (
    <div>
      <div className="container py-3">
        <table className="table table-responsive">
          <thead className="bg-light">
            <tr>
              <th>Id</th>
              <th>Ambassador</th>
            </tr>
          </thead>
          <tbody>
          {data.map(framework=>(
              <tr key={framework.id}>
                <td>{framework.id}</td>
                <td>{framework.full_name}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
