/** One position at a company (LinkedIn-style nested role). */
interface ICareerRole {
  role: string;
  location: string;
  start: string;
  end?: string;
  done: string[];
}

/** Company block with one or more roles (same employer, stacked like LinkedIn). */
interface ICareerCompany {
  company: string;
  companyLink: string;
  logoUrl: string;
  roles: ICareerRole[];
}
interface LeaderboardEntry {
  id: string;
  name: string;
  language: string;
  solveTimeMs: number;
  completedAt: string;
  initials?: string;
  message?: string;
  feedback?: string;
  link?: string;
}

/** @deprecated use LeaderboardEntry */
interface IFeedback {
  feedback_id: string;
  initials: string;
  message: string;
  feedback?: string;
  link?: string;
  created_at: string;
}
export type { ICareerCompany, ICareerRole, IFeedback, LeaderboardEntry };
