import React from "react";
import { jsonData } from "./Data/data.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import R001 from "./Components/R001/App.js";
import R002 from "./Components/R002/App.js";
import R003 from "./Components/R003/App.js";
import R004 from "./Components/R004/App.js";
import R005 from "./Components/R005/App.js";
import R006 from "./Components/R006/App.js";
import R007 from "./Components/R007/App.js";
import R008 from "./Components/R008/App.js";
import R009 from "./Components/R009/App.js";

function App() {
  return (
    <div>
      <h1 className="title">
        <a className="title" href="/">
          React.js Project List
        </a>
      </h1>
      <Router baseline="/">
        <NavTab />
      </Router>
      <div className="footer center">
        <small>Copyright by Oprah © 2022 All rights reserved.</small>
      </div>
    </div>
  );
}

function NavTab() {
  return (
    <Routes>
      <Route path={"/"} element={<ProjectTable />} />
      <Route path={"/R001"} element={<R001 />} />
      <Route path={"/R002"} element={<R002 />} />
      <Route path={"/R003"} element={<R003 />} />
      <Route path={"/R004"} element={<R004 />} />
      <Route path={"/R005"} element={<R005 />} />
      <Route path={"/R006"} element={<R006 />} />
      <Route path={"/R007"} element={<R007 />} />
      <Route path={"/R008"} element={<R008 />} />
      <Route path={"/R009"} element={<R009 />} />
    </Routes>
  );
}

function ProjectTable() {
  return (
    <table>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        {jsonData.map((data,index) => {
          return (
            <TableBody key={index}
              id={data.id}
              projectName={data.projectName}
              tags={data.tags}
              level={data.level}
              githubLink={data.githubLink}
              demoLink={data.demoLink} />
          );
        })}
      </tbody>
    </table>
  );
}

function TableHead() {
  return (
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Tags</th>
      <th scope="col">Level</th>
      <th scope="col">GitHub</th>
      <th scope="col">Demo</th>
    </tr>
  );
}

function TableBody(props) {
  return (
    <>
      <tr>
        <td>{props.id}</td>
        <td style={{maxWidth:"270px"}}>{props.projectName}</td>
        <td className="table_tags">
          {props.tags.map((tag) => (
            <a className="tags" href="/" key={tag}>
              {tag}
            </a>
          ))}
          <br />
        </td>
        <td>{props.level}</td>
        <td>
          <a className="table-link" href={props.githubLink} target="_blank" rel="noreferrer">GitHub</a>
        </td>
        <td>
          <a className="table-link" href={props.demoLink}>Demo</a>
        </td>
      </tr>
    </>
  );
}

export default App;
