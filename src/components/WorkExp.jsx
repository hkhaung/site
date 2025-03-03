import { useParams } from "react-router";
import { workExps } from "../pathdata";


function WorkExp() {
  const { slug } = useParams();

  const workExp = workExps.find((workExp) => workExp.slug === slug);

  if (!workExp) {
    return <h1>404 Not Found</h1>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{workExp.name}</h1>
      <p className="text-gray-600">{workExp.description}</p>
    </div>
  );
}

export default WorkExp
