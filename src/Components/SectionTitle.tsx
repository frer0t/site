const SectionTitle = ({ title }: { title: string }) => {
 return (
  <h1 className="text-center text-black-100 dark:text-white text-3xl sm:text-4xl font-semibold mb-8">
   {title}
  </h1>
 );
};

export default SectionTitle;
