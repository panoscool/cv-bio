import lang from "../services/lang";

const projects = [
  {
    img: "/assets/images/mya-logo.jpg",
    title: "Mya Collection",
    text: lang("ProjectsPageMyaText"),
    live: "https://myacollection.com/",
    condition: ["github", "codesandbox"]
  },
  {
    img: "/assets/images/mya-logo.jpg",
    title: "Sloane Boutique",
    text: lang("ProjectsPageSloaneText"),
    live: "https://sloaneboutique.gr/",
    condition: ["github", "codesandbox"]
  },
  {
    img: "/assets/images/atlantis-logo.jpg",
    title: "Atlantis Shine",
    text: lang("ProjectsPageAtlantisText"),
    live: "https://atlantis-shine.gr/",
    condition: ["github", "codesandbox"]
  },
  {
    img: "/assets/images/yolo-logo.jpg",
    title: "Yolo Fashions",
    text: lang("ProjectsPageYoloText"),
    live: "http://yolofashions.com",
    condition: ["github", "codesandbox"]
  },
  {
    img: "/assets/images/burger-logo.jpg",
    title: "Burger Builder",
    text: lang("ProjectsPageBurgerText"),
    live: "https://cool-burger-builder.firebaseapp.com/",
    github: "https://github.com/panoscool/burger-builder",
    codesandbox: "https://codesandbox.io/s/github/panoscool/burger-builder",
    condition: []
  }
];

export default projects;
