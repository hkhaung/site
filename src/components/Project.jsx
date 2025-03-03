import { useParams } from "react-router";
import { projects } from "../pathdata";


function Project() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <h1>404 Not Found</h1>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{project.name}</h1>
      <p className="text-gray-600">{project.description}</p>
    </div>
  );
}

export default Project
