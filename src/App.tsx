import { motion } from 'framer-motion';
import ThreeModel from './components/ThreeModel'; // Adjust the path as necessary


function App() {
  return (
    <main className = "h-screen bg-gray-800">
      <div className = "container mx-auto">
        {/*header*/}
        <motion.header
        initial = {{y : -100 , opacity: 0}}
        animate = {{y : 0 ,opacity: 1}}
        transition = {{
          type: "spring",
          duration : 1,
          delay : 0.5,
          stiffness : 130,
        }}
        className = "flex justify-between items-center p-4 text-white">
           <span className = "font-bold text-2x1">-framer website-</span>
           <nav>
              <ul className = "flex items-center gap-4">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
           </nav>
        </motion.header>
        {/*hero*/}
         <section className = "lg:py-48">
          <div className = "flex items-center justify-between">
            {/*left*/}
            <div className = "space-y-3">
              <motion.h2
                initial = {{y : -100 , opacity: 0}}
                animate = {{y : 0 ,opacity: 1}}
                transition = {{
                  type: "spring",
                  duration : 1,
                  delay : 0.5,
                  stiffness : 130,
                }}
                className = "text-white lg:text-9xl md:text-8xl font-bold lg:max-w-[40rem] lg:max-w-[40rem]">
                  My Portfolio Website
                </motion.h2>

              <motion.p
                initial = {{y : -100 , opacity: 0}}
                animate = {{y : 0 ,opacity: 1}}
                transition = {{
                  type: "spring",
                  duration : 1,
                  delay : 0.8,
                  stiffness : 130,
                }}
                className = "text-white lg:max-w-[400rem] lg:text-5xl fond-semibold">The <span className= "text-orange-500">next</span> generation</motion.p>
              <motion.div
                 initial = {{x : -100 , opacity: 0}}
                 animate = {{x : 0 ,opacity: 1}}
                 transition = {{
                   type: "spring",
                   duration : 1,
                   delay : 0.9,
                   stiffness : 130,
                 }}
                 className="flex items-center gap-4">
                <button className = "px-3 py-6 rounded-md border border-white border-2 my-4 hover:translate-y-1 duration:150">
                  <span className = "font-bold text-white">More details </span>
                </button>
                <button className = "px-3 py-6 rounded-md  border border-white border-2 my-4 hover:translate-y-1 duration:150">
                  <span className = "font-bold text-white gap-4 text-orange-500">Samples</span>
                </button>
              </motion.div>
            </div>
            {/*right 3d model*/}
            <div className = "w-1/2">
                <ThreeModel/>
            </div>
          </div>
         </section>
      </div>
    </main>
  );
}

export default App
