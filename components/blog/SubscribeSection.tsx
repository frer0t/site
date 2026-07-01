import SubscribeForm from "@/components/SubscribeForm";

const SubscribeSection = () => (
  <div className="mx-4 md:mx-6 mt-8 mb-10 rounded-xl border-2 border-dashed border-mygreen dark:border-myred p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
    <div>
      <h2 className="font-mono text-[11px] font-medium tracking-[0.14em] text-metal-500 dark:text-metal-400">
        stay updated
      </h2>
      <p className="mt-1 text-sm font-medium text-myblack dark:text-white">
        get new posts in your inbox. no spam, unsubscribe anytime.
      </p>
    </div>
    <div className="w-full md:w-72 shrink-0">
      <SubscribeForm />
    </div>
  </div>
);

export default SubscribeSection;
