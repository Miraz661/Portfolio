

function Skills() {
  return (
    <div>
      <h1 className="text-center text-[orange] text-3xl pt-2 pb-8">My Skills</h1>
      <div className="w-full flex justify-center">
        <div>
          <div className="flex justify-between">
            <div>
              <h1>Languages</h1>
              <ul className="flex justify-between">
                <div>
                  <li>JavaScript</li>
                  <li>Python</li>
                </div>
                <div>
                  <li>C</li>
                  <li>C++</li>
                </div>
              </ul>
            </div>
            <div>
              <h1>FrontEnd</h1>
              <ul className="flex justify-between">
                <div>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </div>
                <div>
                  <li>ReactJS</li>
                  <li>TailwindCSS</li>
                </div>
              </ul>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h1>BackEnd</h1>
              <ul className="flex justify-between">
                <li>Firebase</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div>
              <h1>Others</h1>
              <ul className="flex justify-between">
                <div>
                  <li>VScode</li>
                  <li>Github</li>
                </div>
                <div>
                  <li>Git</li>
                  <li>Netlify</li>
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