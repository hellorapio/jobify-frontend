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

export interface IUser {
  gender: string;
  birthDate: Date;
  address: string;
  name: string;
  photo: string;
  email: string;
  role: "worker" | "company" | "admin";
  passwordChangeDate: Date | undefined;
  loggedOutAt: Date;
  joinDate: Date;
  isVerifiedAt: Date;
  isVerified: boolean;
  username: string;
  experience: string[];
  education: string[];
  experienceYears: number;
  resume: string;
  industry: string[];
  ratingsAverage: number;
  ratingsCount: number;
  founded: Date;
  companyDescription: string;
  numberOfEmployees: number;
  jobs: number;
  revenue: number;
  contactInformation: {
    website: string;
    phone: string;
    email: string;
  };
}

export interface INotification {
  title: string;
  content: string;
  createdAt: Date;
  read: boolean;
  _id: string;
}
