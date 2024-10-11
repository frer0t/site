import { SubmitHandler, useForm } from "react-hook-form";
import SpotlightButton from "./SpotlightButton";
import toast from "react-hot-toast";
import SectionTitle from './SectionTitle';

type ContactFormFields = {
 name: string;
 email: string;
 message: string;
};
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Contact = () => {
 const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
  reset,
 } = useForm<ContactFormFields>();
 const sendEmail: SubmitHandler<ContactFormFields> = async (formData) => {
  const loadingToast = toast.loading('Sending');
  const bodyData = JSON.stringify(formData);
  try {
   const res = await fetch(`${BACKEND_URL}/api/contact`, {
    body: bodyData,
    headers: {
     'Content-type': 'application/json',
    },
    method: 'POST',
   });
   const { data, error } = await res.json();
   toast.dismiss(loadingToast);
   if (!res.ok) throw new Error(error.message);
   reset();
   toast.success('Sent');
   console.log(data);
  } catch (error: any) {
   toast.dismiss(loadingToast);
   error.message === 'Failed to fetch'
    ? toast.error('No internet Connection')
    : toast.error(error.message);
  }
 };
 return (
  <section id="contact" className="flex flex-col items-center mt-10">
   <SectionTitle title="Contact" />
   <form
    className="w-full md:max-w-[600px] py-4 sm:p-4 flex flex-col gap-y-8"
    onSubmit={handleSubmit(sendEmail)}
   >
    <p className="text-gray-600 font-extrabold text-base sm:text-lg">
     having more questions? please fill contact form below and i'll get back to
     you asap!. or email:{' '}
     <span className="text-secondary">frerotntwali@gmail.com</span>
    </p>
    <input
     type="text"
     placeholder="your name"
     className={`bg-transparent w-full py-2 text-black-100 dark:text-white border-b-2  outline-0 rounded-none ${
      errors.name ? 'border-red-500' : 'border-secondary'
     }`}
     {...register('name', {
      required: true,
     })}
     disabled={isSubmitting}
    />
    {errors.name && <p className="text-red-500 text-sm">Required</p>}
    <input
     type="email"
     placeholder="your email"
     className={`bg-transparent w-full py-2 text-black-100 dark:text-white border-b-2 outline-0 rounded-none ${
      errors.email ? 'border-red-500' : 'border-secondary'
     }`}
     {...register('email', {
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      required: true,
     })}
     disabled={isSubmitting}
    />
    {errors.email && <p className="text-red-500 text-sm">Invalid email</p>}
    <textarea
     className={`bg-transparent w-full py-2 text-black-100 dark:text-white border-b-2 outline-0 overflow-y-scroll no-scrollbar min-h-[150px] rounded-none ${
      errors.message ? 'border-red-500' : 'border-secondary'
     }`}
     placeholder="your message"
     {...register('message', {
      required: true,
     })}
     disabled={isSubmitting}
    ></textarea>
    {errors.message && <p className="text-red-500 text-sm">Required</p>}
    <SpotlightButton disable={isSubmitting} />
   </form>
  </section>
 );
};

export default Contact;
