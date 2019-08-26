import lang from "../services/lang";

export default [
  {
    img: "/assets/images/mya-logo.jpg",
    title: "Mya Collection",
    text: [
      {
        text: lang("ProjectStatusCompleted"),
        icon: "fas fa-info-circle"
      },
      {
        text: `${lang("ProjectBuildWith")} Shopify`,
        icon: "fas fa-tools"
      },
      {
        text: `${lang("ProjectExtras")} Google Analytics, Social Media`,
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
    img: "/assets/images/sloane-logo.jpg",
    title: "Sloane Boutique",
    text: [
      {
        text: `${lang("ProjectBuildWith")} Magento`,
        icon: "fas fa-tools"
      },
      {
        text: `${lang("ProjectExtras")} Google Analytics, Social Media`,
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
    img: "/assets/images/atlantis-logo.jpg",
    title: "Atlantis Shine",
    text: [
      {
        text: lang("ProjectStatusCompleted"),
        icon: "fas fa-info-circle"
      },
      {
        text: `${lang("ProjectBuildWith")} WordPress`,
        icon: "fas fa-tools"
      },
      {
        text: `${lang("ProjectExtras")} Google Analytics, Social Media`,
        icon: "fas fa-list-ol"
      }
    ],
    live: "https://atlantis-shine.gr/",
    condition: ["github", "codesandbox"]
  },
  {
    img: "/assets/images/yolo-logo.jpg",
    title: "Yolo Fashions",
    text: [
      {
        text: lang("ProjectStatusInProgress"),
        icon: "fas fa-info-circle"
      },
      {
        text: `${lang("ProjectBuildWith")} WordPress & WooCommerce`,
        icon: "fas fa-tools"
      },
      {
        text: `${lang("ProjectExtras")} Google Analytics, Social Media`,
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
    img: "/assets/images/burger-logo.jpg",
    title: "Burger Builder",
    text: [
      {
        text: lang("ProjectStatusCompleted"),
        icon: "fas fa-info-circle"
      },
      {
        text: `${lang("ProjectBuildWith")} ReactJS & Redux`,
        icon: "fas fa-tools"
      },
      {
        text: `${lang("ProjectExtras")} Google Firebase`,
        icon: "fas fa-list-ol"
      }
    ],
    live: "https://cool-burger-builder.firebaseapp.com/",
    github: "https://github.com/panoscool/burger-builder",
    codesandbox: "https://codesandbox.io/s/github/panoscool/burger-builder",
    condition: []
  }
];
