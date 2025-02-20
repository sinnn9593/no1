import { motion } from 'framer-motion';
import ThreeModel from './ThreeModel'; // インポートパス修正
import { Link } from 'react-router-dom'; // Linkを正しくインポート

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-800">
      <div className="w-full max-w-screen-xl mx-auto px-4 min-h-screen">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.5,
            stiffness: 130,
          }}
          className="flex justify-between items-center p-2 text-white"
        >
          <span className="font-bold text-5xl">-Welcome to my website-</span>

        <nav>
          <ul className="flex items-center gap-7 text-3xl">
            <li>
                <Link to="/">Home</Link> {/* Homeページにリンク */}
            </li>
            <li>
                <Link to="/about">About</Link> {/* Aboutページにリンク */}
            </li>
            <li>
                <Link to="/service">Service</Link> {/* Servicesページにリンク */}
            </li>
            <li>
                <Link to="/contact">Contact</Link> {/* Contactページにリンク */}
            </li>
          </ul>
        </nav>

        </motion.header>

        {/* Hero Section */}
        <section className="lg:py-48">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left */}
            <div className="space-y-6 text-center lg:text-left">
              <motion.h2
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  delay: 0.5,
                  stiffness: 130,
                }}
                className="text-white lg:text-9xl md:text-8xl font-bold lg:max-w-[40rem]"
              >
                My Portfolio Website
              </motion.h2>

              <motion.p
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  delay: 0.8,
                  stiffness: 130,
                }}
                className="text-white lg:max-w-[40rem] lg:text-5xl font-semibold"
              >
                The <span className="text-orange-500">coding</span> projects
              </motion.p>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  delay: 0.9,
                  stiffness: 130,
                }}
                className="flex items-center gap-2 w-full justify-center"
              >
                {/* More Details ボタン: React RouterのLinkで遷移 */}
                <Link to="/more-details">
                  <button className="px-3 py-6 rounded-md border border-white border-2 my-4 hover:translate-y-1 duration-150">
                    <span className="font-bold text-white">More details</span>
                  </button>
                </Link>

                {/* Sample ボタン */}
                <Link to ="/samples">
                   <button className="px-3 py-6 rounded-md border border-white border-2 my-4 hover:translate-y-1 duration-150">
                     <span className="font-bold text-orange-500">Samples</span>
                   </button>
                </Link>
              </motion.div>
            </div>

            {/* Right 3D Model */}
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <ThreeModel />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
