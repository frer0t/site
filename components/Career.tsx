import getduration from "@/utils/getduration";
import { format, parseISO } from "date-fns";
import CareerError from "./Errors/CareerError";
import Href from "./Href";

const Career = async () => {
  let career_data: ICareer[] = [];

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/career`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    career_data = await response.json();
  } catch (error) {
    return <CareerError error={error as Error} />;
  }

  return (
    <>
      {career_data.map((job, index) => (
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
            <span>{getduration(job.start, job.end)}</span>
          </p>
        </div>
      ))}
    </>
  );
};

export default Career;
