import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Herb AI is an intelligent platform that helps users identify herbs from images instantly. Using advanced machine learning models, it recognizes over 100 herbs and provides detailed information about their health benefits, uses, and traditional applications. Designed for students, gardeners, and herbal enthusiasts, Herb AI makes learning about plants simple, interactive, and fun."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
