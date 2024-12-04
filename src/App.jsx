import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import NavigationBar from './componentsAssembler/NavigationBar'
import BlogAdder from './componentsAssembler/BlogAdder';
import './App.css'
//==
function App() {
  const [formData, setFormData] = useState([
    { title: 'Im tired officially', detail: 'alot of errors killed me ^send help^.', date: '2024/12/04' },
    { title: 'I love learning new stuff', detail: 'i learned react router dom and its amazing .', date: '2024/12/03' },
    { title: 'Hi im yahya', detail: 'its my project for reactjs lessons.', date: '2024/12/02' },
  ]);

  const addFormData = (newData) => {
    setFormData((prevData) => [...prevData, newData]);
  };
  return (
    <>
      {/* NAV */}
      <div >
        <NavigationBar />
      </div>
      {/*===== NAV =====*/}
      {/* MAIN BODY */}
      <div >
        <Router>
          <Routes>
            <Route path="/" element={<MainPage formData={formData} />} />
            <Route path="/form" element={<BlogAdder addFormData={addFormData} />} />

          </Routes>
        </Router>
      </div>
      {/*====MAIN BODY====*/}
    </>
  )
}

export default App
