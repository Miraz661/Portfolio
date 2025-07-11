import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaGithub, } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import Lottie from 'lottie-react'
import animationData2 from '../../assets/Images/animation_rocket.json'

function Home() {
  return (
    <div className='pt-[1px]'>
      <div className='grid md:grid-cols-12 grid-cols-1 text-white gap-4'>
        <div className='md:col-span-6'>
          <h3 className='text-2xl leading-10'>Hi,My Name is</h3>
          <h1 className='text-5xl leading-loose text-orange-400'>Miraz Hossain</h1>
          <h1 className='text-3xl text-orange-300'>I BUILD THINGS FOR THE WEB.</h1>
          <p className='text-2xl py-4'>I'm a highly motivated and enthusiastic Junior Full Stack Developer with a strong passion for technology and a desire to make a meaningful impact in the world of web development.</p>
          <Link to='https://drive.google.com/file/d/1BfFjgej5tWEX3zI7RhiAnxRIQxRdS5UU/view?usp=sharing'>
            <button className='border-2 px-4 py-2 rounded border-orange-600'>RESUME</button>
          </Link>
        </div>
        <div className='md:col-span-6'>
        <Lottie animationData={animationData2}/>
        </div>
      </div>
      <div className='text-white py-10 flex justify-center w-full'>
        <ul className='flex justify-evenly text-3xl max-w-lg min-w-96'>
          <Link to="https://www.linkedin.com/in/miraz-hossain-02005a268">
            <li className='hover:text-orange-500'>
              <FaLinkedin />
            </li>
          </Link>
          <Link to="https://www.facebook.com/md.miraz.hossain.99/">
            <li className='hover:text-orange-500'>
              <FaFacebook />
            </li>
          </Link>
          <Link to="https://github.com/Miraz661/">
            <li className='hover:text-orange-500'>
              <FaGithub />
            </li>
          </Link>
          <Link to="https://leetcode.com/Miraz_Hossain/">
            <li className='hover:text-orange-500'>
              <SiLeetcode />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Home
