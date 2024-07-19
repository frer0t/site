import SpotlightButton from "./SpotlightButton";

const Contact = () => {
 return (
  <section id='contact' className='flex flex-col items-center mt-10'>
   <h1 className='text-center text-black-100 dark:text-white text-3xl sm:text-4xl font-semibold'>
    Contact
   </h1>
   <form className='w-full md:max-w-[600px] py-4 sm:p-4 flex flex-col gap-y-8'>
    <p className='text-gray-600 font-extrabold text-base sm:text-lg'>
     having more questions? please fill form below and i'll get back to you
     asap!. or email:{" "}
     <span className='text-secondary'>frerotntwali@gmail.com</span>
    </p>
    <input
     type='text'
     placeholder='your name'
     className='bg-transparent w-full py-2 text-black-100 dark:text-white border-b-2 border-black-100 dark:border-secondary outline-none'
    />
    <input
     type='email'
     placeholder='your email'
     className='bg-transparent w-full py-2 text-black-100 dark:text-white border-b-2 border-black-100 dark:border-secondary outline-0 '
    />
    <textarea
     className='bg-transparent w-full py-2 text-black-100 dark:text-white border-b-2 border-black-100 dark:border-secondary outline-0 overflow-y-scroll no-scrollbar min-h-[150px]'
     placeholder='your message'
    ></textarea>
    <SpotlightButton />
   </form>
  </section>
 );
};

export default Contact;
