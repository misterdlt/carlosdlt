import { IoOpenOutline } from "react-icons/io5";
import "./work.css";

export default function WorkSection({ ref }) {
  //
  //
  const projects = [
    {
      title: "The View at Plum Creek",
      description: "A modern wedding venue website built with WordPress.",
      url: "https://viewatplumcreek.com",
      image: "/sites/viewatplumcreek.png",
    },
    {
      title: "Bonaventure Bookkeeping",
      description: "An accounting and bookkeeping website built with Next.js.",
      url: "https://bonabook.xyz",
      image: "/sites/bonabook.png",
    },
    {
      title: "Curated Beauty by Bre",
      description: "A beauty services website built with Next.js.",
      url: "https://curatedbeautybybre.com",
      image: "/sites/curatedbeautybybre.png",
    },
    {
      title: "Three Generations Baking",
      description: "A local bakery website built with WordPress.",
      url: "https://threegensbaking.com",
      image: "/sites/3gensbaking.png",
    },
    {
      title: "R&J Mills Remodeling",
      description: "A home remodeling company website built with WordPress.",
      url: "https://randjmills.com",
      image: "/sites/randjmills.png",
    },
  ];

  return (
    <div className="work" ref={ref}>
      <h2 className="unbounded primary-text uppercase">Work.</h2>
      {projects.map((project, index) => (
        <div className="work-item" key={index}>
          <div className="container">
            <div className="work-item-content">
              <a href={project.url} target="#">
                <h3 className="medium-heading unbounded primary-text uppercase">
                  {project.title} <IoOpenOutline size={30} />
                </h3>
              </a>
              <p className="content-text">{project.description}</p>
            </div>
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      ))}
    </div>
  );
}
