import uuid from 'uuid';

export default [
  {
    id: uuid.v4(),
    img: "/assets/images/mya-logo.jpg",
    title: "Mya Collection",
    infos: [
      {
        text: "Completed",
        icon: "fas fa-info-circle"
      },
      {
        text: "Shopify",
        icon: "fas fa-tools"
      },
      {
        text: "Google Analytics, Social Media",
        icon: "fas fa-list-ol"
      },
      {
        text: "Digital Marketing: Facebook, Instagram",
        icon: "fas fa-bullhorn"
      }
    ],
    live: "https://myacollection.com/",
    condition: ["github", "codesandbox"]
  },
  {
    id: uuid.v4(),
    img: "/assets/images/sloane-logo.jpg",
    title: "Sloane Boutique",
    infos: [
      {
        text: "Magento",
        icon: "fas fa-tools"
      },
      {
        text: "Google Analytics, Social Media",
        icon: "fas fa-list-ol"
      },
      {
        text: "Digital Marketing: Facebook, Instagram",
        icon: "fas fa-bullhorn"
      }
    ],
    live: "https://sloaneboutique.gr/",
    condition: ["github", "codesandbox"]
  },
  {
    id: uuid.v4(),
    img: "/assets/images/ozar-logo.jpg",
    title: "Ozar",
    infos: [
      {
        text: "WordPress / WooCommerce",
        icon: "fas fa-tools"
      },
      {
        text: "Google Analytics, Social Media",
        icon: "fas fa-list-ol"
      },
      {
        text: "Digital Marketing: Facebook, Instagram",
        icon: "fas fa-bullhorn"
      }
    ],
    live: "https://ozarjewells.com/",
    condition: ["github", "codesandbox"]
  },
  {
    id: uuid.v4(),
    img: "/assets/images/atlantis-logo.jpg",
    title: "Atlantis Shine",
    infos: [
      {
        text: "Completed",
        icon: "fas fa-info-circle"
      },
      {
        text: "WordPress",
        icon: "fas fa-tools"
      },
      {
        text: "Google Analytics, Social Media",
        icon: "fas fa-list-ol"
      }
    ],
    live: "https://atlantis-shine.gr/",
    condition: ["github", "codesandbox"]
  },
  {
    id: uuid.v4(),
    img: "/assets/images/yolo-logo.jpg",
    title: "Yolo Fashions",
    infos: [
      {
        text: "In progress",
        icon: "fas fa-info-circle"
      },
      {
        text: "WordPress / WooCommerce",
        icon: "fas fa-tools"
      },
      {
        text: "Google Analytics, Social Media",
        icon: "fas fa-list-ol"
      },
      {
        text: "Digital Marketing: Facebook, Instagram",
        icon: "fas fa-bullhorn"
      }
    ],
    live: "http://yolofashions.com",
    condition: ["github", "codesandbox"]
  },
  {
    id: uuid.v4(),
    img: "/assets/images/burger-logo.jpg",
    title: "Burger Builder",
    infos: [
      {
        text: "Completed",
        icon: "fas fa-info-circle"
      },
      {
        text: "ReactJS & Redux",
        icon: "fas fa-tools"
      },
      {
        text: "Google Firebase",
        icon: "fas fa-list-ol"
      }
    ],
    live: "https://cool-burger-builder.firebaseapp.com/",
    github: "https://github.com/panoscool/burger-builder",
    codesandbox: "https://codesandbox.io/s/github/panoscool/burger-builder",
    condition: []
  }
];
