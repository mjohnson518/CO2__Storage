import { useState } from "react";
import IProject from "types/project";

interface IProps {
  projects: IProject[];
}

const Projects = ({ projects }: IProps) => {
  const [showAll, setShowAll] = useState(false);

  if (!projects.length) {
    return null;
  }

  const projectsListNode = () => {
    if (showAll) {
      return projects.map((project) => (
        <a
          href={project.url}
          key={project.url}
          className="group block text-black dark:text-white"
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="flex flex-row items-center space-x-2 text-lg font-semibold">
            <span>{project.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </h2>
          <p className="text-gray-500">{project.description}</p>
        </a>
      ));
    }

    return projects.slice(0, 5).map((project) => (
      <a
        href={project.url}
        key={project.url}
        className="group block text-black dark:text-white"
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="flex flex-row items-center space-x-2 text-lg font-semibold">
          <span>{project.title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </h2>
        <p className="text-gray-500">{project.description}</p>
      </a>
    ));
  };

  const showAllProjectsButtonNode = () => {
    if (showAll) {
      return null;
    }

    return (
      <button
        type="button"
        className="rounded bg-black py-2 text-sm text-black no-underline dark:bg-black dark:text-white"
        onClick={() => setShowAll(true)}
      >
        Show all projects
      </button>
    );
  };

  return (
    <div className="space-y-4">
      <h2 className="text-md font-semibold text-black dark:text-white">
        Projects
      </h2>
      <div className="space-y-8">
        {projectsListNode()}
        {showAllProjectsButtonNode()}
      </div>
    </div>
  );
};

export default Projects;
