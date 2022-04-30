import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotFoundElement from './components/common/NotFoundElement';
import Login from './components/Body/login/Login';
import LoginRoomRenter from './components/Body/login/LoginRoomRenter';
import LoginRoomOwner from './components/Body/login/LoginRoomOwner';
import AddDistrict from './components/Body/district/AddDistrict';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      
      <Route  path='/' element={<App/>}/>
      <Route  path='login' element={<Login/>}/>
      <Route  path='login/loginRoomRenter' element={<LoginRoomRenter/>}/>
      <Route  path='login/loginRoomOwner' element={<LoginRoomOwner/>}/>
      <Route  path='admin/addDistrict' element={<AddDistrict/>}/>
      
      {/* No other routes match */}
      <Route path='*' element={<NotFoundElement/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
