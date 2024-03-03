export interface IJob {
  title: string;
  companyName: string;
  description: string;
  salary: number;
  currency: "GBP" | "EUR" | "YEN" | "USD" | "CHF";
  employmentType: "full-time" | "part-time" | "contract" | "internship";
  location: {
    type: "Point";
    coordinates: [number, number];
  };
  address: string;
  company: string;
  applicants: number;
  remote: boolean;
  jobFunction:
    | "engineering"
    | "sales"
    | "marketing"
    | "product"
    | "design"
    | "customer service"
    | "finance"
    | "human resources"
    | "healthcare"
    | "others";
  experienceLevel: "mid" | "entry" | "senior";
  educationLevel:
    | "high school"
    | "associate"
    | "bachelor"
    | "master"
    | "doctorate";
  skills: string[];
  benefits: string[];
  contactEmail: string;
  applyUrl: string;
  views: number;
  isActive: boolean;
  slug: string;
}
