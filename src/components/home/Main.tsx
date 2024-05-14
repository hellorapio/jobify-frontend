import { FC } from "react";
import FeaturedJobs from "./FeaturedJobs";
import TrustedPartners from "./TrustedPartners";

const Main: FC = () => {
  return (
    <main>
      <FeaturedJobs></FeaturedJobs>
      <TrustedPartners />
    </main>
  );
};

export default Main;
