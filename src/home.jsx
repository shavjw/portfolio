import { Link } from 'react-router-dom';
import classes from './home.module.css';
import INTROPIC from './assets/imgs/edited/intro_pic_2.webp';
import PROJECTIMG1 from './assets/imgs/edited/work_img_1.webp';
import PROJECTIMG2 from './assets/imgs/edited/work_img_2.webp';
import PROJECTIMG3 from './assets/imgs/edited/work_img_4.webp';

import CONTACTPIC from './assets/imgs/edited/contact_pic.webp';

function Home() {
  const ProjectLinks = [
    { id: 1, src: PROJECTIMG1, path: '/fithub' },
    { id: 2, src: PROJECTIMG2, path: '/digiadgenda' },
    { id: 3, src: PROJECTIMG3, path: '/museshop' },
  ];

  return (
    <>
      <section className={classes.introsection}>
        <div className={classes.introtext}>
          <h1 className={classes.introheading}>
            Building digital platforms that standout!
          </h1>
          <p className={classes.introdescription}>
            Welcome to my portfolio featuring a range of innovative and
            creatively crafted applications, where technology converges
            seamlessly with imagination. Join me in exploring the digital realm
            where ideas are transformed into impactful solutions.
          </p>
          <div className={classes.ctabtns}>
            <Link to="./about">
              <button className={classes.ctabtn1}> Who Am I?</button>
            </Link>
          </div>
        </div>

        <div className={classes.intropic}>
          <img src={INTROPIC} className={classes.introimg} />
        </div>
      </section>

      <section className={classes.projectsection}>
        <h2 className={classes.projecttitle}>Apps I created</h2>
        <ul className={classes.projectLinks}>
          {ProjectLinks.map(project => (
            <li key={project.id} className={classes.project}>
              <Link to={project.path}>
                <img src={project.src} className={classes.projectimg} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={classes.contactsection}>
        <div className={classes.contactpic}>
          <img src={CONTACTPIC} className={classes.contactimg} />
        </div>

        <div className={classes.contacttext}>
          <h1 className={classes.contactheading}>Lets Connect!</h1>
          <p className={classes.contactdescription}>
            For visionary business owners seeking to transform their innovative
            app ideas into reality, Im excited to join forces. Lets blend
            creativity with technology to craft a remarkable digital solution
            that leaves a lasting impact. Get in touch today, and lets make your
            app concept shine.
          </p>
          <button className={classes.contactbutton}>
            <a
              className={classes.email}
              href="https://calendly.com/shavjw/intro-call"
            >
              Contact Me!
            </a>
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
