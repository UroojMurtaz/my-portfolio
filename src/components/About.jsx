import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utlis/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard=({index,title,icon})=>{
  return(
   <Tilt className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
    <div
    options={{
      max: 25,
      scale: 1,
      speed: 450     
    }}
    className="bg-tertiary py-5 px-12 rounded-[20px] min-h-[280px] 
    flex justify-evenly items-center flex-col 
    "
    >
      <img
      src={icon}
      alt={title}
      className="w-16 h-16 object-contain"
      />
      <h3 
      className="text-center text=-[20px] text-white">
        {title}
        </h3>

    </div>
    </motion.div>

   </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdution</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
      className="mt-4 text-secondary text-[17px] leading-[30px] max-w-3xl"
      variants={fadeIn("", "", 0.1, 1)}>
        I am software Developer with experience in building
        websites and web applications. I specialize in JavaScript and have
        professional experience working with React, Redux, Next.js, and Node.js.
        I ampassionate about building scalable and maintainable software, creating
        effective solutions, and learning every day to grow professionally in
        the IT industry.
      </motion.p>
      <div
      className="mt-20 flex flex-wrap gap-10"
      >
        {
          services.map((service,index)=>(
            <ServiceCard key={service.title} index={index}
            {...service}
            />
          ))
        }



      </div>
    </>
  );
};

export default SectionWrapper(About,"about");
