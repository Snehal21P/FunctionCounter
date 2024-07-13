import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppClass from './AppClass.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppClass />
  </React.StrictMode>,
)

// const heading = React.createElement("h2",{},"Welcome to react and vite class")
// const heading2 = (
//   <h2 >
//     I am JSX
//   </h2>
// )
// ReactDOM.createRoot(document.getElementById("root")).render(heading2);
// // ReactDOM.createRoot(document.getElementById("root")).render(heading);
