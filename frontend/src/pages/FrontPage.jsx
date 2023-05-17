import Header from "../components/Header";
function FrontPage() {
  return (
    <>
      <Header></Header>
      <h1 style={{ fontSize: 50, color: "brown", padding: "50px" }}>
        Dobrodošli na e-pacijent zdravstveni sustav!
      </h1>
      <h1 style={{ fontSize: 30, color: "brown", padding: "10px" }}>
        e-mail i kontakt broj: filip.ronce@gmail.com ili 098694621
      </h1>

      <h3>O sustavu:</h3>
      <h3>-Sustav koji upravlja profilima pacijenata u zdravstvu</h3>
      <h3>-Nadzire kartone pacijenata</h3>
      <h3>-Pruža mogućnosti dodavanja slučaja i evidenciju nalaza</h3>
    </>
  );
}

export default FrontPage;
