import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components/PatientComponents';
import { TimesSlot , Doc1, Consultation7, Consultation6, Consultation5, Consultation4, Consultation3, Consultation , Calendar, Doctor, Customers, Kanban, Editor , Appointment , Records ,Prescription , Patient_Dashboard , QnA ,QandA, About , Remind , Reminder, Review , RecordsPage2 } from './PatientDashboard';
import './App.css';
import './PatientDashboard/Calender.css'
//import Profile from './components/PatientComponents/Pro';
import { useStateContext } from './contexts/PatientContext/ContextProvider';
//import {Appiontment }from './pages/Appiontment';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Patient_Dashboard />)} />
                <Route path="/Patient_Dashboard" element={(<Patient_Dashboard />)} />
                

                {/* pages  */}
               
                <Route path="/Doctor" element={<Doctor />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/Appointment" element={<Appointment/>}/>
                <Route path="/Consultation" element={<Consultation/>}/>
               
                <Route path="/Consultation3" element={<Consultation3/>}/>
                <Route path="/Consultation4" element={<Consultation4/>}/>
                <Route path="/Consultation5" element={<Consultation5/>}/>
                <Route path="/Consultation6" element={<Consultation6/>}/>
                <Route path="/Consultation7" element={<Consultation7/>}/>
                <Route path="/Doc1" element={<Doc1/>}/>
                <Route path="/Records" element={<Records/>}/>
                <Route path = "Prescription" element={<Prescription/>}/>
                <Route path="/Reminder" element={<Reminder/>} />
               <Route path='/about' element={<About/>}/>
               <Route path='/TimesSlot' element={<TimesSlot/>}/>
               <Route path="/Remind" element={<Remind/>} />
               <Route path="/Review" element={<Review/>} />
              
                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/QandA" element={<QandA/>}/>
                <Route path="/QnA" element={<QnA/>}/>
                <Route path="/RecordsPage2" element={<RecordsPage2/>} />


              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
      
    </div>
  );
};

export default App;