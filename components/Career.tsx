import { format, intervalToDuration, parseISO } from "date-fns";
import Href from "./Href";

const Career = ({ career }: { career: ICareer[] }) => {
  const getDuration = (startDate: string, endDate?: string) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date(),
    });

    let durationStr = "";

    if (durationObj && durationObj.years) {
      if (durationObj.years > 1) {
        durationStr = `${durationObj.years} yrs `;
      } else if (durationObj.years === 1) {
        durationStr = `${durationObj.years} yr `;
      }
    }
    durationStr += `${durationObj.months} mos`;

    return durationStr;
  };
  return (
    <>
      {career.map((job, index) => (
        <div key={index} className="prose prose-indigo dark:prose-invert py-2">
          <h3 className="mt-2">{job.role}</h3>
          <p className="text-myblack/65 dark:text-white/65 ">
            <Href to={job.companyLink}>{job.company}</Href>
            <span> • </span>
            <span>{job.location}</span>
          </p>
          <ul className="m-0">
            {job.done.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <p className="m-0 text-myblack/65 dark:text-white/65">
            <span>{format(parseISO(job.start), "LLL yyyy")}</span>
            <span> – </span>
            <span>
              {job.end ? format(parseISO(job.end), "LLL yyyy") : "Present"}
            </span>
            <span> • </span>
            <span>{getDuration(job.start, job.end)}</span>
          </p>
        </div>
      ))}
    </>
  );
};

export default Career;
