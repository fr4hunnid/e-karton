import React from "react";
import { Link } from "react-router-dom";
import { IoBackspace } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddDoctor() {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [email, setEmail] = useState("");
  const [broj_sustava, setBrojSustava] = useState("");
  const [oib, setOib] = useState("");
  const [specijalizacija, setSpecijalizacija] = useState("");
  const [sifra_specijalizacije, setSifraSpecijalizacije] = useState("");

  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    ime: "",
    prezime: "",
    email: "",
    mbo: null,
    oib: null,
  });

  const handleChange = (e) => {
    const { ime, prezime, email, oib, mbo, value } = e.target;
    setPatient((prev) => {
      return {
        ...prev,
        [ime]: value,
        [prezime]: value,
        [email]: value,
        [mbo]: value,
        [oib]: value,
      };
    });
  };

  const createPatient = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8500/api/doctors", {
      ime: ime,
      prezime: prezime,
      email: email,
      broj_sustava: broj_sustava,
      oib: oib,
      specijalizacija: specijalizacija,
      sifra_specijalizacije: sifra_specijalizacije,
    });

    navigate("/doclist");
  };
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">
            {" "}
            <h1>e-pacijent</h1>{" "}
          </Link>
        </div>
        <p style={{ fontSize: 100 }}>👨‍⚕️</p>
        <ul>
          <li>
            <h1>Dodavanje liječnika</h1>
            <Link to="/doclist">
              <IoBackspace size={40}></IoBackspace>
            </Link>
          </li>
        </ul>
      </header>
      <section className="form">
        <form>
          <div className="form-group">
            <p>Ime liječnika</p>

            <input
              onChange={(e) => {
                setIme(e.target.value);
              }}
              type="ime"
              value={setPatient.ime}
              className="form-control"
              id="ime"
              name="ime"
              placeholder="Ime"
            />
          </div>

          <div className="form-group">
            <p>Prezime liječnika</p>

            <input
              onChange={(e) => {
                setPrezime(e.target.value);
              }}
              type="prezime"
              value={setPatient.prezime}
              className="form-control"
              id="prezime"
              name="prezime"
              placeholder="Prezime"
            />
          </div>

          <div className="form-group">
            <p>e-mail</p>

            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              value={setPatient.email}
              className="form-control"
              id="email"
              name="email"
              placeholder="email"
            />
          </div>
          <div className="form-group">
            <p>Broj sustava liječnika</p>

            <input
              onChange={(e) => {
                setBrojSustava(e.target.value);
              }}
              type="broj_sustava"
              value={setPatient.broj_sustava}
              className="form-control"
              id="broj_sustava"
              name="broj_sustava"
              placeholder="Broj sustava"
            />
          </div>
          <div className="form-group">
            <p>OIB liječnika</p>

            <input
              onChange={(e) => {
                setOib(e.target.value);
              }}
              type="oib"
              value={setPatient.oib}
              className="form-control"
              id="oib"
              name="OIB"
              placeholder="OIB"
            />
          </div>
          <div className="form-group">
            <p>Naziv specijalizacije</p>

            <input
              onChange={(e) => {
                setSpecijalizacija(e.target.value);
              }}
              type="specijalizacija"
              value={setPatient.oib}
              className="form-control"
              id="specijalizacija"
              name="specijalizacija"
              placeholder="Specijalizacija"
            />
          </div>
          <div className="form-group">
            <p>Šifra specijalizacije</p>

            <input
              onChange={(e) => {
                setSifraSpecijalizacije(e.target.value);
              }}
              type="sifra_specijalizacije"
              value={setPatient.oib}
              className="form-control"
              id="sifra_specijalizacije"
              name="sifra_specijalizacije"
              placeholder="Šifra specijalizacije"
            />
          </div>

          <div className="form-group">
            <button
              onClick={createPatient}
              type="submit"
              className="btn btn-block"
            >
              Dodaj
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddDoctor;
