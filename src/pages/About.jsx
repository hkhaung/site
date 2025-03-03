import { Link } from "react-router"


function About() {
  return (
    <div className='md:flex md:flex-row md:justify-center'>
      <div className='md:min-w-[512px] md:w-full md:max-w-2xl'>
        <div className='flex flex-col justify-start max-w-2xl px-8 py-24'>
          <div className='flex flex-col gap-4 animate-fadeup'>
            <div className='flex flex-col w-fit text-lg font-medium'>
              <h1>About</h1>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <p>Hello, my name is Henry. I am a recent grad from UC Berkeley and I am currently looking to get my foot inside the software engineering industry.</p>
              <p>I'm interested in building efficient, scalable systems, and automating things. I enjoy working with databases, APIs, and optimizing performance.</p>
              <p>I am driven by a passion for continuous improvement and I strive for a high level of excellence in my work.</p>
              <p>I’d love to be part of a team that values clean, maintainable code, and thoughtful system design. Since I’m early in my career, I’m especially excited about opportunities where I can learn from experienced engineers, contribute to meaningful projects, and have ownership over features.</p>
            </div>

            <Link to="/" className="mt-2 flex items-center space-x-1 w-fit text-gray-500 hover:text-gray-400 transition-all duration-300">
              <svg className="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
              <div>Go back</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
