
import {motion} from "framer-motion"

const Home = () => {
    return (

        <motion.div className="p-4 absolute top-0 left-0 h-full w-full bg-dark"
        initial={{y:"100%"}} 
        animate={{y:"0%"}} 
        transition={{duration: 0.75, ease:"easeOut"}} 
        exit={{opacity: 1}}
        >
            <h1 className="flex justify-center text-white items-center h-full w-full">Hello world</h1>
        </motion.div>
     );
}
 
export default Home;