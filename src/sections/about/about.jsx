import "./about.css";
import TechTicker from "../../components/tech-ticker/tech-ticker";

export default function AboutSection() {
  return (
    <div className="section about">
      <TechTicker />
      <div className="container">
        <h3 className="large-heading unbounded primary-text uppercase">About.</h3>
        <p className="urbanist content-text">
          My creative journey started in a graphic design class where I stumbled
          upon a website builder called Adobe Dreamweaver. A tool similar to
          Illustrator but for building websites with little to no code needed,
          every aspiring developer's dream. I was instantly hooked.
          <br />
          <br />
          It wasn't long before I began exploring other website builders like
          WordPress and Webflow. Then I decided it was time to take the plunge
          into coding so I learned JavaScript and ReactJS.
          <br />
          <br />
          Fast forward a few years and I'm now a Software Engineer with
          experience building digital solutions for Fortune 500 companies.
        </p>
      </div>
    </div>
  );
}
