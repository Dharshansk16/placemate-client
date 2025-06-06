export interface Tech {
  id: number;
  name: string;
}

export interface Role {
  id: number;
  title: string;
  description: string;
  tech_stack: Tech[];
  average_ctc: number;
  job_location: string;
  openings_per_year: number;
}

export interface InterviewExperience {
  id: number;
  role: string;
  experience: string;
  outcome: string;
  difficulty: string;
  tech_stack: Tech[];
}

export interface Review {
  id: number;
  reviewer_name: string | null;
  rating: number;
  review_text: string;
  pros: string | null;
  cons: string | null;
  work_life_balance: number;
  culture: number;
}

export interface Company {
  name: string;
  description: string;
  tech_stack: Tech[];
  headquarters: string;
  founded_year: number;
  employee_count: number;
  industry: string;
  website: string;
  average_ctc: number;
  work_culture: string;
  roles: Role[];
  interview_experiences: InterviewExperience[];
  reviews: Review[];
}
