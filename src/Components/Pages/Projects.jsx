import {BiLinkExternal} from 'react-icons/bi'
import {FiGithub} from 'react-icons/fi'

function Projects() {
  return (
    <div>
      <h1 className="text-orange-400 text-4xl text-center pb-3 mb-6">My Projects</h1>
      <div className='flex justify-center'>
        <div className="max-w-sm  overflow-hidden p-4 shadow-2xl hover:-translate-y-2 duration-300">
          <img className="w-full rounded-xl" src="/src/assets/Images/Project1.png" alt="Sunset in the mountains" />
          <div className="px-4 pt-2 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">ReactJs</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">Tailwind</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">ExpressJs</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">MySQl</span>
          </div>

          <div className="px-6 py-0">
            <div className="font-bold text-orange-500 text-xl mb-2">E-Attendance</div>
            <div className="text-white text-base">
              <p className='text-lg text-neutral-400 font-medium mb-4'> A Attendance website to manage daily attendance of students.</p>
              <ul className='list-disc'>
                <li>Teachers can easily take attendance using a phone or PC.</li>
                <li>Search filters and pagination have been applied.</li>
                <li>Login is required to perform all tasks.</li>
                <li>New batches or students can be added at any time.</li>
                <li>Analyzing attendance data can be done in an instant.</li>
              </ul>
            </div>
            <div className='mt-2 flex gap-x-12'>
                <span><BiLinkExternal className='text-white text-xl hover:text-orange-500' alt='Live' /></span>
                <span><FiGithub className='text-white text-xl hover:text-orange-500' alt='Live' /></span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects