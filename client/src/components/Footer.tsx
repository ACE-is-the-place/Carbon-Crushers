import * as React from 'react';
import { Link } from 'react-router-dom';

const Footer = (): React.ReactElement => {

  return (
    <footer>
      <div id='footer-wrap'>
        <div className='footer'>
          <Link to='/'>
            <img src="https://i.ibb.co/d4qH65N/crushers-icon-1-doughnut.png" alt="crushers-icon-1-doughnut" className="footer-img" />
          </Link>
          <Link to='/graphs'>
            <img src="https://i.ibb.co/3Cf1jPf/crushers-icon-2-graph.png" alt="crushers-icon-2-graph" className="footer-img"/>
          </Link>
          <Link to='/showers'>
            <img src="https://i.ibb.co/k1Y2RT8/crushers-icon-3-timer.png" alt="crushers-icon-3-timer" className="footer-img"/>
          </Link>
          <Link to='/leaderboard'>
            <img src="https://i.ibb.co/pwBVWnC/crushers-icon-4-leaderboard.png" alt="crushers-icon-4-leaderboard" className="footer-img"/>
          </Link>
          <Link to='/notifications'>
            <img src="https://i.ibb.co/C1hNtfb/crushers-icon-5-updates.png" alt="crushers-icon-5-updates" className="footer-img"/>
          </Link>
          <Link to='/profile'>
            <img src="https://i.ibb.co/WPnw9Wr/crushers-icon-6-profile.png" alt="crushers-icon-6-profile" className="footer-img"/>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
