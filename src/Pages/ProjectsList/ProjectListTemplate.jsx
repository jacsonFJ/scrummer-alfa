import { Header } from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Paginator from "../../Components/Paginator";
import ProjectCard from "../../Components/ProjectCard";
import { ProjectCardList, ProjectCardMargin } from "./styles";

export default function ProjectsListTemplate(props) {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <ProjectCardList>
        {props.projects.map(project => (
          <ProjectCardMargin key={project.id}>
            <ProjectCard project={project} />
          </ProjectCardMargin>
        ))}
      </ProjectCardList>
      {props.pagination.current_page && (
        <Paginator {...props} />
      )}
    </>
  );
}
