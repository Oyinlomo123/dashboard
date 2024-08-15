import Facebook from "../assets/icon-facebook.svg"
import Twitter from "../assets/icon-twitter.svg"
import Instagram from "../assets/icon-instagram.svg"
import Up from "../assets/icon-up.svg"
import Youtube from "../assets/icon-youtube.svg"
import Down from "../assets/icon-down.svg"

const Header = () => {
  
    function ChangeMode (){
      document.body.classList.toggle("dark-theme")
    }
  return (
      
    <div>
       <div class="dashboard">
    <div class="nav">
      <h2>Social&nbsp;Media&nbsp;Dashboard <br/><span>Total followers: 23,004</span></h2><hr/>
      <h4>Dark&nbsp;Mode <div id="click" class="container" >
          <input type="checkbox" id="check"onClick={ChangeMode} />
          <label for="check" class="button"></label>
          
        </div>
      </h4>
    </div>
    <div class="cards">
      <div class="card card1">
        <h3><img src={Facebook}/>@nathanf</h3>
        <h1>1987</h1>
        <h4>FOLLOWERS</h4>
        <h6 class="Today"><img src={Up}/>-12 Today</h6>
      </div>
      <div class="card card1">
        <h3><img src={Twitter}/>@nathanf</h3>
        <h1>1044</h1>
        <h4>FOLLOWERS</h4>
        <h6 class="Today"><img src={Up}/>-12 Today</h6>
      </div>
      <div class="card card3">
        <h3><img src={Instagram}/>@realnathanf</h3>
        <h1>11k</h1>
        <h4>FOLLOWERS</h4>
        <h6 class="Today"><img src={Up}/>-12 Today</h6>
      </div>
      <div class="card card4">
        <h3><img src={Youtube}/>@nathanf</h3>
        <h1>8239</h1>
        <h4>SUBSCRIBERS</h4>
        <h6 class="today"><img src={Down}/>-12 Today</h6>
      </div>
    </div>

    
  </div>
    </div>
 
  )
}

export default Header