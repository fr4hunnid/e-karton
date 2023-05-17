import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoTrash, IoPrint, IoLogIn } from "react-icons/io5";
import axios from "axios";
function CaseProfile() {
  let { id } = useParams();
  const [casee, setCasee] = useState();
  const [record, setRecord] = useState();

  useEffect(() => {
    const response = fetch(`http://localhost:8500/api/cases/${id}`).then(
      (response) => {
        console.log(response);
        response.json().then((casee) => setCasee(casee));
      }
    );
  }, [id]);
  if (!casee) return null;

  function Caselist() {
    if (casee) {
      return casee.map((casee) => {
        return (
          <Casee
            _id={casee._id}
            ime_lijecnika={casee.ime_lijecnika}
            prezime_lijecnika={casee.prezime_lijecnika}
            dijagnoza={casee.dijagnoza}
            sifra_bolesti={casee.sifra_bolesti}
            datum_dijagnoze={casee.datum_dijagnoze}
            specijalizacija={casee.specijalizacija}
            sifra_specijalizacije={casee.sifra_specijalizacije}
            mjesto={casee.mjesto}
            ime_pacijenta={casee.ime_pacijenta}
            prezime_pacijenta={casee.prezime_pacijenta}
            datum_rod_pacijenta={casee.datum_rod_pacijenta}
            id={casee.id}
          />
        );
      });
    } else {
      return null;
    }
  }
  const Casee = (props) => (
    <tr>
      <td>{props._id}</td>
      <td>{props.ime_lijecnika}</td>
      <td>{props.prezime_lijecnika}</td>
      <td>{props.sifra_bolesti}</td>
      <td>{props.dijagnoza}</td>
      <td>{props.datum_dijagnoze}</td>
      <td>{props.specijalizacija}</td>
      <td>{props.sifra_specijalizacije}</td>
      <td>{props.mjesto}</td>
      <td>{props.ime_pacijenta}</td>
      <td>{props.prezime_pacijenta}</td>
      <td>{props.datum_rod_pacijenta}</td>
      <td>{props.id}</td>
    </tr>
  );

  return (
    <div>
      <form action="/api/records" method="post" enctype="multipart/form-data">
        <label for="file">File</label>
        <input id="file" name="file" type="file" />
        <button className="button-74">Dodaj privitak nalazu</button>
      </form>
      <table className="table-wrapper" style={{ marginTop: 40 }}>
        <thead>
          <tr>
            <th>Ime liječnika </th>
            <td>{casee.ime_lijecnika} </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Prezime liječnika </th>
            <td>{casee.prezime_lijecnika} </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Šifra bolesti </th>
            <td>{casee.sifra_bolesti} </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Dijagnoza </th>
            <td>{casee.dijagnoza} </td>
            <td></td>
            <td></td>
          </tr>{" "}
          <tr>
            <th>Datum dijagnoze </th>
            <td>{casee.datum_dijagnoze} </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Specijalizacija </th>
            <td>{casee.specijalizacija} </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Šifra specijalizacije </th>
            <td>{casee.sifra_specijalizacije} </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Mjesto </th>
            <td>{casee.mjesto} </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Ime pacijenta </th>
            <td>{casee.ime_pacijenta} </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Prezime pacijenta </th>
            <td>{casee.prezime_pacijenta} </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Datum rođenja pacijenta </th>
            <td>{casee.datum_rod_pacijenta} </td>
            <td></td>
            <td></td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default CaseProfile;
