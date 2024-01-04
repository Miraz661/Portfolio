

function Education() {

  const addEdu = (...props)=>{
    const [name,dept,logo,duration,location] = props;
    return(
      <div className="flex flex-wrap w-full border-b-4 border-orange-400 pb-3 mb-6">
        <div>
          <img src={logo}/>
        </div>
        <div className="py-4">
          <h1 className="text-4xl">{name}</h1>
          <h2 className="text-2xl">{dept}</h2>
          <h3 className="text-xl">{duration}</h3>
          <h3 className="text-xl">{location}</h3>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-6">
      <h1 className="text-orange-400 text-center text-4xl mt-6 mb-8">Educational Background</h1>
      {
        addEdu("Uttara University","Bachelor of Computer Science and Engineering","/src/assets/Images/uu-logo.png","January 2021 - running","Dhaka,Bangladesh")
      }
    </div>
  )
}

export default Education