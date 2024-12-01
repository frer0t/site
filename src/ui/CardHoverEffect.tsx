import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
 items,
 className,
}: {
 items: {
  title: string;
  description: string;
  link: string;
  stacks: string[];
 }[];
 className?: string;
}) => {
 let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

 return (
  <div
   className={cn(
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
    className
   )}
  >
   {items.map((item, idx) => (
    <a
     href={item?.link}
     key={item?.link}
     target='_blank'
     className='relative group block p-2 h-full w-full'
     onMouseEnter={() => setHoveredIndex(idx)}
     onMouseLeave={() => setHoveredIndex(null)}
    >
     <AnimatePresence>
      {hoveredIndex === idx && (
       <motion.span
        className='absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl'
        layoutId='hoverBackground'
        initial={{ opacity: 0 }}
        animate={{
         opacity: 1,
         transition: { duration: 0.15 },
        }}
        exit={{
         opacity: 0,
         transition: { duration: 0.15, delay: 0.2 },
        }}
       />
      )}
     </AnimatePresence>
     <Card>
      <CardTitle>{item.title}</CardTitle>
      <CardDescription>{item.description}</CardDescription>
      <CardStack stacks={item.stacks} />
     </Card>
    </a>
   ))}
  </div>
 );
};

export const Card = ({
 className,
 children,
}: {
 className?: string;
 children: React.ReactNode;
}) => {
 return (
  <div
   className={cn(
    "rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-black-100 border border-dashed dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
    className
   )}
  >
   <div className='relative z-50'>
    <div className='p-4'>{children}</div>
   </div>
  </div>
 );
};
export const CardTitle = ({
 className,
 children,
}: {
 className?: string;
 children: React.ReactNode;
}) => {
 return (
  <h4
   className={cn("text-secondary font-bold tracking-wide text-2xl", className)}
  >
   {children}
  </h4>
 );
};
export const CardDescription = ({
 className,
 children,
}: {
 className?: string;
 children: string;
}) => {
 return (
  <p
   className={cn(
    "mt-4 dark:text-zinc-400 tracking-wide leading-relaxed text-sm",
    className
   )}
  >
   {children}
  </p>
 );
};
export const CardStack = ({ stacks }: { stacks: string[] }) => {
 return (
  <ul className='flex flex-wrap'>
   {stacks.map((stack, index) => (
    <li
     className='mr-2 mt-4 rounded-lg bg-neutral-200 dark:bg-neutral-900 px-2 py-1 text-sm font-medium text-secondary'
     key={index}
    >
     {stack}
    </li>
   ))}
  </ul>
 );
};
