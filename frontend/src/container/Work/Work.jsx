import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [wtitle, setWtitle] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [filterWtitle, setFilterWtitle] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [end,setEnd] = useState(5)
  const [count] = useState(5)
  const [collection,setCollection] = useState([])
  const [collection2,setCollection2] = useState([])

  useEffect(() => {
    const query = '*[_type == "works"]';
    const query2 = '*[_type == "wtitle"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });

    client.fetch(query2).then((data) => {
      setWtitle(data);
      setFilterWtitle(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const getCollection = () => {
    return filterWork.slice(0,end)
  }
  
  useEffect(() => {
    setCollection(getCollection())
  },[filterWork, end])

  const end2=99

  const getCollection2 = () => {
    return filterWtitle.slice(0,end2)
  }
  
  useEffect(() => {
    setCollection2(getCollection2())
  },[filterWtitle, end2])

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {collection2.map((wtitle, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(wtitle.name)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === wtitle.name ? 'item-active' : ''}`}
          >
            {wtitle.name}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {collection.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="app__work-filter">
                {collection.length>0 && filterWork.length>collection.length ? (
                    <div className=' app__work-filter-item app__flex p-text' onClick={() => setEnd(end+count)}>Load More</div>
                ) : null }
      </div>
    </>
  );
};


export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
