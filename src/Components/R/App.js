import React, { Component } from 'react';
import { jsonData } from "../../Data/data";



export default function R009() {
    return (
      <div>
        <h3 className="center subtitle">Project: {jsonData[8].projectName}</h3>
        <App />
      </div>
    );
  }
  
  