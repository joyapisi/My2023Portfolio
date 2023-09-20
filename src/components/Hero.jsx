import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { bwmap, worldmap } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi!{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[30px] font-mova
                font-extrabold uppercase">
                 I&apos;m Joy
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              A Full-Stack. <br className="sm:block hidden" />
              developer.
            </p>

            <div
            className="hii-mobile">
           
            <p className="helping"> Helping businesses create efficient user-centric products</p>

            <div className="socials">
              <div id="email">
                <a href="mailto:joyapisi@gmail.com" target="_blank">
                  <img src="/src/assets/icons/mail.png" alt="gmail" />
                </a>
              </div>
              <div id="linkedin">
                <a href="https://linkedin.com/in/joyapisi" target="_blank">
                  <img src="/src/assets/icons/linkedin.png" alt="linkedin" />
                </a>
              </div>
              <div id="github">
                <a href="https://github.com/joyapisi" target="_blank">
                  <img src="/src/assets/icons/github.png" alt="github" />
                </a>
              </div>
              <div id="twitter">
                <a href="https://twitter.com/joyphoebe300" target="_blank">
                  <img src="/src\assets\icons\twitter.png" alt="twitter" />
                </a>
              </div>
            </div>
          </div>
          </div>
          <div
            className="hii">
           
            <p className="helping"> Helping businesses create efficient user-centric products</p>

            <div className="socials">
              <div id="email">
                <a href="mailto:joyapisi@gmail.com" target="_blank">
                  <img src="src/assets/icons/mail.png" alt="gmail" />
                </a>
              </div>
              <div id="linkedin">
                <a href="https://linkedin.com/in/joyapisi" target="_blank">
                  <img src="/src/assets/icons/linkedin.png" alt="linkedin" />
                </a>
              </div>
              <div id="github">
                <a href="https://github.com/joyapisi" target="_blank">
                  <img src="/src/assets/icons/github.png" alt="github" />
                </a>
              </div>
              <div id="twitter">
                <a href="https://twitter.com/joyphoebe300" target="_blank">
                  <img src="/src/assets/icons/twitter.png" alt="twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <div
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            // src={joy}
            // alt="joy"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
