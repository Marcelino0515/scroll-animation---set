   // components/AnimatedList.jsx
   "use client";

   import { motion } from 'framer-motion';

   interface AnimatedListProps {
     items: React.ReactNode[];
   }

   const listVariants = {
     hidden: { opacity: 0, x: -50 },
     visible: {
       opacity: 1,
       x: 0,
       transition: {
         staggerChildren: 0.1,
       },
     },
   };

   const listItemVariants = {
     hidden: { opacity: 0, x: -20 },
     visible: { opacity: 1, x: 0 },
   };

   const AnimatedList = ({ items }: AnimatedListProps) => {
     return (
       <motion.ul
         variants={listVariants}
         initial="hidden"
         animate="visible"
         className='flex gap-20'
       >
         {items.map((item: React.ReactNode, index: number) => (
           <motion.li key={index} variants={listItemVariants}>
             {item}
           </motion.li>
         ))}
       </motion.ul>
     );
   };

   export default AnimatedList;