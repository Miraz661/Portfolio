import {FaCss3, FaHtml5, FaJs, FaReact} from 'react-icons/fa'
import {SiC, SiCplusplus, SiFirebase, SiMysql, SiPython, SiTailwindcss} from 'react-icons/si'
import {TbBrandVscode} from 'react-icons/tb'
import {BsGit,BsGithub} from 'react-icons/bs'
import {BiLogoNetlify} from 'react-icons/bi'

function Skills() {
  return (
    <div>
      <h1 className="text-center text-[orange] text-3xl pt-2 pb-8">My Skills</h1>
      <div className="w-full flex justify-center text-neutral-400">
        <div>
          <div className="flex justify-between">
            <div>
              <h1 className='text-center text-2xl pb-2 text-white'>Languages</h1>
              <ul className="flex justify-between">
                <div>
                  <li className='flex px-4 py-4 border-2 border-[orange] rounded-lg m-2 w-[160px] font-semibold cursor-pointer'>
                    <FaJs className='text-2xl pt-0.5 pr-1 text-yellow-300'/>
                    <span>JavaScript</span>
                  </li>
                  <li className='flex px-4 py-4 border-2 border-[orange] rounded-lg m-2 w-[160px] font-semibold cursor-pointer'>
                    <SiPython className='text-2xl pt-0.5 pr-1 text-yellow-300'/>
                    <span>Python</span>
                  </li>
                </div>
                <div>
                  <li className='flex px-4 py-4 border-2 border-[orange] rounded-lg m-2 w-[160px] font-semibold cursor-pointer'>
                    <SiC className='text-2xl pt-0.5 pr-1 text-blue-700'/>
                    <span>C</span>
                  </li>
                  <li className='flex px-4 py-4 border-2 border-[orange] rounded-lg m-2 w-[160px] font-semibold cursor-pointer'>
                    <SiCplusplus className='text-2xl pt-0.5 pr-1 text-blue-800'/>
                    <span>C++</span>
                  </li>
                </div>
              </ul>
            </div>
            <div>
              <h1 className='text-center text-2xl pb-2 text-white'>FrontEnd</h1>
              <ul className="flex justify-between">
                <div>
                  <li className="flex px-4 py-4 border-2 border-[orange] rounded-lg m-2 w-[160px] font-semibold cursor-pointer">
                    <FaHtml5 className='text-2xl pt-0.5 pr-1 text-orange-600'/>
                    <span>HTML5</span>
                  </li>
                  <li className="flex px-4 py-4 border-2 border-[orange] rounded-lg m-2 w-[160px] font-semibold cursor-pointer">
                    <FaCss3 className='text-2xl pt-0.5 pr-1 text-blue-700'/>
                    <span>CSS3</span>
                  </li>
                </div>
                <div>
                  <li className="flex px-4 py-4 border-2 border-[orange] rounded-lg m-2 w-[160px] font-semibold cursor-pointer">
                    <FaReact className='text-2xl pt-0.5 pr-1 text-cyan-600'/>
                    <span>ReactJS</span>
                  </li>
                  <li className="flex px-4 py-4 border-2 border-[orange] rounded-lg m-2 w-[160px] font-semibold cursor-pointer">
                    <SiTailwindcss className='text-2xl pt-0.5 pr-1 text-cyan-600'/>
                    <span>TailwindCSS</span>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="flex justify-between pt-2">
            <div>
              <h1 className='text-center text-2xl pb-2 text-white'>BackEnd</h1>
              <ul className="flex justify-between">
                <li className="flex px-4 py-4 border-2 border-[orange] rounded-lg m-2 w-[160px] font-semibold cursor-pointer">
                  <SiFirebase className='text-2xl pt-0.5 pr-1 text-yellow-500'/>
                  <span>Firebase</span>
                </li>
                <li className="flex px-4 py-4 border-2 border-[orange] rounded-lg m-2 w-[160px] font-semibold cursor-pointer">
                  <SiMysql className='text-2xl pt-0.5 pr-1 text-yellow-600'/>
                  <span>MySQL</span>
                </li>
              </ul>
            </div>
            <div>
              <h1 className='text-center text-2xl pb-2 text-white'>Others</h1>
              <ul className="flex justify-between">
                <div>
                  <li className="flex px-4 py-4 border-2 border-[orange] rounded-lg m-2 w-[160px] font-semibold cursor-pointer">
                    <TbBrandVscode className='text-2xl pt-0.5 pr-1 text-blue-600'/>
                    <span>VScode</span>
                  </li>
                  <li className='flex px-4 py-4 border-2 border-[orange] rounded-lg m-2 w-[160px] font-semibold cursor-pointer'>
                    <BsGithub className='text-2xl pt-0.5 pr-1 text-black'/>
                    <span>Github</span>
                  </li>
                </div>
                <div>
                  <li className="flex px-4 py-4 border-2 border-[orange] rounded-lg m-2 w-[160px] font-semibold cursor-pointer">
                    <BsGit className='text-2xl pt-0.5 pr-1 text-orange-600'/>
                    <span>Git</span>
                  </li>
                  <li className="flex px-4 py-4 border-2 border-[orange] rounded-lg m-2 w-[160px] font-semibold cursor-pointer">
                    <BiLogoNetlify className='text-2xl pt-0.5 pr-1 text-cyan-600'/>
                    <span>Netlify</span>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills