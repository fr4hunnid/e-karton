import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoTrash, IoLogIn } from "react-icons/io5";

function PatientsList() {
  function handleDelete(_id) {
    const conf = window.confirm(
      "Jeste li sigurni da želite obrisati korisnika?"
    );

    if (conf) {
      axios
        .delete(`http://localhost:8500/api/patients/${_id}`)
        .then((res) => {
          alert("Obrisano!");
        })
        .catch((err) => console.log(err));
      window.location.reload();
    }
  }

  const Pacijent = (props) => (
    <tr>
      <td>{props.ime}</td>

      <td>{props.prezime}</td>
      <td>{props.email}</td>
      <td>{props.mbo}</td>
      <td>{props.oib}</td>
      <button
        onClick={() => {
          handleDelete(props._id);
        }}
        className="button-74brisi"
      >
        <IoTrash></IoTrash>
      </button>
      <Link to={`/patprofile/${props._id}`}>
        <button className="button-74manji">
          <IoLogIn></IoLogIn>
        </button>
      </Link>
    </tr>
  );

  const [pacijenti, setPacijenti] = useState([]);

  //fetch
  useEffect(() => {
    async function getPacijenti() {
      const response = await fetch(`http://localhost:8500/api/patients`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const pacijenti = await response.json();
      setPacijenti(pacijenti);
    }

    getPacijenti();

    return;
  }, [pacijenti.length]);

  //mapping za ispis u tabelu
  function PacijentList() {
    if (pacijenti) {
      return pacijenti.map((pacijent) => {
        return (
          <Pacijent
            _id={pacijent._id}
            ime={pacijent.ime}
            prezime={pacijent.prezime}
            email={pacijent.email}
            mbo={pacijent.mbo}
            oib={pacijent.oib}
          />
        );
      });
    } else {
      return null;
    }
  }

  //ispis u tabelu
  return (
    <div>
      <h3 style={{ fontSize: 40 }}>Lista pacijenata</h3>
      <h3>Broj pacijenata: {pacijenti.length}</h3>

      <Link to="/addpat">
        <button className="button-74">Dodaj pacijenta</button>
      </Link>

      <table className="table-wrapper" style={{ marginTop: 40 }}>
        <thead>
          <tr>
            <th>Ime</th>
            <th>Prezime</th>
            <th>email</th>
            <th>MBO</th>
            <th>OIB</th>
            <th>Opcija</th>
          </tr>
        </thead>
        <tbody>{PacijentList()}</tbody>
      </table>
    </div>
  );
}

export default PatientsList;
/*



import React, { Component } from "react";

class PatientsList extends Component {
  constructor() {
    super();

    this.state = {
      patients: [],
      finishedLoading: true
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8500/api/patients");
    const json = await response.json();
    this.setState({ patients: json.patients, finishedLoading: false });
  }

  reload = async () => {
    const response = await fetch("http://localhost:8500/api/patients");
    const json = await response.json();
    this.setState({ patients: json.patients, finishedLoading: true });
  };

  render() {
    if (this.state.patients.length === 0) {
      return (
        <div className="container">
          <h1>Nije dohvaćeno!</h1>
        </div>
      );
    }

    return this.state.patients.map((patients, _id) => (
      <div class="container" _id={_id}>
        <h2>{patients.ime}</h2>
        <p> {patients.prezime}</p>
        <p>{patients.email}</p>
        <p>{patients.broj_sustava}</p>
        <p>{patients.oib}</p>
      </div>
    ));
  }
}

export default PatientsList;
/*
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
 
const Record = (props) => (
 <tr>
   <td>{props.record.ime}</td>
   <td>{props.record.prezime}</td>
   <td>{props.record.email}</td>
   <td>{props.record.broj_sustava}</td>
   <td>{props.record.oib}</td>


   <td>
     <Link className="btn btn-link" to={`/api/patients${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:8500/api/patients`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:8500/api/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Lista pacijenata</h3>
     <table className="container" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Ime</th>
           <th>Prezime</th>
           <th>email</th>
           <th>Broj sustava</th>
           <th>OIB</th>

         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}

import React from 'react';
import axios from 'axios';

class AdminDashboard extends React.Component {

  state = {
    ime: '',
    prezime: '',
    email: '',
    broj_sustava: '',
    oib: '',

    patients: []
  };

  
  componentDidMount = () => {
    this.getPatients();
  };


  getPatients = () => {
    axios.get('http://localhost:8500/api/patients')
      .then((response) => {
        const data = response.data;
        this.setState({ patients: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  handleChange = ({ target }) => {
    const { ime, value } = target;
    this.setState({ [ime]: value });
  };


  submit = (event) => {
    event.preventDefault();

    const payload = {
      ime: this.state.ime,
      prezime: this.state.prezime,
      email: this.state.email,
      broj_sustava: this.state.broj_sustava,
      oib: this.state.oib,

    };


    axios({
      url: 'http://localhost:8500/api/patients',
      method: 'GET',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getPatients();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      ime: '',
      prezime: '',
      email: '',
      broj_sustava: '',
      oib: '',
    });
  };

  displayPatients = (patients) => {



    return patients.map((patient, id) => (
      <div key={id} className="container">
        <div>
          <button>
            Upload
          </button>
        </div>
        <h3>{patient.ime}</h3>
        <p>{patient.prezime}</p>
        <p>{patient.email}</p>
        <p>{patient.broj_sustava}</p>
        <p>{patient.oib}</p>

      </div>
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      
      <div className="contain-table">
        <h2>Admin dashboard</h2>
           <div>
     <h3>Lista pacijenata</h3>
     <h4>
      Upload button
      <button>
        Upload
      </button>
     </h4>
     <table className="container" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Ime</th>
           <th>Prezime</th>
           <th>email</th>
           <th>Broj sustava</th>
           <th>OIB</th>

         </tr>
       </thead>
     </table>
   </div>

        
          {this.displayPatients(this.state.patients)}
        </div>
        
    );
  }
}
export default AdminDashboard;


import {useEffect, useState} from "react";
import axios from "axios";
const AdminDashboard = () => {
  const url = 'http://localhost:8500/api/patients';
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get(url).then(res => {
      setPatients(res.data.patients);
    })
  }, [])

  return <div className="App">
    <h1>List of patients</h1>
    <div>
      <ul>
        {patients.map(c => <li key={c}>{c}</li>)}

      </ul>
    </div>
  </div>
};

export default AdminDashboard;
*/
