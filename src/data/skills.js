import uuid from 'uuid';

export default [
  {
    id: uuid.v4(),
    img: "/assets/images/code-icon.jpg",
    icon: "fas fa-globe",
    title: "WorkPageWebTitle",
    list: "WorkPageWebList"
  },
  {
    id: uuid.v4(),
    img: "/assets/images/service-icon.jpg",
    icon: "fas fa-laptop",
    title: "WorkPageLaptopTitle",
    list: "WorkPageLaptopRepair"
  },
  {
    id: uuid.v4(),
    img: "/assets/images/update-icon.jpg",
    icon: "fas fa-mobile",
    title: "WorkPageMobileTitle",
    list: "WorkPageMobileRepair"
  },
  {
    id: uuid.v4(),
    img: "/assets/images/learn-icon.jpg",
    icon: "fas fa-book",
    title: "WorkPageLearningTitle",
    list: "WorkPageLearningList"
  }
];
