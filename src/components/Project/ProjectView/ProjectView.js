import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProject } from "../../../api/fetchCalls";

const ProjectView = () => {
  const { id } = useParams();
  const project = useProject(id);
  console.log(project);
  return (
    <div>
      <p>Hello</p>
      <p>THis is projects</p>
    </div>
  );
};

const useProject = (id) => {
  const [project, setProject] = useState(null);
  useEffect(() => {
    const fetchProjectAPI = async () => {
      await fetchProject(id).then((response) => {
        console.log(response);
        setProject(response);
      });
    };
    fetchProjectAPI();
  }, [id]);
  return project;
};

export default ProjectView;
