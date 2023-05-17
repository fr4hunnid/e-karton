import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoTrash, IoLogIn } from "react-icons/io5";

function DoctorsList() {
  function handleDelete(_id) {
    const conf = window.confirm(
      "Jeste li sigurni da želite obrisati liječnika?"
    );

    if (conf) {
      axios
        .delete(`http://localhost:8500/api/doctors/${_id}`)
        .then((res) => {
          alert("Obrisano!");
        })
        .catch((err) => console.log(err));
      window.location.reload();
    }
  }

  const Doctor = (props) => (
    <tr>
      <td>{props.ime}</td>
      <td>{props.prezime}</td>
      <td>{props.email}</td>
      <td>{props.oib}</td>
      <td>{props.broj_sustava}</td>
      <td>{props.specijalizacija}</td>
      <td>{props.sifra_specijalizacije}</td>
      <button
        onClick={() => {
          handleDelete(props._id);
        }}
        className="button-74brisi"
      >
        <IoTrash></IoTrash>
      </button>
      <Link to={`/docprofile/${props._id}`}>
        <button className="button-74manji">
          <IoLogIn></IoLogIn>
        </button>
      </Link>
    </tr>
  );

  const [doktori, setdoktori] = useState([]);

  //fetch
  useEffect(() => {
    async function getdoktori() {
      const response = await fetch(`http://localhost:8500/api/doctors`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const doktori = await response.json();
      setdoktori(doktori);
    }

    getdoktori();

    return;
  }, [doktori.length]);

  //mapping za ispis u tabelu
  function DoctorsList() {
    if (doktori) {
      return doktori.map((doktor) => {
        return (
          <Doctor
            _id={doktor._id}
            ime={doktor.ime}
            prezime={doktor.prezime}
            email={doktor.email}
            oib={doktor.oib}
            broj_sustava={doktor.broj_sustava}
            specijalizacija={doktor.specijalizacija}
            sifra_specijalizacije={doktor.sifra_specijalizacije}
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
      <h3 style={{ fontSize: 40 }}>Lista liječnika</h3>
      <h3>Broj liječnika: {doktori.length}</h3>

      <Link to="/adddoc">
        <button className="button-74">Dodaj liječnika</button>
      </Link>

      <table className="container" style={{ marginTop: 40 }}>
        <thead>
          <tr>
            <th>Ime</th>
            <th>Prezime</th>
            <th>email</th>
            <th>OIB</th>
            <th>Broj sustava</th>
            <th>Specijalizacija</th>
            <th>Šifra specijalizacije</th>
            <th>Opcija</th>
          </tr>
        </thead>
        <tbody>{DoctorsList()}</tbody>
      </table>
    </div>
  );
}

export default DoctorsList;
