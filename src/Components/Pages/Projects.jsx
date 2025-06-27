import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import Project1 from "../../assets/Images/Project1.png";
import Project2 from "../../assets/Images/Digital Marketing.png";
import Project3 from "../../assets/Images/Project3.png";

function Projects() {
  return (
    <div>
      <h1 className="text-orange-400 text-4xl text-center pb-3 mb-6">
        My Projects
      </h1>
      <div className="flex justify-center flex-wrap gap-5">
        <div className="max-w-sm min-w-[350px] overflow-hidden p-4 shadow-2xl hover:-translate-y-2 duration-300">
          <img
            className="w-full rounded-xl h-[180px]"
            src={Project1}
            alt="Sunset in the mountains"
          />
          <div className="px-4 pt-2 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">
              ReactJS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">
              TailwindCSS
            </span>
          </div>

          <div className="px-6 py-0">
            <div className="font-bold text-orange-500 text-xl mb-2">
              Service Dashboard
            </div>
            <div className="text-white text-base">
              <p className="text-lg text-neutral-400 font-medium mb-4">
                {" "}
                A Dashboard website showcases detailed service offerings, team
                profiles,projects, and client engagement.
              </p>
              <ul className="list-disc">
                <li>Clients can view our previous services over the years.</li>
                <li>What services do we offer?</li>
                <li>Who are our clients?</li>
              </ul>
            </div>
            <div className="mt-2 flex gap-x-12">
              <a
                href="https://e-attendance-system.netlify.app/"
                target="_blank"
              >
                <BiLinkExternal
                  className="text-white text-xl hover:text-orange-500"
                  alt="Live"
                />
              </a>
              <a href="https://github.com/Miraz661/Attendance-System">
                <FiGithub
                  className="text-white text-xl hover:text-orange-500"
                  alt="Live"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm  overflow-hidden p-4 shadow-2xl hover:-translate-y-2 duration-300">
          <img
            className="w-full rounded-xl h-[180px]"
            src={Project2}
            alt="Sunset in the mountains"
          />
          <div className="px-4 pt-2 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">
              ReactJS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">
              TailwindCSS
            </span>
          </div>

          <div className="px-6 py-0">
            <div className="font-bold text-orange-500 text-xl mb-2">
              Axtra Digital Marketing
            </div>
            <div className="text-white text-base">
              <p className="text-lg text-neutral-400 font-medium mb-4">
                {" "}
               This digital marketing website presents a professional online presence that showcases services, team expertise, workflow, and enables client interaction.
              </p>
              <ul className="list-disc">
                <li>
                  Highlights the range of digital marketing solutions offered, including SEO, social media, and content marketing.
                </li>
                <li>Provides a user-friendly form and contact details for clients to easily get in touch.</li>
                <li>Introduces the skilled professionals behind the agency, showcasing their roles and expertise.</li>
              </ul>
            </div>
            <div className="mt-2 flex gap-x-12">
              <a href="https://github.com/Miraz661/axtra-demo-site">
                <FiGithub
                  className="text-white text-xl hover:text-orange-500"
                  alt="Live"
                />
              </a>
              <a href="https://axtra-demo-site.vercel.app/">
                <CgWebsite
                  className="text-white text-xl hover:text-orange-500"
                  alt="Live"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm  overflow-hidden p-4 shadow-2xl hover:-translate-y-2 duration-300">
          <img
            className="w-full rounded-xl h-[180px]"
            src={Project3}
            alt="Sunset in the mountains"
          />
          <div className="px-4 pt-2 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">
              ReactJS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">
              TailwindCSS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">
              Daisyui
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2">
              Firebase
            </span>
          </div>

          <div className="px-6 py-0">
            <div className="font-bold text-orange-500 text-xl mb-2">
              Emp-Dashboard
            </div>
            <div className="text-white text-base">
              <p className="text-lg text-neutral-400 font-medium mb-4">
                A Dashboard website to manage orders and other data.
              </p>
              <ul className="list-disc">
                <li>Employee can manage orders easly</li>
                <li>Search filters and pagination have been applied.</li>
                <li>Login is required to perform all tasks.</li>
                <li>
                  Analyzing orders and bills data can be done in an instant.
                </li>
              </ul>
            </div>
            <div className="mt-2 flex gap-x-12">
              <span>
                <BiLinkExternal
                  className="text-white text-xl hover:text-orange-500"
                  alt="Live"
                />
              </span>
              <span>
                <FiGithub
                  className="text-white text-xl hover:text-orange-500"
                  alt="Live"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
