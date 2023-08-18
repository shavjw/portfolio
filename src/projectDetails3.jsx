import classes from './projectDetails3.module.css';

import PROJECTINFOPIC from './assets/imgs/edited/toronto_raptros_intro_pic.webp';
import PROJECTINFOPIC2 from './assets/imgs/edited/intro_pic_3.webp';
import PROJECTINFOPIC3 from './assets/imgs/edited/toronto_raptros_intro_pic2.webp';

//TORONTO RAPTORSGEAR SHOP
function ProjectDetail3() {
  return (
    <>
      <section className={classes.projectintrosection3}>
        <div className={classes.projectintrotext3}>
          <h1 className={classes.projectintroheading3}>RAPTORSGEAR SHOP</h1>
          <p className={classes.projectintrodescription3}>
            Explore RaptorsGear, an online haven for devoted Toronto Raptors
            enthusiasts seeking a diverse selection of team-related products.
            Delve into a thoughtfully curated range of merchandise, from jerseys
            to accessories, that caters to fans looking to express their team
            loyalty authentically. With a user-friendly and secure e-commerce
            platform, RaptorsGear provides an opportunity for fans to connect
            with their favorite team on a personal level through a collection
            that reflects their unwavering support.
          </p>

          <h3 className={classes.projectinfosubheading3}>APP COMING SOON!</h3>
        </div>

        <div className={classes.projectinfopic3}></div>
      </section>

      <section className={`${classes.projectinfosection3} ${classes.reverse}`}>
        <div className={classes.projectinfotext3}>
          <h2 className={classes.projectinfoheading3}>CLIENT CHALLENGE</h2>
          <p className={classes.projectinfodescription3}>
            Passionate Toronto Raptors fans often struggle to find a reliable
            source for exclusive team gear that truly captures their enthusiasm.
            Existing options may lack variety or authenticity, making it
            challenging for fans to showcase their unwavering support.
            Recognizing this gap, the idea for RaptorsGear, an exclusive
            e-commerce platform, emerged to offer fans a seamless shopping
            experience for premium Toronto Raptors merchandise.
          </p>
        </div>

        <div className={classes.projectinfopic3}>
          <img src={PROJECTINFOPIC} className={classes.projectinfoimg3} />
        </div>
      </section>

      <section className={classes.projectinfosection3}>
        <div className={classes.projectinfopic3}>
          <img src={PROJECTINFOPIC2} className={classes.projectinfoimg13} />
        </div>

        <div className={classes.projectinfotext3}>
          <h2 className={classes.projectinfoheading3}>CLIENT SOLUTIONS</h2>
          <p className={classes.projectinfodescription3}>
            To bring the RaptorsGear e-commerce site to life, I harnessed the
            power of the MERN (MongoDB, Express.js, React, Node.js) stack,
            ensuring a robust and scalable foundation. The platforms
            architecture was optimized for efficiently managing product
            inventory, enabling fans to explore an extensive range of exclusive
            Raptors gear. Security was paramount; the site incorporated strong
            authentication measures and encryption protocols to safeguard user
            data. Comprehensive CRUD (Create, Read, Update, Delete)
            functionalities streamlined inventory management, enhancing the
            overall shopping experience.
          </p>
        </div>
      </section>

      <section className={`${classes.projectinfosection3} ${classes.reverse}`}>
        <div className={classes.projectinfotext3}>
          <h2 className={classes.projectinfoheading3}>CLIENT RESULTS</h2>
          <p className={classes.projectinfodescription3}>
            Since its launch, RaptorsGear has revolutionized the way Toronto
            Raptors fans engage with team merchandise. The user experience has
            become more immersive and engaging, as fans can easily browse and
            select from an array of exclusive products. The streamlined
            navigation, secure checkout process, and integrated product
            management have drastically improved the online shopping journey.
            Fans can confidently explore new arrivals, update their selections,
            and securely complete transactions. As a result, the RaptorsGear
            e-commerce site not only meets fans expectations but exceeds them,
            creating an online hub where team spirit is celebrated through
            high-quality merchandise.
          </p>

          <p className={classes.projectinfodescription3}>
            In conclusion, the RaptorsGear e-commerce site addresses the
            challenge of providing Raptors fans with exclusive and authentic
            team gear. By utilizing the MERN stack and implementing robust
            security measures for authentication and CRUD functionalities, the
            platform delivers a secure and seamless shopping experience. The
            positive impact on user engagement, the enhanced variety of
            exclusive merchandise, and the overall ease of shopping online make
            RaptorsGear a definitive success in uniting fans and their love for
            the Toronto Raptors.
          </p>
        </div>

        <div className={classes.projectinfopic3}>
          <img src={PROJECTINFOPIC3} className={classes.projectinfoimg3} />
        </div>
      </section>
    </>
  );
}

export default ProjectDetail3;
