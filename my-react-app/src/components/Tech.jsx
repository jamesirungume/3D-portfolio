import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Skills Section */}
      <div className="text-center mb-10">
        <h2 className={`${styles.sectionHeadText} text-center`}>
                  My skills
                </h2>
        <div className="border-b-2 border-gray-300 w-20 mx-auto mt-1 mb-6"></div>

        <div className="space-y-3 text-gray-700 text-base text-left sm:text-center px-4">
          <p>1. <strong>WordPress:</strong> Custom themes & plugins, Elementor, WooCommerce, Yoast SEO. Backend customization, CMS features, and integrations (Mailchimp, Facebook Pixel, Google Ads).</p>
          <p>2. <strong>JavaScript</strong> – Libraries: React, React Native,Typescript</p>
          <p>3. <strong>Python</strong> – Framework: Django,Flask</p>
          <p>4. <strong>Tools & Platforms</strong> – Git, Render,Vercel, GitHub, Netlify, Figma,Postman</p>
          <p>5. <strong>Databases</strong> – PostgreSQL (psql), SQLite3 (sqlite3)</p>
          <p>6. <strong>CSS</strong> – Libraries: Tailwind, Bootstrap</p>
          <p>7. <strong> Authentication & Authorization</strong> - JWT (JSON Web Token),OAuth2 for third-party login integration </p>
          <p>8. <strong>APIs</strong> – RESTful API,Third-party API integration (e.g. Google Maps, Stripe, social logins)</p>
        </div>
      </div>

      {/* Technologies Icons */}
      <div className="flex flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
