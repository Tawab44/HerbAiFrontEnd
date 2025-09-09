import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Have a herb or plant that our AI couldn’t identify? We’d love to hear from you! Share your images or questions, and our team will help improve Herb AI while providing you with accurate information and guidance."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
