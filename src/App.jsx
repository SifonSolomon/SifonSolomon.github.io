// import './App.css'

// export default function App() {
//   return (
//     <main>
//       React ⚛️ + Vite ⚡ + Replit 🌀
//     </main>
//   )
// }
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import AdminProfile from './Components/AdminProfile';
import Users from './Components/Users';
import Nav from './Nav';
import MoreInfo from './Components/MoreInfo';



function App() {
  return (<>
    
<Nav/>
    <div className="App">
        
      <Routes>
    <Route path='*' element={<NotFound/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/AdminProfile' element={<AdminProfile/>}>
    </Route>
    <Route path='Users' element={<Users/>}/>
    <Route path='NotFound' element={<NotFound/>}>
    <Route path='/NotFound/MoreInfo' element={<MoreInfo/>}/>
    </Route>
    </Routes>
    </div>
  
    </>
  );
}

export default App;
