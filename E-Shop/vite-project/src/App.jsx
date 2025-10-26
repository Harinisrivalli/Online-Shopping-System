import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import userContext from './utils/userContext';
import {Provider} from "react-redux";
import appStore from './utils/appStore';
import { useState } from 'react';
function App() {
  const [userName,setUserName] = useState("Mahilini");
  const [address,setAddress] = useState("Vizag");
  return (
    <>
      <Provider store={appStore}>
          <userContext.Provider value={{loggedInUser:userName,setUserName,address:address,setAddress}}>
              <h1 style={{textAlign:"center",color:"black"}}>ShoppyGlobe</h1>
              <Header/>
              <Outlet></Outlet>
          </userContext.Provider>
      </Provider>
    </>
  );
}
export default App
