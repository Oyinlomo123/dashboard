import Facebook from "../assets/icon-facebook.svg"
import Twitter from "../assets/icon-twitter.svg"
import Instagram from "../assets/icon-instagram.svg"
import Up from "../assets/icon-up.svg"
import Youtube from "../assets/icon-youtube.svg"
import Down from "../assets/icon-down.svg"

const Body = () => {
  return (
    <div>
      <div class="overview">
      <h2>Overview - Today</h2>
      <div class="page-card">
        <div class="page-view">
          <h5>Page View <img src={Facebook}/></h5>
          <br/><br/>
          <h1>87 <span class="per"><img src={Up}/> &nbsp;+3%</span></h1>
        </div>
        <div class="page-view">
          <h5>Likes <img src={Facebook}/></h5>
          <br/><br/>
          <h1>52 <span class="per1"><img src={Down}/> &nbsp;-3%</span></h1>
        </div>
        <div class="page-view">
          <h5>Likes <img src={Instagram}/></h5>
          <br/><br/>
          <h1>5462 <span class="per"><img src={Up}/> &nbsp;+3%</span></h1>
        </div>
        <div class="page-view">
          <h5>Profile Views <img src={Instagram}/></h5>
          <br/><br/>
          <h1>52k<span class="per"><img src={Up}/> &nbsp;+3%</span></h1>
        </div>
        <div class="page-view">
          <h5>Retweets <img src={Twitter}/></h5>
          <br/><br/>
          <h1>117 <span class="per"><img src={Up}/> &nbsp;+3%</span></h1>
        </div>
        <div class="page-view">
          <h5>Likes <img src={Twitter}/></h5>
          <br/><br/>
          <h1>507<span class="per"><img src={Up}/> &nbsp;+3%</span></h1>
        </div>
        <div class="page-view">
          <h5>Likes <img src={Youtube}/></h5>
          <br/><br/>
          <h1>107<span class="per1"><img src={Down}/> &nbsp;-3%</span></h1>
        </div>
        <div class="page-view">
          <h5>Total Views <img src={Youtube}/></h5>
          <br/><br/>
          <h1>1407<span class="per1"><img src={Down}/> &nbsp;-3%</span></h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Body