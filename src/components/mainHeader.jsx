import classes from './mainHeader.module.css';
import LOGO from '../assets/imgs/logo.png';
import { Link } from 'react-router-dom';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

function MainHeader() {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={LOGO} className={classes.logoimg} />
        </Link>
      </div>

      <div className={classes.links}>
        <ul className={classes.linklist}>
          <li>
            <Link to="https://github.com/shavjw">
              <FaGithubAlt
                fontSize={35}
                color="#f15a29"
                className={classes.navicon}
              />
            </Link>
          </li>

          <li>
            <Link to="https://ca.linkedin.com/in/shavaughanwatson">
              <FaLinkedinIn
                fontSize={35}
                color="#1c75bc"
                className={classes.navicon}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainHeader;
