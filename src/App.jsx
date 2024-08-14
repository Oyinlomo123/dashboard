
import Header from './component/Header'
import Body from './component/Body';
function App() {
  var icon = document.getElementById("check");

  icon.onclick = function() {
    document.body.classList.toggle("dark-theme")
  }
  return (
    
      <div>
       <Header/>
       <Body/>
      </div>
      
  );
}
export default App
