import SubscribeForm from "@/components/SubscribeForm";

const SubscribeSection = () => (
  <section
    aria-label="Newsletter signup"
    className="flex flex-col gap-3 border-t border-dashed border-mygreen/40 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 dark:border-myred/40"
  >
    <p className="text-pretty font-mono text-xs text-metal-500 dark:text-metal-400">
      <span className="font-medium text-myblack dark:text-white">newsletter</span>
      {" · "}
      new posts in your inbox, no spam
    </p>
    <div className="w-full shrink-0 sm:max-w-[220px]">
      <SubscribeForm />
    </div>
  </section>
);

export default SubscribeSection;
