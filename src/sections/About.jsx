import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import TechStack from '../../public/textures/desk/tech-stack.png';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('carlforwebdev@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/my-profile.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-cover rounded-md"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Carl Ivan Sampan</p>
              <p className="grid-subtext">
                Freelance full-stack developer with experience delivering websites for small businesses and student
                thesis projects (paid/contracted). I focus on clean, efficient code and seamless user experiences using
                today’s best tools.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={TechStack}
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-cover scale-y-110  scale-x-110"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I work with modern full-stack tools including React + Vite for frontend, Node/Express/Python for
                backend, and PostgreSQL for databases. I enjoy building practical applications while continuously
                expanding my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  { lat: 7.1907, lng: 125.4553, text: 'Davao City, PH', color: 'white', size: 15 },
                  { lat: 37.7749, lng: -122.4194, text: 'San Francisco', color: 'rgba(255,255,255,0.5)', size: 12 },
                  { lat: 40.7128, lng: -74.006, text: 'New York', color: 'rgba(255,255,255,0.5)', size: 12 },
                  { lat: 51.5074, lng: -0.1278, text: 'London', color: 'rgba(255,255,255,0.5)', size: 12 },
                  { lat: 35.6762, lng: 139.6503, text: 'Tokyo', color: 'rgba(255,255,255,0.5)', size: 12 },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">Your around-the-clock development partner</p>
              <p className="grid-subtext">
                Based in Davao City, Philippines (PST) with optimized workflow for global clients.
                <span className="block mt-2 text-sm opacity-80">
                  • Perfect overlap with US West Coast working hours
                  <br />
                  • Available for early morning EU timezone meetings
                  <br />• Working hours: 7AM-4PM PST (GMT+8)
                </span>
              </p>
              <Button name="Discuss your project" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Coding Journey</p>
              <p className="grid-subtext">
                I fell in love with programming because it combines two things I'm passionate about - solving complex
                problems and building useful solutions. Every line of code represents an opportunity to create something
                meaningful that can make a difference. I'm constantly exploring new technologies and refining my skills
                to build better, more impactful applications.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  carlforwebdev@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
