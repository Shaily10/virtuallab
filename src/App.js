import React from 'react'
import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route,Routes } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Subject from './components/Subject.js';
import Navbar from './components/Navbar.js';
import Chemintro from './components/Subjects/Chemistry/Chemintro.js';
import ChemNavbar from './components/Subjects/Chemistry/ChemNavbar.js';
import DaaNavbar from './components/Subjects/Daa/DaaNavbar.js';
import DsNavbar from './components/Subjects/Ds/DsNavbar.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Sidebar from './components/Sidebar.js';
import Adminlog from './components/Adminlog.js';
import Programs from './components/Program.js/Programs.js';
import AddProgram from './components/Program.js/AddProgram.js';
import ProgramList from './components/Program.js/ProgramList.js';
import Branches from './components/Branches.js';
// import Sub from "./components/Sub.js";
import VirtualLab from './components/Sub.js/VirtualLab.js';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Adminlog" element={<Adminlog />} />
      <Route path="/about" element={<About />} />
      <Route path="/sub" element={<Subject />} />
      <Route path="/sub/chem/intro" element={<Chemintro />} />
      <Route path="/sub/chem" element={<ChemNavbar />} />
      <Route path="/sub/daa" element={<DaaNavbar />} />
      <Route path="/sub/ds" element={<DsNavbar />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route  path="/programs" element={<Programs/>} />
      <Route path="/programs/add" element={<AddProgram/>} />
      <Route path="/programs/:id" element={<ProgramList/>} />
      <Route path="/programs/:id/branches" element={<Branches/>} />
      {/* <Route path="/sub" element={<Sub/>} /> */}
      <Route path="/virtuallab" element={<VirtualLab />} />
    </Routes>
    </>
  );
}

export default App;
