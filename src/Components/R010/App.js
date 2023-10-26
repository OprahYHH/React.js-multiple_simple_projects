import React from "react";
import { jsonData } from "../../Data/data";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Route, Routes } from "react-router-dom";

import Navbar from "./navbar";
// import ExercisesList from "./exercises-list";
// import EditExercise from "./edit-exercise";
// import CreateExercise from "./create-exercise";
// import CreateUser from "./create-user";

// function App() {
//   <Routes>
//       <Route path={"/R010/"} element={<ExercisesList />} />
//       <Route path={"/R010/edit/:id"} element={<EditExercise />} />
//       <Route path={"/R010/create"} element={<CreateExercise />} />
//       <Route path={"/R010/user"} element={<CreateUser />} />
//   </Routes>
// }

export default function R010() {
  return (
    <div>
      <h3 className="center subtitle">Project: {jsonData[9].projectName}</h3>
      <div className="container">
        <Navbar />
      </div>
      {/* <App /> */}
    </div>
  );
}
