import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin, BsYoutube, BsGithub } from 'react-icons/bs'
import { FaHackerrank } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a target="_blank" href="https://github.com/ulascan54" >
            <div>
                <BsGithub/>
            </div>
        </a>
        <a target="_blank" href="https://twitter.com/ulascand54" >
            <div>
                <BsTwitter/>
            </div>
        </a>
        <a target="_blank" href="https://www.instagram.com/canulas.54/" >
            <div>
                <BsInstagram/>
            </div>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/ulascandemirbag/" >
            <div>
                <BsLinkedin/>
            </div>
        </a>
        <a target="_blank" href="https://www.youtube.com/channel/UCM2XZrxPnMLSOcsLX15JQzw" >
            <div>
                <BsYoutube/>
            </div>
        </a>
        <a target="_blank" href="https://leetcode.com/ulascan54/" >
            <div>
                <SiLeetcode/>
            </div>
        </a>
        <a target="_blank" href="https://www.hackerrank.com/ulascandemirbag" >
            <div>
                <FaHackerrank/>
            </div>
        </a>
    </div>
  )
}

export default SocialMedia;