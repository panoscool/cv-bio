import React from "react";
import ProjectCard from "../components/ProjectCard";
import lang from "../services/lang";
import AtlantisLogo from "../assets/images/atlantis-logo.jpg";
import BurgerLogo from "../assets/images/burger-logo.jpg";
import MyaLogo from "../assets/images/mya-logo.jpg";
import YoloLogo from "../assets/images/yolo-logo.jpg";

const FullWidthGrid = props => {
  return (
    <div className="projects-card">
      <ProjectCard
        img={AtlantisLogo}
        title={"Atlantis Shine"}
        text={lang("ProjectsPageAtlantisText")}
        live={"https://atlantis-shine.gr/"}
        condition={["github", "codesandbox"]}
      />
      <ProjectCard
        img={MyaLogo}
        title={"Mya Collection"}
        text={lang("ProjectsPageMyaText")}
        live={"https://myacollection.com.gr/"}
        condition={["github", "codesandbox"]}
      />
      <ProjectCard
        img={YoloLogo}
        title={"Yolo Fashions"}
        text={lang("ProjectsPageYoloText")}
        live={"http://yolofashions.com"}
        condition={["github", "codesandbox"]}
      />
      <ProjectCard
        img={BurgerLogo}
        title={"Burger Builder"}
        text={lang("ProjectsPageBurgerText")}
        live={"https://cool-burger-builder.firebaseapp.com/"}
        github={"https://github.com/panoscool/burger-builder"}
        codesandbox={"https://codesandbox.io/s/github/panoscool/burger-builder"}
        condition={[]}
      />
    </div>
  );
};

export default FullWidthGrid;
