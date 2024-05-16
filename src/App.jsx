import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PersonDetails from './Pages/PersonDetails';
import EditDetails from './Pages/EditDetails';
import AddPerson from './Pages/AddPerson';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import NotFound from './Pages/NotFound';

const App = () => {

// for the state management of id useState hook is used , used to deleted edit particular person details using id
const [id, setId] = useState(0)


  return (
    <div>
      <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        {/* Page routing */}

        <Route path='/' element={<Home/>}/>
        <Route path='/persondetails' element={<PersonDetails setId={setId}/>}/> 
        <Route path='/addperson' element={<AddPerson/>}/>
        <Route path='/editdetails/:id' element={<EditDetails id={id}/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <div>
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;