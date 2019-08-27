import lang from "../services/lang";

export default [
  {
    title: lang("AboutPageExperience"),
    subtitle: "some title",
    year: "2017 - 2019",
    description: "some description"
  },
  {
    title: lang("AboutPageEducation"),
    subtitle: "some title",
    year: "2017 - 2019",
    description: "some description"
  },
  {
    title: lang("AboutPageCertificates"),
    subtitle: "some title",
    year: "2017 - 2019",
    description: "some description"
  },
  {
    title: lang("AboutPageCertificates"),
    showProgress: true,
    skills: [
      { label: "React", progress: 85 },
      { label: "HTML/CSS", progress: 65 },
      { label: "Material-UI", progress: 55 },
      { label: "Bootstrap", progress: 60 },
      { label: "JavaScript", progress: 45 },
      { label: "Git", progress: 50 }
    ]
  }
];
