import React from "react";
import classes from "./Timeline.module.css";
// import { motion } from "framer-motion";
import { Box, Container, Flex, Heading  } from "@chakra-ui/react";
import timelinData from "./timelineData";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <div className={classes.Body}>
      <Heading
        fontSize={{ base: "lg", sm: "xl", md: "3xl", lg: "3xl" }}
        pt={{ base: "2%", sm: "3%", md: "4%", lg: "4%" }}
        pb={{ base: "2%", sm: "3%", md: "4%", lg: "4%" }}
        color="white"
      >
        Upcomming Events
      </Heading>
      <hr className={classes.hzrow}></hr>
      <Flex
        className={classes["timeline-container"]}
        direction="column"
        w={{ base: "90vw", sm: "90vw", md: "80vw", lg: "80vw" }}
        mt={{ base: "2%", sm: "4%", md: "5%", lg: "6%" }}
        mb={{ base: "2%", sm: "4%", md: "5%", lg: "6%" }}
      >
        {timelinData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </Flex>
    </div>
  );
};
// const Timeline = () => {
//   return (
//     <div>
//       <div className={classes["container-fluid"]}>
//         <Heading
//           fontSize={{ base: "lg", sm: "xl", md: "3xl", lg: "4xl" }}
//           textAlign="center"
//           pt={{ base: "5%", sm: "6%", md: "8%", lg: "10%" }}
//           pb={{ base: "5%", sm: "6%", md: "8%", lg: "10%" }}
//         >
//           Upcomming Events
//         </Heading>
//         <hr className={classes.hzrow}></hr>
//         <Container
//           position="relative"
//           mt={{ base: "5%", sm: "7%", md: "6%", lg: "7%" }}
//         >
//           <div className={`${classes.line}`}>
//             <div className={`row ${classes["timeline-movement"]}`}>
//               <div className={`${classes["timeline-badge"]} `}></div>
//                   <div className={`${classes["timeline-panel"]}`}>
//                     <motion.div
//                       className={classes["lefting-wrap"]}
//                       initial={{ opacity: 0 }}
//                       whileInView={{
//                         opacity: 1,
//                         x: [-500, 0],
//                         transition: {
//                           type: "spring",

//                           duration: 1,
//                           delay: 0.1,
//                         },
//                       }}
//                       viewport={{ once: true }}
//                     >
//                       <Heading fontSize={{base: "14px", sm: "20px", md: "26px", lg: "32px" }}>Mussum ipsum cacilds</Heading>
//                       <Text fontSize={{base: "12px", sm: "16px", md: "24px", lg: "30px" }} textAlign="justify">
//                         Lorem ipsum dolor sit amet, consectetur adipisicing
//                         elit. Cupiditate ducimus officiis quod! Aperiam eveniet
//                         nam nostrum odit quasi ullam voluptatum.
//                       </Text>
//                     </motion.div>
//                   </div>

//               <div className={classes.date2}>
//                 <span>
//                   <p>12 January, 2023</p>
//                 </span>
//               </div>
//             </div>

