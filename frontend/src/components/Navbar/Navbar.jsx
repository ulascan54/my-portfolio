import React, { useState } from 'react'
import './Navbar.scss'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import { BsTwitter, BsInstagram, BsLinkedin, BsYoutube, BsGithub } from 'react-icons/bs'
import { FaHackerrank } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'



const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleOnClick = (e) => {
    e.stopPropagation();
    setToggle((prevState) => !prevState);
  };
  return (
    <nav className="app__navbar">
      
      <div className='app__navbar-container'>
        <div className='app__navbar-logo'>
          <span><b>{'< '}</b>ULAS CAN<b>{' />'}</b></span>
          {/* <img src={images.logo} alt="logo" /> */}
        </div>
          <ul className='app__navbar-links'>
            {['home','about','work','skills', 'certificate' ,'contact'].map((item)=>(
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
                    {['home','about','work','skills','certificate' ,'contact'].map((item)=>(
                      <li key={item}>
                        <a href={`#${item}`} onClick={() => setToggle(false)}><span>{'<'} </span>{item}<span> {'/ >'}</span></a>
                      </li>
                      
                    ))}
                      <article className='app__social-nav'>

                          <a target="_blank" href="https://github.com/ulascan54" >
                            <article>
                                <BsGithub/>
                            </article>
                          </a>
                          <a target="_blank" href="https://twitter.com/ulascand54" >
                            <article>
                                <BsTwitter/>
                            </article>
                          </a>
                          <a target="_blank" href="https://www.instagram.com/canulas.54/" >
                            <article>
                                <BsInstagram/>
                            </article>
                          </a>
                          <a target="_blank" href="https://www.linkedin.com/in/ulascandemirbag/" >
                            <article>
                                <BsLinkedin/>
                            </article>
                          </a>
                          <a target="_blank" href="hhttps://www.youtube.com/@this.ulascan" >
                            <article>
                                <BsYoutube/>
                            </article>
                          </a>
                          <a target="_blank" href="https://leetcode.com/ulascan54/" >
                            <article>
                                <SiLeetcode/>
                            </article>
                          </a>
                          <a target="_blank" href="https://www.hackerrank.com/ulascandemirbag" >
                            <article>
                                <FaHackerrank/>
                            </article>
                          </a>
                          </article>
                  </ul>

                  </motion.div>
                )
              }
          </div>
      </div>
    </nav>
  )
}

export default Navbar