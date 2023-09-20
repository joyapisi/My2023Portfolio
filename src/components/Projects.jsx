import React, { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  tags,
  image,
  demo,
  active
}) => {
  return (
    <div
      className= {`relative flex flex-col w-auto ${
        active === id ? 'lg:flex-row' : 'lg:flex-row'
      } card-shadow`} style={{ marginTop: '30px', marginBottom:'10px', borderRadius: '2rem'}}
    >
      <div className="lg:w-1/2 overflow-hidden">
        <img
          src={image}
          alt={name}
          style={{ height: '400px' }} 
          className="w-full h-auto object-cover rounded-[2px]"
        />
      </div>

      <div className="lg:w-1/2 relative" >
        <div className="lg:h-full overflow-y-auto">
            <div className="p-4 bg-[rgba(122,122,122,0.5)] rounded-b-[2rem]" style={{ height: '100%' ,  paddingLeft: '10px', justifyContent: 'center',  alignItems: 'flex-start', display: 'flex', flexDirection: 'column', textAlign: 'left' }} >
              <div className="flex justify-end mb-3">
                  <img
                    src={github}
                    alt="source code"
                    className="w-6 h-6 object-contain"
                    style={{ alignSelf: 'flex-end' }}
                  />
                </div>   

              <h2 className="font-bold text-timberWolf text-2xl mb-2">
                {name}
              </h2>
              <p className="text-silver text-sm max-w-3xl leading-[24px]">
                {description}
              </p>
              <p className="blue-text-gradient">
  {tags.map((tag, index) => (
    <span
      key={index}
      className={`text-${tag.color} pr-2`}
    >
      {tag.name} |
    </span>
  ))}
</p>

              <button
                className="live-demo flex items-center mt-4 text-timberWolf font-bold gap-1 hover:bg-battleGray hover:text-eerieBlack transition duration-200 ease-in-out"
                onClick={() => window.open(demo, '_blank')}
                onMouseOver={() => {
                  document
                    .querySelector('.btn-icon')
                    .setAttribute('src', pineappleHover);
                }}
                onMouseOut={() => {
                  document
                    .querySelector('.btn-icon')
                    .setAttribute('src', pineapple);
                }}
              >
                <img
                  src={pineapple}
                  alt="pineapple"
                  className="btn-icon w-6 h-6 object-contain"
                />
                LIVE DEMO
              </button>
            </div>
            </div>
        </div>   
      </div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-2');

  return (
    <div className="-mt-6">
        <p className={`${styles.sectionSubText}`}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
   
      <div className="w-full flex">
        <p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-sm max-w-3xl leading-[24px]"
        >
          Below are some practical examples of my work. These projects
          showcase my ability to tackle complex challenges, adapt to a range of
          technologies, and efficiently manage projects. You can view live
          demonstrations of my projects by clicking the live demo button or view
          the raw code from my GitHub repositories by clicking the GitHub logo
          at the top-right of each card.
        </p>
      </div>
    
      <div
        className={`${styles.innerWidth} mx-auto flex flex-col space-y-6 lg:space-y-0 lg:space-x-6` }
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
