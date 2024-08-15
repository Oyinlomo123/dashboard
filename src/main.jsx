import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  
)
const sw = () => {
  var icon = document.getElementById("check");
  return (
    icon.onclick = function() {
      document.body.classList.toggle("dark-theme")
     }
  )
}
 function ChangeMode (){
      document.body.style.backgroundColor="black";
    }