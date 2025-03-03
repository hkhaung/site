import { Link } from "react-router"


function List({ title, items, listName }) {
  return (
    <div className="flex flex-col gap-2 w-fit shrink-0 animate-fadeup delay-300">
      <h2 className="text-lg font-medium w-fit">{title}</h2>
      <ul className="mt-2 space-y-8">
        {items.map((item) => (
          <li key={item.slug} className="relative group animate-ease-out w-fit"> 
            <Link to={`/${listName}/${item.slug}`} className="relative z-10">
              <div className="underline decoration-gray-200 underline-offset-2 decoration-2 group-hover:decoration-transparent">{item.name}</div>
              <div className="text-gray-400 text-sm">{item.description}</div>
            </Link>
            <span className="absolute inset-[-10px] group-hover:bg-gray-100 group-hover:rounded-xl transition-all duration-700 -z-10"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
