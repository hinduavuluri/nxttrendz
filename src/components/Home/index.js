// Write your JS code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <div className="bg-container">
      <Header />
      <div className="body">
        <div className="text-container">
          <h1 className="heading">
            Clothes That Get YOU <br />
            Noticed
          </h1>
          <p>
            Fashion is part of the daily air and it does not quite that it
            changes <br />
            all the time. Clothes have always been a marker of the era and we
            are in <br />
            a revolution. Your fashion make you been smile and heard that way
            you are <br />
            So celebrate the seasons new and exciting fashion in your own way.
          </p>
          <button className="button" type='button'>Shop Now</button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="logo"
        />
      </div>
    </div>
  </>
)

export default Home
