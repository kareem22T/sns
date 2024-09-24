import DefaultLayout from "../../layout/DefaultLayout";
import card1 from "./../../images/card-1.png"
import card2 from "./../../images/card-2.png"
import card3 from "./../../images/card-3.png"
import card4 from "./../../images/card-4.png"

import whoAreWe from './../../images/slide-1.jpg'
import whoAreWe2 from './../../images/slide-2.jpg'
import whoAreWe3 from './../../images/slide-3.jpg'
import shape from './../../images/whoAreWeShpaeText@1.25x.png'

import partenersBg from './../../images/our-parteners.png'
import team from './../../images/our-team.png'
import parteners from './../../images/parteners@1.25x.png'
import video from './../../images/video.png'
import { delay, motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Slider from "./slider";

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
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: .4 } }
  };

  const fadeInCards1 = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: .6 } }
  };
  const fadeInCards2 = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: .8 } }
  };

  const fadeInCards3 = {
    hidden: { opacity: 0, x: 0 },
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
  
  const texxt = useRef(null);
  const isTextss = useIntersection(texxt);

  const Teamcard1 = useRef(null);
  const isTeamCard1Visible = useIntersection(Teamcard1);

  const Teamcard2 = useRef(null);
  const isTeamCard2Visible = useIntersection(Teamcard2);

  const Teamcard3 = useRef(null);
  const isTeamCard3Visible = useIntersection(Teamcard3);

  const Teamcard4 = useRef(null);
  const isTeamCard4Visible = useIntersection(Teamcard4);


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

  const heroRef = useRef(null); // Reference to "hero" section

  const [isWhoAreWeVisible, setIsWhoAreWeVisible] = useState(false);
  const [flipCount, setFlipCount] = useState(0); // To track the flip changes

  const [isQuestion1, setIsQuestion1] = useState(true)
  const [isQuestion2, setIsQuestion2] = useState(false)
  const [isQuestion3, setIsQuestion3] = useState(false)
  const [isQuestion4, setIsQuestion4] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // If "hero" section is in view, hide "who-are-we" section
          setIsWhoAreWeVisible(false);
        } else {
          // If "hero" section is out of view, show "who-are-we" section
          setIsWhoAreWeVisible(true);
        }
      },
      {
        root: null, // Use the viewport
        threshold: 0, // Trigger when the "hero" section is in/out of view
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current); // Observe the "hero" section
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current); // Clean up observer
      }
    };
  }, []);  
  useEffect(() => {
    const handleScroll = () => {
      const whoAreWeSection = sectionRef.current;
      const heroSection = heroRef.current;

      if (!whoAreWeSection || !heroSection) return;

      // Calculate hero and "who-are-we" section boundaries
      const heroBottom = (heroSection as HTMLElement).offsetTop + (heroSection as HTMLElement).offsetHeight;
      const scrollPosition = window.scrollY;
      const sectionHeight = (whoAreWeSection as HTMLElement).offsetHeight;

      const distanceScrolled = scrollPosition - heroBottom;
      console.log(distanceScrolled);
      // Flip images at different distances (25%, 50%, 75% of "who-are-we" section)
      if (distanceScrolled < 400) {
        setFlipCount(0);
      }
      else if (distanceScrolled > (window.innerHeight * 2) && distanceScrolled < (window.innerHeight * 3)) {
        setFlipCount(1); // First flip at 33%
      } else if (distanceScrolled > (window.innerHeight * 3) ) {
        setFlipCount(2); // Second flip at 66%
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const images = [
    whoAreWe, // Initial image
    whoAreWe2, // First flipped image
    whoAreWe3 // Second flipped image
  ];
  const content = [
    {
      title: "About Us",
      description: "For centuries, humans lived in harmony with the natural world, guided by practices that prioritized balance and resilience. At SNS, we believe sustainability isn’t a trend—it’s a rediscovery of our roots. We are here to bridge the wisdom of the past with the innovation of today, offering solutions that empower businesses and communities to thrive sustainably. Let us help you create a future where these values are seamlessly integrated into every facet of life and business, ensuring growth, resilience, and a lasting impact on the world around us."
    },
    {
      title: "Our Mission",
      description: "To reignite sustainable thinking and empower businesses to embed sustainability at their core. Through innovative consulting, deep collaboration, and strategic partnerships, we guide organizations in turning sustainability challenges into opportunities for growth and positive impact."
    },
    {
      title: "Our Vision",
      description: "To shape a future where sustainable practices are second nature—woven into every decision, every strategy, and every community. We envision a world where businesses and people co-create solutions that restore balance and create lasting value for generations to come."
    }
  ];
  
  const flipVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Control the flip speed
        ease: "easeInOut",
      },
    },
    exit: { opacity: 0, y: -200, transition: { duration: 0.8 } },
  };
  const  faqRef = useRef(null);
  const isFaqVisible = useIntersection(faqRef); // Check if the section is in view

    // Animation variants
    const fadeInFAQ = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
  
    const fadeInQuestions = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
    };
  
  return (
    <DefaultLayout>
      <section className="hero" ref={heroRef}>
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
      key={flipCount} // Trigger re-render on image change
      src={images[flipCount]} // Image changes with flipCount
      alt={content[flipCount].title} // Alt text based on current content
      initial="hidden"
      animate={isWhoAreWeVisible ? "visible" : "hidden"} // Animation
      exit="exit"
      variants={flipVariants}
    />

    {/* Animated Text */}
    <motion.div
      className="text"
      initial="hidden"
      animate={isWhoAreWeVisible ? "visible" : "hidden"} // Animation triggered by visibility
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

      <motion.h2 variants={textVariant}>
        <img src={shape} alt="Shape" />
        {content[flipCount].title} {/* Dynamically change title */}
      </motion.h2>

      <motion.p key={flipCount} variants={textVariant}>
        {content[flipCount].description} {/* Dynamically change description */}
      </motion.p>

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
    <section className="faq" ref={faqRef}>
      <div className="container">
        <div className="content-fluid">
          <motion.div
            className="text"
            initial="hidden"
            animate={isFaqVisible ? "visible" : "hidden"}
            variants={fadeInFAQ}
          >
            <h2>
              <img src={shape} alt="" />
              Why SNS?
            </h2>
            <h1>
              Frequently
              <br />
              Asked Questions
            </h1>
            <p>
              Sustainability Network Solutions! If you are here
              you've decided to be part of the change and contribute to
              our planet's future. Together, we can create a better life
              for ourselves, our children, and all living species. We are
              experts in driving sustainable innovation and positively impacting
              the world.
            </p>
          </motion.div>

          <motion.div
            className="questions_wrapper"
            initial="hidden"
            animate={isFaqVisible ? "visible" : "hidden"}
            variants={fadeInFAQ}
          >
            {[1, 2, 3, 4].map((num) => (
              <motion.div
                key={num}
                className={"question" + (eval(`isQuestion${num}`) ? " open" : "")}
                onClick={() => eval(`setIsQuestion${num}`)(!eval(`isQuestion${num}`))}
                initial="hidden"
                animate={isFaqVisible ? "visible" : "hidden"}
                variants={fadeInQuestions}
              >
                <h3>
                  {num}. Cost Savings and Efficiency Improvements
                  <i className={"fa-solid" + (eval(`isQuestion${num}`) ? " fa-chevron-up" : " fa-chevron-down")}></i>
                </h3>
                <p className="answer">
                  Resource Efficiency: We identify ways to reduce energy and water
                  usage, minimize waste, and optimize processes, leading 
                  to significant cost savings.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    <section className="our-team">
      <div className="container">
        <div className="content-fluid">
            <motion.h2
              ref={texxt}
              initial="hidden"
              animate={isTextss ? "visible" : "hidden"}
              variants={textVariantx}                                        
            >
              <img src={shape} alt="" />
              Our Team
            </motion.h2>
            <div className="team_wrapper">
              <motion.div
                ref={Teamcard1}
                initial="hidden"
                animate={isTeamCard1Visible ? "visible" : "hidden"}
                variants={fadeInCards}              
               className="team-card">
                <img src={team} alt="" />
                <h3>
                  Mohamed Adel <br />
                  <span>
                    CEO, TEST
                  </span>
                </h3>
              </motion.div>
              <motion.div
                ref={Teamcard2}
                initial="hidden"
                animate={isTeamCard2Visible ? "visible" : "hidden"}
                variants={fadeInCards1}                            
               className="team-card">
                <img src={team} alt="" />
                <h3>
                  Mohamed Adel <br />
                  <span>
                    CEO, TEST
                  </span>
                </h3>
              </motion.div>
              <motion.div
                ref={Teamcard3}
                initial="hidden"
                animate={isTeamCard3Visible ? "visible" : "hidden"}
                variants={fadeInCards2}                            
              
               className="team-card">
                <img src={team} alt="" />
                <h3>
                  Mohamed Adel <br />
                  <span>
                    CEO, TEST
                  </span>
                </h3>
              </motion.div>
              <motion.div
                ref={Teamcard4}
                initial="hidden"
                animate={isTeamCard4Visible ? "visible" : "hidden"}
                variants={fadeInCards3}                                          
               className="team-card">
                <img src={team} alt="" />
                <h3>
                  Mohamed Adel <br />
                  <span>
                    CEO, TEST
                  </span>
                </h3>
              </motion.div>
            </div>
        </div>
      </div>
    </section>
    <section className="our-team">
      <div className="container">
        <div className="content-fluid">

            <motion.h2
              ref={texxt}
              initial="hidden"
              animate={isTextss ? "visible" : "hidden"}
              variants={textVariantx}                                        
            >
              <img src={shape} alt="" />
              Trusted By
            </motion.h2>
        </div>
    <Slider />
      </div>

    </section>
    </DefaultLayout>
  );
};

export default Home;
