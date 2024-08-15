

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
        <h5><i class="ri-facebook-box-fill"></i>@nathanf</h5>
        <h1>1987</h1>
        <h4>FOLLOWERS</h4>
        <h1 class="Today">-12 Today</h1>
      </div>
      <div class="card card1">
        <h5><i class="ri-twitter-fill"></i>@nathanf</h5>
        <h1>1044</h1>
        <h4>FOLLOWERS</h4>
        <h1 class="Today">-12 Today</h1>
      </div>
      <div class="card card3">
        <h5><i class="ri-instagram-line"></i>@realnathanf</h5>
        <h1>11k</h1>
        <h4>FOLLOWERS</h4>
        <h1 class="Today">-12 Today</h1>
      </div>
      <div class="card card4">
        <h5><i class="ri-youtube-fill"></i>@nathanf</h5>
        <h1>8239</h1>
        <h4>SUBSCRIBERS</h4>
        <h1 class="today">-12 Today</h1>
      </div>
    </div>

    
  </div>
    </div>
 
  )
}

export default Header