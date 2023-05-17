import React from "react";
import { Link } from "react-router-dom";
import { IoBackspace } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddPatient() {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [email, setEmail] = useState("");
  const [mbo, setMbo] = useState("");
  const [oib, setOIb] = useState("");

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

    axios.post("http://localhost:8500/api/patients", {
      ime: ime,
      prezime: prezime,
      email: email,
      mbo: mbo,
      oib: oib,
    });

    navigate("/patlist");
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
        <p style={{ fontSize: 100 }}>😷</p>
        <ul>
          <li>
            <h1>Dodavanje pacijenta</h1>
            <Link to="/patlist">
              <IoBackspace size={40}></IoBackspace>
            </Link>
          </li>
        </ul>
      </header>
      <section className="form">
        <form>
          <p>Ime pacijenta</p>

          <div className="form-group">
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
            <p>Prezime pacijenta</p>

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
            <p>MBO pacijenta</p>

            <input
              onChange={(e) => {
                setMbo(e.target.value);
              }}
              type="mbo"
              value={setPatient.mbo}
              className="form-control"
              id="mbo"
              name="MBO"
              placeholder="MBO"
            />
          </div>
          <div className="form-group">
            <p>OIB pacijenta</p>

            <input
              onChange={(e) => {
                setOIb(e.target.value);
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
            <button onClick={createPatient} type="submit" className="button-74">
              Dodaj
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddPatient;
