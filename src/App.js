
import React from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './Components/App2.css'
import Login from './Components/Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
import  Fdata  from './Components/Fdata'
import  Rdata  from './Components/Rdata'
import  Fdet from './Components/Fdet'
import Fcart from './Components/Fcart';
import Fcheck from './Components/Fcheck';
function App() {
  return (
    <div className=''>
<Router>
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Signup/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/Fdata' element={<Fdata/>}/>
    <Route path='/Rdata' element={<Rdata/>}/>
    <Route path='/Fdet' element={<Fdet />}/>
    <Route path="/Fdata/:id" element={<Fdet />} />
    <Route path="/Flowers/:id" element={<Fdata />} />


        <Route exact path="/Flowers/:id" component={Fdata} />
        <Route path="/Flowers/:id" component={Fdet} />  {/* Dynamic route */}
    



    <Route path="/Fcart" element={<Fcart />} />
    <Route path="/Fcheck" element={<Fcheck />} />
    </Routes>
</Router>
    </div>
  )
}

export default App