//             <div
//               className={`row ${classes["timeline-movement"]} ${classes["right-date"]}`}
//             >
//               <div
//                 className={`${classes["timeline-badge"]} ${classes["center-right1"]}`}
//               ></div>
//               <div className={classes.date3}>
//                 <p>23 January, 2023</p>
//               </div>
//               <div className={`col-sm-6 ${classes["timeline-item"]}`}>
//                 <div className="row">
//                   <div className={`offset-sm-1 col-sm-11`}>
//                     <div
//                       className={`${classes["timeline-panel"]} ${classes.debits} ${classes.anim} ${classes.animate} ${classes.fadeInRight}`}
//                     >
//                       <motion.div
//                         className={classes["righting-wrap"]}
//                         initial={{ opacity: 0 }}
//                         whileInView={{
//                           opacity: 1,
//                           x: [+500, 0],
//                           transition: {
//                             type: "spring",
//                             duration: 1,
//                             delay: 0.1,
//                           },
//                         }}
//                         viewport={{ once: true }}
//                       >
//                         <h3>Mussum ipsum cacilds</h3>
//                         <p className={classes.importo}>
//                           Lorem ipsum dolor sit amet, consectetur adipisicing
//                           elit. Cupiditate ducimus officiis quod! Aperiam
//                           eveniet nam nostrum odit quasi ullam voluptatum.
//                         </p>
//                       </motion.div>
//                       <div className={classes.clear}></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className={`row ${classes["timeline-movement"]} `}>
//               <div
//                 className={`${classes["timeline-badge"]} ${classes["center-left1"]}`}
//               ></div>
//               <div className={`col-sm-6 ${classes["timeline-item"]}`}>
//                 <div className="col-sm-11">
//                   <div
//                     className={`${classes["timeline-panel"]} ${classes.credits} ${classes.anim} ${classes.animate} ${classes.fadeInLeft}`}
//                   >
//                     <motion.div
//                       className={classes["lefting-wrap"]}
//                       initial={{ opacity: 0 }}
//                       whileInView={{
//                         opacity: 1,
//                         x: [-500, 0],
//                         transition: {
//                           type: "spring",
//                           duration: 1,
//                           delay: 0.1,
//                         },
//                       }}
//                       viewport={{ once: true }}
//                     >
//                       <h3>Mussum ipsum cacilds</h3>
//                       <p className={classes.importo}>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing
//                         elit. Cupiditate ducimus officiis quod! Aperiam eveniet
//                         nam nostrum odit quasi ullam voluptatum.
//                       </p>
//                     </motion.div>
//                     <div className={classes.clear}></div>
//                   </div>
//                 </div>
//               </div>
//               <div className={classes.date2}>
//                 <span>
//                   <p>12 January, 2023</p>
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className={`row ${classes["timeline-movement"]}`}>
//             <div
//               className={`${classes["timeline-badge"]} ${classes["center-left1"]}`}
//             ></div>
//             <div className={`col-sm-6 ${classes["timeline-item"]}`}>
//               <div className="col-sm-11">
//                 <div
//                   className={`${classes["timeline-panel"]} ${classes.credit} ${classes.anim} ${classes.animate} ${classes.fadeInLeft}`}
//                 >
//                   <motion.div
//                     className={classes["lefting-wrap"]}
//                     initial={{ opacity: 0 }}
//                     whileInView={{
//                       opacity: 1,
//                       x: [-500, 0],
//                       transition: {
//                         type: "spring",
//                         duration: 1,
//                         delay: 0.1,
//                       },
//                     }}
//                     viewport={{ once: true }}
//                   >
//                     <h3>Mussum ipsum cacilds</h3>
//                     <p className={classes.importo}>
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                       Cupiditate ducimus officiis quod! Aperiam eveniet nam
//                       nostrum odit quasi ullam voluptatum.
//                     </p>
//                   </motion.div>
//                   <div className={classes.clear}></div>
//                 </div>
//               </div>
//             </div>
//             <div className={classes.date2}>
//               <span>
//                 <p>15 February, 2023</p>
//               </span>
//             </div>
//           </div>

//           <div
//             className={`row ${classes["timeline-movement"]} ${classes["right-date"]}`}
//           >
//             <div
//               className={`${classes["timeline-badge"]} ${classes["center-right1"]}`}
//             ></div>
//             <div className={classes.date3}>
//               <p>26 February, 2023</p>
//             </div>
//             <div className={`col-sm-6 ${classes["timeline-item"]}`}>
//               <div className="row">
//                 <div className={`offset-sm-1 col-sm-11`}>
//                   <div
//                     className={`${classes["timeline-panel"]} ${classes.debits} ${classes.anim} ${classes.animate} ${classes.fadeInRight}`}
//                   >
//                     <motion.div
//                       className={classes["righting-wrap"]}
//                       initial={{ opacity: 0 }}
//                       whileInView={{
//                         opacity: 1,
//                         x: [+500, 0],
//                         transition: {
//                           type: "spring",
//                           duration: 1,
//                           delay: 0.1,
//                         },
//                       }}
//                       viewport={{ once: true }}
//                     >
//                       <h3>Mussum ipsum cacilds</h3>
//                       <p className={classes.importo}>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing
//                         elit. Cupiditate ducimus officiis quod! Aperiam eveniet
//                         nam nostrum odit quasi ullam voluptatum.
//                       </p>
//                     </motion.div>
//                     <div className={classes.clear}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className={`row ${classes["timeline-movement"]} `}>
//             <div
//               className={`${classes["timeline-badge"]} ${classes["center-left1"]}`}
//             ></div>
//             <div className={`col-sm-6 ${classes["timeline-item"]}`}>
//               <div className="col-sm-11">
//                 <div
//                   className={`${classes["timeline-panel"]} ${classes.credits} ${classes.anim} ${classes.animate} ${classes.fadeInLeft}`}
//                 >
//                   <motion.div
//                     className={classes["lefting-wrap"]}
//                     initial={{ opacity: 0 }}
//                     whileInView={{
//                       opacity: 1,
//                       x: [-500, 0],
//                       transition: {
//                         type: "spring",
//                         duration: 1,
//                         delay: 0.1,
//                       },
//                     }}
//                     viewport={{ once: true }}
//                   >
//                     <h3>Mussum ipsum cacilds</h3>
//                     <p className={classes.importo}>
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                       Cupiditate ducimus officiis quod! Aperiam eveniet nam
//                       nostrum odit quasi ullam voluptatum.
//                     </p>
//                   </motion.div>
//                   <div className={classes.clear}></div>
//                 </div>
//               </div>
//             </div>
//             <div className={classes.date2}>
//               <span>
//                 <p>28 February, 2023</p>
//               </span>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// };

export default Timeline;
