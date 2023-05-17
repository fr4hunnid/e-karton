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
      <form action="/records/:id" method="POST" enctype="multipart/form-data">
        <div>
          <label for="name">Naziv nalaza</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value=""
            name="Naziv nalaza"
            required
          />
        </div>
        <div>
          <label for="desc">Opis nalaza</label>
          <textarea
            id="desc"
            name="desc"
            value=""
            rows="2"
            placeholder="Opis"
            required
          ></textarea>
        </div>
        <div>
          <label for="image">Privitak</label>
          <input type="file" id="image" name="image" value="" required />
        </div>
        <div>
          <button className="button-74manji" type="submit">
            Potvrdi
          </button>
        </div>
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
