import { Header } from "../../../Components/Header";
import Navbar from "../../../Components/Navbar";
import Paginator from "../../../Components/Paginator";
import ProjectCard from "../../../Components/ProjectCard";
import { ProjectCardList, ProjectCardMargin } from "./styles";

export default function ProjectsList() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <ProjectCardList>
        <ProjectCardMargin>
          <ProjectCard />
        </ProjectCardMargin>
        <ProjectCardMargin>
          <ProjectCard />
        </ProjectCardMargin>
        <ProjectCardMargin>
          <ProjectCard />
        </ProjectCardMargin>
        <ProjectCardMargin>
          <ProjectCard />
        </ProjectCardMargin>
      </ProjectCardList>
      <Paginator />
    </>
  );
}
