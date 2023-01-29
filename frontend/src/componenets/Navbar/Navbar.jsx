import React, { useState } from 'react'
import './Navbar.scss'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'

import {images} from '../../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleOnClick = (e) => {
    e.stopPropagation();
    setToggle((prevState) => !prevState);
  };
  return (
    <na className="app__navbar">
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
        <ul className='app__navbar-links'>
          {['home','about','work','skills','contact'].map((item)=>(
            <li className='app__flex p-tex'  key={`link-${item}`}>
              <a href={`#${item}`}><span>{'<'} </span>{item}<span> {'/ >'}</span></a>
              <div />
            </li>
          ))}
        </ul>

        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={()=> setToggle(true)} />
            {
              toggle && (
                <motion.div
                initial={{ width: 0 }}
                animate={{ width: 300 }}
                transition={{duration:0.85,ease:'easeOut'}}
                >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={(e) => handleOnClick(e)} />
              </motion.span>
                  <ul>
                  {['home','about','work','skills','contact'].map((item)=>(
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}><span>{'<'} </span>{item}<span> {'/ >'}</span></a>
                    </li>
                  ))}
                </ul>
                </motion.div>
              )
            }
        </div>
    </na>
  )
}

export default Navbar