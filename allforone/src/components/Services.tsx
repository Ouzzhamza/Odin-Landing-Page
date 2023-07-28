import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {


  const item = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }
  return (
    <motion.div className="Services bg-gray p-4 absolute top-0 left-0 h-full w-full" 
    initial={{y:"100%"}} 
    animate={{y:"0%"}} 
    transition={{duration: 0.75, ease:"easeOut"}} 
    exit={{opacity: 1}}
    >
      <div className="bg-black text-white text-center flex items-center justify-center text-[4.5rem] font-non mt-[10%]">
        <motion.ul className="flex flex-col items-center" 
         initial="hidden"
         animate="visible"
         >
          <motion.li className="w-max" 
          whileHover={{ scale: 1.1 }} 
          transition={{ type: 'spring', delay: 0.9 }}
          variants={item}
          >
            <Link className="hover:text-cyan-600" to="./">Property Managemen</Link>
          </motion.li>
          <motion.li className="w-max" 
          whileHover={{ scale: 1.1 }} 
          transition={{ type: 'spring', delay: 1.2 }}
          variants={item}
          >
            <Link className="hover:text-cyan-600" to="./">Booking Engine</Link>
          </motion.li>
          <motion.li className="w-max" 
          whileHover={{ scale: 1.1 }} 
          transition={{ type: 'spring', delay: 1.4 }}
          variants={item}
          >
            <Link className="hover:text-cyan-600" to="./">Revenue Management</Link>
          </motion.li>
          <motion.li className="w-max" 
          whileHover={{ scale: 1.1 }} 
          transition={{ type: 'spring', delay: 1.6 }}
          variants={item}
          >
            <Link className="hover:text-cyan-600" to="./">Advertising</Link>
          </motion.li>
          <motion.li className="w-max" 
          whileHover={{ scale: 1.1 }} 
          transition={{ type: 'spring', delay: 1.8 }}
          variants={item}
          >
            <Link className="hover:text-cyan-600" to="./">Chating</Link>
          </motion.li>
        </motion.ul>
      </div>
    </motion.div>
  );
}
