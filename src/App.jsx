import { Link } from "react-router"
import List from './components/List';
import { workExps, projects } from './pathdata';


function App() {

  return (
    <div className='md:flex md:flex-row md:justify-center'>
      <div className='md:min-w-[512px] md:w-full md:max-w-2xl'>
        
        <div className='flex flex-col justify-start max-w-2xl px-8 py-24'>
          <div className='flex flex-col gap-2 origin-left'>
            <div className='flex flex-col w-fit text-lg font-medium'>
              <h1>Henry Khaung</h1>
            </div>

            <div className='flex flex-row gap-4 text-gray-400 underline decoration-gray-200 underline-offset-2 decoration-2 animate-fadeup'>
              <Link className='hover:decoration-gray-300 transition-all duration-300' to="/about">About</Link>
              <Link className='hover:decoration-gray-300 transition-all duration-300' to="https://www.linkedin.com/in/henrykhaung/" target="_blank">LinkedIn</Link>
              <Link className='hover:decoration-gray-300 transition-all duration-300' to="https://github.com/hkhaung" target="_blank">Github</Link>
            </div>

            <div className='mt-20 space-y-16'>
              <List title="Work Experience" items={workExps} listName="work" />
              <List title="Projects" items={projects} listName="projects" />
            </div>

          </div>
        </div>

        
      </div>
    </div>
  )
}

export default App
