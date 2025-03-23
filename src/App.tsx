//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
//import React from 'react';
//import ReactDOM from 'react-dom';
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css"

function App() {
 return  <Workbook data={[{ name: "Sheet1" }]} />;
}

export default App
