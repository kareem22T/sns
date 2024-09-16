import DefaultLayout from "../../layout/DefaultLayout";
import card1 from "./../../images/card-1.png"
import card2 from "./../../images/card-2.png"
import card3 from "./../../images/card-3.png"
import card4 from "./../../images/card-4.png"

import whoAreWe from './../../images/who are we@1.25x.png'
import shape from './../../images/whoAreWeShpaeText@1.25x.png'

import partenersBg from './../../images/our-parteners.png'
import parteners from './../../images/parteners@1.25x.png'
import video from './../../images/video.png'
import { delay, motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const controls = useAnimation();

  // Intersection Observer Hook
  const useIntersection = (ref: any) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref]);

    return isVisible;
  };
  const fadeInTexts = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const fadeInTexts1 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: .2 } }
  };

  const text1 = useRef(null);
  const isText1Visible = useIntersection(text1);

  const text2 = useRef(null);
  const isText2Visible = useIntersection(text2);


  const fadeInCards = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: .4 } }
  };

  const fadeInCards1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: .6 } }
  };
  const fadeInCards2 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: .8 } }
  };

  const fadeInCards3 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } }
  };

  const Refcard1 = useRef(null);
  const isCard1Visible = useIntersection(Refcard1);

  const Refcard2 = useRef(null);
  const isCard2Visible = useIntersection(Refcard2);

  const Refcard3 = useRef(null);
  const isCard3Visible = useIntersection(Refcard3);

  const Refcard4 = useRef(null);
  const isCard4Visible = useIntersection(Refcard4);


  // Define motion variants for the image and text animations
  const imageVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const textVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
  };

  const sectionRef = useRef(null);
  const isVisible = useIntersection(sectionRef); // Check if the section is in view


  const textVariantx = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  const imageVariantx = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
  };
  
  const videoVariant = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: .4 } }
  };
  const partnersRef = useRef(null);
  const isPartnersVisible = useIntersection(partnersRef); // Check if the section is in view
  
  return (
    <DefaultLayout>
      <section className="hero">
        <div className="container">
          <div className="content-fluid">
            <motion.h1
              ref={text1}
              initial="hidden"
              animate={isText1Visible ? "visible" : "hidden"}
              variants={fadeInTexts}
            >SUSTAINABILITY NETWORK SOLUTIONS</motion.h1>
            <motion.h2
              ref={text2}
              initial="hidden"
              animate={isText2Visible ? "visible" : "hidden"}
              variants={fadeInTexts1}
            >Rooted in Heritage, Branching into the Future</motion.h2>
            <div className="cards-wrapper">
              <motion.a
                href=""
                className="card"
                ref={Refcard1}
                initial="hidden"
                animate={isCard1Visible ? "visible" : "hidden"}
                variants={fadeInCards}
              >
                <img src={card1} alt="" />
                <div className="text">
                  <p>Sustainability Consulting</p>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </motion.a>

              <motion.a
                href=""
                className="card"
                ref={Refcard2}
                initial="hidden"
                animate={isCard2Visible ? "visible" : "hidden"}
                variants={fadeInCards1}
              >
                <img src={card2} alt="" />
                <div className="text">
                  <p>Energy Regulation Consulting</p>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </motion.a>

              <motion.a
                href=""
                className="card"
                ref={Refcard3}
                initial="hidden"
                animate={isCard3Visible ? "visible" : "hidden"}
                variants={fadeInCards2}
              >
                <img src={card3} alt="" />
                <div className="text">
                  <p>Waste Regulation Consulting</p>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </motion.a>

              <motion.a
                href=""
                className="card"
                ref={Refcard4}
                initial="hidden"
                animate={isCard4Visible ? "visible" : "hidden"}
                variants={fadeInCards3}
              >
                <img src={card4} alt="" />
                <div className="text">
                  <p>Strategic Business Advisory</p>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </section>
      <section className="who-are-we" ref={sectionRef}>
        <div className="container">
          <div className="content-fluid">
            {/* Animated Image */}
            <motion.img
              src={whoAreWe}
              alt="Who Are We"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"} // Animation triggered by visibility
              variants={imageVariant}
            />

            {/* Animated Text */}
            <motion.div
              className="text"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"} // Animation triggered by visibility
              variants={textVariant}
            >
              {/* Heading 1 */}
              <motion.h2 variants={textVariant}>
                <img src={shape} alt="Shape" />
                Who We Are
              </motion.h2>

              <motion.h1 variants={textVariant}>
                SUSTAINABILITY NETWORK SOLUTIONS
              </motion.h1>

              {/* Paragraph 1 */}
              <motion.p variants={textVariant}>
                From the wisdom of our ancestors, reminding us that sustainability is not a new concept, but a forgotten part of our identity as humans. SNS is the pathway that connects our sustainable past knowledge to a future where some of these practices are once again a part of our daily lives. We are dedicated to reigniting the sustainable mindset and providing a broad array of services to research and actualize sustainability in business and everyday life.
              </motion.p>

              {/* Mission Section */}
              <motion.h2 variants={textVariant}>
                <img src={shape} alt="Shape" />
                Our Mission
              </motion.h2>

              <motion.p variants={textVariant}>
                To drive global sustainability through innovative consulting strategic partnerships.
              </motion.p>

              {/* Vision Section */}
              <motion.h2 variants={textVariant}>
                <img src={shape} alt="Shape" />
                Our Vision
              </motion.h2>

              <motion.p variants={textVariant}>
                Creating a greener future through co-creation and sustainable business practices.
              </motion.p>

              {/* Contact Us Button */}
              <motion.button variants={textVariant}>
                Contact Us
                <i className="fa-solid fa-chevron-right"></i>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="our-parteners" ref={partnersRef}>
      {/* Animated background image */}
      <img
        src={partenersBg}
        alt="Partners Background"
      />
      <div className="container">
        <div className="content-fluid">
          {/* Animated Heading */}
          <motion.h1
            initial="hidden"
            animate={isPartnersVisible ? "visible" : "hidden"}
            variants={textVariantx}
          >
            <span>OUR </span> GLOBAL PARTNERS
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            initial="hidden"
            animate={isPartnersVisible ? "visible" : "hidden"}
            variants={textVariantx}
          >
            At Sustainability Network Solutions, we carefully choose our partners based on their expertise, reputation,
            and proven success in their sustainability sectors. This ensures we offer our clients the most effective and
            innovative solutions tailored to their needs.
          </motion.p>

          {/* Animated Partner and Video Images */}
          <motion.img
            src={parteners}
            alt="Partners"
            className="parteners"
            initial="hidden"
            animate={isPartnersVisible ? "visible" : "hidden"}
            variants={imageVariantx}
          />
          <motion.img
            src={video}
            alt="Video"
            initial="hidden"
            animate={isPartnersVisible ? "visible" : "hidden"}
            variants={videoVariant}
          />
        </div>
      </div>
    </section>
    </DefaultLayout>
  );
};

export default Home;
