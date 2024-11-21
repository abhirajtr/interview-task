import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      // duration: 1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const App = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-black text-white min-h-screen flex flex-col"
    >
      <motion.div variants={childVariants}>
        <Header />
      </motion.div>
      <motion.main variants={childVariants} className="px-14">
        <Home />
      </motion.main>
      <motion.div variants={childVariants}>
        <Footer />
      </motion.div>
    </motion.div>
  )
}

export default App;