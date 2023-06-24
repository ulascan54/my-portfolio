import React, { useState, useEffect } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Certificates.scss';

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);
  const [ctitle,setCtitle] = useState([]);
  const [filterCtitle, setFilterCtitle] = useState([]);
  const [filterCertificate, setFilterCertificate] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [end,setEnd] = useState(4)
  const [count] = useState(4)
  const [collection,setCollection] = useState([])
  const [collection2,setCollection2] = useState([])

  useEffect(() => {
    const query = '*[_type == "certificates"]';
    const query2 = '*[_type == "ctitle"]';

    client.fetch(query2).then((data) => {
      setCtitle(data);
      setFilterCtitle(data);
    });

    client.fetch(query).then((data) => {
      setCertificates(data);
      setFilterCertificate(data);
    });
  }, []);

  const handleCertificateFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterCertificate(certificates);
      } else {
        setFilterCertificate(certificates.filter((certificate) => certificate.tags.includes(item)));
      }
    }, 500);
  };

  const getCollection = () => {
    return filterCertificate.slice(0,end)
  }
  
  useEffect(() => {
    setCollection(getCollection())
  },[filterCertificate, end])

  const getCollection2 = () => {
    return filterCtitle.slice(0,end2)
  }
  const end2=99
  useEffect(() => {
    setCollection2(getCollection2())
  },[filterCtitle,end2])

  return (
    <>
      <h2 className="head-text">My  <span>Certificates</span></h2>

      <div className="app__certificate-filter">
        {collection2.map((ctitle, index) => (
          <div
            key={index}
            onClick={() => handleCertificateFilter(ctitle.name)}
            className={`app__certificate-filter-item app__flex p-text ${activeFilter === ctitle.name ? 'item-active' : ''}`}
          >
            {ctitle.name}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__certificate-portfolio"
      >
        {collection.map((certificate, index) => (
          <div className="app__certificate-item app__flex" key={index}>
                <a href={certificate.certificateLink} target="_blank" rel="noreferrer">
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__certificate-hover app__flex"
              >

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
              
              </motion.div>
              </a>

            <div
              className="app__certificate-img app__flex"
            >
              <img src={urlFor(certificate.imgUrl)} alt={certificate.name} />

             
            </div>

            <div className="app__certificate-content app__flex">
              <h4 className="bold-text">{certificate.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{certificate.tags[0]}</p>


            </div>
          
          </div>
        ))}
      </motion.div>
      <div className="app__certificate-filter">
                {collection.length>0 && filterCertificate.length>collection.length ? (
                    <div className=' app__certificate-filter-item app__flex p-text' onClick={() => setEnd(end+count)}>Load More</div>
                ) : null }
      </div>
    </>
  );
};


export default AppWrap(
  MotionWrap(Certificate, 'app__certificates'),
  'certificates',
  'app__primarybg',
);
