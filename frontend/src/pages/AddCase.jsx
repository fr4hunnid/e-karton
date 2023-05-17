import React from "react";
import { Link } from "react-router-dom";
import { IoBackspace } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function AddCase() {
  let { id } = useParams();

  const [ime_lijecnika, setIme_lijecnika] = useState("");
  const [prezime_lijecnika, setPrezime_lijecnika] = useState("");
  const [dijagnoza, setDijagnoza] = useState("");
  const [sifra_bolesti, setSifra_bolesti] = useState("");
  const [specijalizacija, setSpecijalizacija] = useState("");
  const [sifra_specijalizacije, setSifra_specijalizacije] = useState("");
  const [datum, setDatum] = useState("");
  const [mjesto, setMjesto] = useState("");
  const [ime_osiguranika, setIme_osiguranika] = useState("");
  const [prezime_osiguranika, setPrezime_osiguranika] = useState("");
  const [datum_rod_pacijenta, setDatum_rod_pacijenta] = useState("");
  const [patient_id, setPatient_id] = useState("");
  const navigate = useNavigate();
  const [casee, setCase] = useState({
    _id: id,
    ime_lijecnika: "",
    prezime_lijecnika: "",
    dijagnoza: "",
    sifra_bolesti: "",
    specijalizacija: "",
    sifra_specijalizacije: "",
    datum: null,
    mjesto: "",
    ime_osiguranika: "",
    prezime_osiguranika: "",
    datum_rod_pacijenta: null,
    patient_id: id,
  });

  const handleChange = (e) => {
    const {
      _id,
      ime_lijecnika,
      prezime_lijecnika,
      dijagnoza,
      sifra_bolesti,
      specijalizacija,
      sifra_specijalizacije,
      datum,
      mjesto,
      ime_osiguranika,
      prezime_osiguranika,
      datum_rod_pacijenta,
      id,
      value,
    } = e.target;
    setCase((prev) => {
      return {
        ...prev,
        [_id]: id,
        [ime_lijecnika]: value,
        [prezime_lijecnika]: value,
        [dijagnoza]: value,
        [sifra_bolesti]: value,
        [specijalizacija]: value,
        [sifra_specijalizacije]: value,
        [datum]: value,
        [mjesto]: value,
        [ime_osiguranika]: value,
        [prezime_osiguranika]: value,
        [datum_rod_pacijenta]: value,
        [patient_id]: id,
      };
    });
  };

  const createCase = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:8500/api/cases/${id}`, {
      _id: id,
      ime_lijecnika: ime_lijecnika,
      prezime_lijecnika: prezime_lijecnika,
      dijagnoza: dijagnoza,
      sifra_bolesti: sifra_bolesti,
      specijalizacija: specijalizacija,
      sifra_specijalizacije: sifra_specijalizacije,
      datum: datum,
      mjesto: mjesto,
      ime_osiguranika: ime_osiguranika,
      prezime_osiguranika: prezime_osiguranika,
      datum_rod_pacijenta: datum_rod_pacijenta,
      patient_id: id,
    });
    navigate(-1);
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
        <p style={{ fontSize: 50 }}>Novi slučaj pacijenta 💉</p>
        <ul>
          <li>
            <h1>Lista pacijenata</h1>
            <Link to="/patlist">
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
                setIme_lijecnika(e.target.value);
              }}
              type="imeL"
              value={setIme_lijecnika.dijagnoza}
              className="form-control"
              id="imeL"
              name="imeL"
              placeholder="Ime"
            />
          </div>

          <div className="form-group">
            <p>Prezime liječnika</p>

            <input
              onChange={(e) => {
                setPrezime_lijecnika(e.target.value);
              }}
              type="prezimeL"
              value={setPrezime_lijecnika.dijagnoza}
              className="form-control"
              id="prezimeL"
              name="prezimeL"
              placeholder="Prezime "
            />
          </div>
          <div className="form-group">
            <p>Dijagnoza</p>

            <input
              onChange={(e) => {
                setDijagnoza(e.target.value);
              }}
              type="dijagnoza"
              value={setDijagnoza.dijagnoza}
              className="form-control"
              id="dijagnoza"
              name="dijagnoza"
              placeholder="Dijagnoza"
            />
          </div>

          <div className="form-group">
            <p>Šifra bolesti</p>

            <input
              onChange={(e) => {
                setSifra_bolesti(e.target.value);
              }}
              type="sifra_bolesti"
              value={setSifra_bolesti.sifra_bolesti}
              className="form-control"
              id="sifra_bolesti"
              name="sifra_bolesti"
              placeholder="Šifra"
            />
          </div>

          <div className="form-group">
            <p>Naziv specijalizacije</p>

            <input
              onChange={(e) => {
                setSpecijalizacija(e.target.value);
              }}
              type="specijalizacija"
              value={setSpecijalizacija.email}
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
                setSifra_specijalizacije(e.target.value);
              }}
              type="sifra_specijalizacije"
              value={setCase.mbo}
              className="form-control"
              id="sifra_specijalizacije"
              name="sifra_specijalizacije"
              placeholder="Šifra specijalizacije"
            />
          </div>
          <div className="form-group">
            <p>Datum postavljanja dijagnoze</p>

            <input
              onChange={(e) => {
                setDatum(e.target.value);
              }}
              type="date"
              value={setDatum.mbo}
              className="form-control"
              id="date"
              name="date"
              placeholder="Datum"
            />
          </div>
          <div className="form-group">
            <p>Mjesto</p>

            <input
              onChange={(e) => {
                setMjesto(e.target.value);
              }}
              type="mjesto"
              value={setMjesto.oib}
              className="form-control"
              id="mjesto"
              name="mjesto"
              placeholder="Mjesto"
            />
          </div>
          <div className="form-group">
            <p>Ime pacijenta</p>

            <input
              onChange={(e) => {
                setIme_osiguranika(e.target.value);
              }}
              type="ime"
              value={setIme_osiguranika.oib}
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
                setPrezime_osiguranika(e.target.value);
              }}
              type="prezime"
              value={setPrezime_osiguranika.oib}
              className="form-control"
              id="prezime"
              name="prezime"
              placeholder="Prezime"
            />
          </div>
          <div className="form-group">
            <p>Datum rođenja pacijenta</p>
            <input
              onChange={(e) => {
                setDatum_rod_pacijenta(e.target.value);
              }}
              type="date"
              value={setDatum_rod_pacijenta.mbo}
              className="form-control"
              id="date"
              name="date"
              placeholder="Datum"
            />
          </div>

          <div className="form-group">
            <button onClick={createCase} type="submit" className="button-74">
              Dodaj
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddCase;
