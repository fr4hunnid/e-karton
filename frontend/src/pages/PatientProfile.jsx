import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoTrash, IoPrint, IoLogIn } from "react-icons/io5";
import axios from "axios";

const Print = () => {
  //console.log('print');
  let printContents = document.getElementById("printablediv").innerHTML;
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
  window.location.reload();
};

function PatientsList() {
  let { id } = useParams();

  const [user, setUser] = useState();
  const [casee, setCasee] = useState();

  useEffect(() => {
    const response = fetch(
      `http://localhost:8500/api/patients/profile/${id}`
    ).then((response) => {
      console.log(response);
      response.json().then((user) => setUser(user));
    });
  }, [id]);

  useEffect(() => {
    const response = fetch(`http://localhost:8500/api/cases/${id}`).then(
      (response) => {
        console.log(response);
        response.json().then((casee) => setCasee(casee));
      }
    );
  }, [id]);

  console.log(id);
  function handleDelete(_id) {
    const conf = window.confirm("Jeste li sigurni da želite obrisati case?");

    if (conf) {
      axios
        .delete(`http://localhost:8500/api/cases/${_id}`)
        .then((res) => {
          alert("Obrisano!");
        })
        .catch((err) => console.log(err));
      window.location.reload();
    }
  }

  if (!user) return null;
  if (!casee) return null;

  //mapping za ispis u tabelu
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
    <div class="container mt-5 d-flex justify-content-center">
      <div class="card p-3">
        <div class="d-flex align-items-center">
          <div class="image">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
              class="rounded"
              width={155}
            />
          </div>

          <div class="ml-3 w-100">
            <h4 class="mb-0 mt-0">
              {user.ime} {user.prezime}
            </h4>
            <span class="articles">Kategorija </span>

            <span className="number1">Pacijent</span>

            <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
              <div class="d-flex flex-column">
                <span class="articles">MBO </span>
                <span class="number1">{user.mbo}</span>
              </div>

              <div class="d-flex flex-column">
                <span class="followers">e-mail </span>
                <span class="number2">{user.email}</span>
              </div>

              <div class="d-flex flex-column">
                <span class="rating">OIB </span>
                <span class="number3">{user.oib}</span>
              </div>
            </div>

            <div class="button mt-2 d-flex flex-row align-items-center">
              <Link to={`/addcase/${id}`}>
                <button class="button-74">Dodaj slučaj</button>
              </Link>
            </div>
          </div>
          <div>
            <p>
              Karton pacijenta {user.ime} {user.prezime}
            </p>

            <table
              id="printablediv"
              className="table-wrapper"
              style={{ marginTop: 40 }}
            >
              <thead>
                <tr>
                  <th>Opcija </th>

                  <td>
                    <button
                      onClick={() => {
                        handleDelete(id);
                      }}
                      className="button-74brisi"
                    >
                      <IoTrash></IoTrash>
                    </button>
                    <p>Briši</p>
                  </td>

                  <td>
                    <button onClick={Print} className="button-74manji">
                      <IoPrint></IoPrint>
                    </button>
                    <p>Ispis</p>
                  </td>
                  <td>
                    <Link to={`/caseprofile/${id}`}>
                      <button className="button-74manji">
                        <IoLogIn></IoLogIn>
                      </button>
                      <p>Idi na slučaj</p>
                    </Link>
                  </td>
                </tr>
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
        </div>
      </div>
    </div>
  );
}

export default PatientsList;
