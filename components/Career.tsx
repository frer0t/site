import career from "@/constants/career";
import type { ICareerCompany, ICareerRole } from "@/types/constants";
import getduration from "@/utils/getduration";
import { format, max, min, parseISO } from "date-fns";
import Href from "./Href";

/** Display headings in title case without touching bullet copy. */
function titleCase(s: string) {
  return s.replace(
    /\w\S*/g,
    (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
  );
}

function companyDateRange(roles: ICareerRole[]) {
  const starts = roles.map((r) => parseISO(r.start));
  const ends = roles.map((r) => (r.end ? parseISO(r.end) : new Date()));
  const start = min(starts);
  const end = max(ends);
  const hasOpenRole = roles.some((r) => !r.end);
  const startKey = format(start, "yyyy-MM-dd");
  const endKey = hasOpenRole ? undefined : format(end, "yyyy-MM-dd");
  return {
    startLabel: format(start, "LLL yyyy"),
    endLabel: hasOpenRole ? "Present" : format(end, "LLL yyyy"),
    totalDuration: getduration(startKey, endKey),
  };
}

function CompanyLogo({ name, logoUrl }: { name: string; logoUrl: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- career logos may be any origin
    <img
      src={logoUrl}
      alt={`${name} logo`}
      width={48}
      height={48}
      className="h-12 w-12 shrink-0 rounded-md object-contain"
      loading="lazy"
      decoding="async"
    />
  );
}

function RoleBlock({ job }: { job: ICareerRole }) {
  const dateLine = (
    <>
      {format(parseISO(job.start), "LLL yyyy")} –{" "}
      {job.end ? format(parseISO(job.end), "LLL yyyy") : "Present"} ·{" "}
      {getduration(job.start, job.end)}
    </>
  );

  return (
    <div className="space-y-1.5">
      <h3 className="m-0 text-base font-semibold leading-snug text-myblack dark:text-white">
        {titleCase(job.role)}
      </h3>
      <p className="m-0 text-sm leading-snug text-myblack/70 dark:text-white/65">
        {dateLine}
      </p>
      <p className="m-0 text-sm text-myblack/65 dark:text-white/55">
        {titleCase(job.location)}
      </p>
      <ul className="m-0 mt-2 list-disc space-y-1 pl-5 text-sm text-myblack/90 dark:text-white/80 marker:text-myblack/40 dark:marker:text-white/40">
        {job.done.map((task, i) => (
          <li key={i} className="pl-0.5">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompanyCard({ block }: { block: ICareerCompany }) {
  const { startLabel, endLabel, totalDuration } = companyDateRange(block.roles);
  const multi = block.roles.length > 1;

  return (
    <article className="py-3 md:py-4">
      <div className="flex gap-4">
        <CompanyLogo name={block.company} logoUrl={block.logoUrl} />

        <div className="min-w-0 flex-1">
          <h2 className="m-0 text-lg font-bold leading-snug text-myblack dark:text-white md:text-xl">
            <Href to={block.companyLink}>{titleCase(block.company)}</Href>
          </h2>
          <p className="m-0 mt-1 text-sm text-myblack/70 dark:text-white/65">
            {startLabel} – {endLabel} · {totalDuration}
          </p>

          <div className="relative mt-3 md:mt-4">
            {multi ? (
              <div
                className="pointer-events-none absolute bottom-2 left-[11px] top-2 w-px bg-myblack/25 dark:bg-white/25"
                aria-hidden
              />
            ) : null}
            <div className={multi ? "space-y-5" : ""}>
              {block.roles.map((job) => (
                <div
                  key={`${job.role}-${job.start}`}
                  className={multi ? "relative pl-10" : ""}
                >
                  {multi ? (
                    <span
                      className="absolute left-[11px] top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-myblack/30 bg-white dark:border-white/40 dark:bg-zinc-900"
                      aria-hidden
                    />
                  ) : null}
                  <RoleBlock job={job} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

const Career = () => {
  return (
    <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-5 items-start lg:max-w-6xl lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6">
      {career.map((block) => (
        <CompanyCard key={block.companyLink} block={block} />
      ))}
    </div>
  );
};

export default Career;
