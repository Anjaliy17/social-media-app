// import Home  from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import { Route, Router, Routes } from "react-router-dom";
import React from "react";
import Profile from "./pages/profile/Profile";


function App() {
  return (
    <>
      <Profile />
    </>
    // <Router>
    //   <Routes>
    //     <Route exact path="/"><Home /></Route>
    //     <Route path="/login"><Login/></Route>
    //     <Route path="./profile"><Profile /></Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
