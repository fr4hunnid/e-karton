import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AdminLogin from './pages/AdminLogin';
import FrontPage from './pages/FrontPage';
import PatientLogin from './pages/PatientLogin';
import DoctorLogin from './pages/DoctorLogin';
import AdminDashboard from './pages/AdminDashboard'
import DoctorDashboard from './pages/DoctorDashboard';
import PatientDashboard from './pages/PatientDashboard';
import PatientsList from './pages/PatientsList';
import DoctorsList from './pages/DoctorsList';
import PatientProfile from './pages/PatientProfile';
import AddPatient from './pages/AddPatient';
import AddDoctor from './pages/AddDoctor';
import AddCase from './pages/AddCase';
import CaseProfile from './pages/CaseProfile';
import DoctorProfile from './pages/DoctorProfile';
import LeftTopMark from './pages/LeftTopMark';
import React from 'react';
function App() {


  return (
    <>
    <Router>      
    <div className="container">
      <Routes>
      <Route path='/' element={<FrontPage></FrontPage>}></Route>
      <Route path='/login' element={<AdminLogin></AdminLogin>}></Route>
      <Route path='/doclogin' element={<DoctorLogin></DoctorLogin>}></Route>
      <Route path='/patlogin' element={<PatientLogin></PatientLogin>}></Route>
      <Route path='/admindash' element={<AdminDashboard></AdminDashboard>}></Route>
      <Route path='/docdash' element={<DoctorDashboard></DoctorDashboard>}></Route>
      <Route path='/patdash' element={<PatientDashboard></PatientDashboard>}></Route>
      <Route path='/patlist' element={<PatientsList></PatientsList>}></Route>
      <Route path='/doclist' element={<DoctorsList></DoctorsList>}></Route>
      <Route path='/patprofile/:id' element={<PatientProfile></PatientProfile>}></Route>
      <Route path='/addpat' element={<AddPatient></AddPatient>}></Route>
      <Route path='/adddoc' element={<AddDoctor></AddDoctor>}></Route>
      <Route path='/addcase/:id' element={<AddCase></AddCase>}></Route>
      <Route path='/caseprofile/:id' element={<CaseProfile></CaseProfile>}></Route>
      <Route path='/docprofile/:id' element={<DoctorProfile></DoctorProfile>}></Route>





      </Routes>
    </div>
    </Router>



    </>
  );
}


export default App;
