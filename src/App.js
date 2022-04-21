import React from 'react';
import './App.css';
import Navbar from './components/navbar/';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/index';
import Documents from './pages/Documents';
import Clients from './pages/Clients';
import BookingCalendar from './pages/BookingCalendar';
const cal_sup = require('./components/calendar_supplement');
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home/>} />
        <Route path='/Documents' element={<Documents/>} />
        <Route path='/Clients' element={<Clients/>} />
        <Route path='/BookingCalendar' element={<BookingCalendar/>} />
        
    </Routes>
    </Router>
);
}
  
export default App;
