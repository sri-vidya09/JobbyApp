import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="main-heading">Find The Job That Fits Your Life</h1>
        <p className="para">
          Millions of people are searching for jobs,salary,information,company
          interviews. Find the job that fits your abilities and potential
        </p>
        <div className="button-container">
          <Link to="/jobs">
            <button type="button" className="find-jobs">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
        alt="job-img"
        className="home-job-img"
      />
    </div>
  </>
)
export default Home
