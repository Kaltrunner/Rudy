import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import SlideRoutes from "react-slide-routes";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import Landing from "./Landing";
import Introduction from "./Introduction";
import Values from "./Values";
import Rules from "./Rules";
import Components from "./Components";

import Buttons from "./Buttons";
import CheckBoxes from "./CheckBoxes";
import DropDowns from "./DropDowns";
import SearchBars from "./SearchBars";
import RangeSliders from "./RangeSliders";
import Toggles from "./Toggles";
import Alerts from "./Alerts";
import InputFields from "./InputFields";
import ColorGrids from "./ColorGrids";
// import ScrollToTop from './ScrollToTop';

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setError(err));
      }
    });
  }, []);

  console.log(user);

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user))
  // },[])

  return (
    // <SlideRoutes>
    <>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Landing setUser={setUser} />} />

            <Route path="/Introduction" element={<Introduction />} />

            <Route path="/Values" element={<Values />} />

            <Route path="/Rules" element={<Rules />} />

            <Route path="/Components" element={<Components />} />

            <Route path="/Buttons" element={<Buttons />} />
            <Route path="/CheckBoxes" element={<CheckBoxes />} />
            <Route path="/DropDowns" element={<DropDowns />} />
            <Route path="/SearchBars" element={<SearchBars />} />
            <Route path="/RangeSliders" element={<RangeSliders />} />
            <Route path="/Toggles" element={<Toggles />} />
            <Route path="/Alerts" element={<Alerts />} />
            <Route path="/InputFields" element={<InputFields />} />
            <Route path="/ColorGrids" element={<ColorGrids />} />
            <Route path="/About" element={<About />} />
          </>
        ) : (
          <>
            <Route
              path="/Login"
              element={<Login user={user} setUser={setUser} />}
            />

            <Route
              path="/Signup"
              element={<Signup setUser={setUser} error={error} />}
            />
          </>
        )}
        {/* <Route path="*" element={<Navigate to="/Login" replace />} /> */}
      </Routes>
    </>
  );
  {
    /* </SlideRoutes> */
  }
}

export default App;
