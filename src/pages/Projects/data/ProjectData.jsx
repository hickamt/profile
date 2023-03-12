import folderIMG from "./white_folder.png";
import github from "./github.png";
import stackblitz from "./stackblitz.png";

export const projects = [
  {
    id: 0,
    cardSrc: folderIMG,
    cardAlt: "",
    title: "HttpOnly",
    description:
      "Ongoing project template with ReactJS & ExpressJS using HTTP Only Cookie",
    href: "https://stackblitz.com/github/hickamt/HTTP_Only_App_Template",
    buttonSrc: stackblitz,
    buttonAlt: "",
  },
  {
    id: 1,
    cardSrc: folderIMG,
    cardAlt: "",
    title: "PSU Shell",
    description:
      "Custom shell exhibiting redirects, piping, and other standard exec() commands",
    href: "https://stackblitz.com/github/hickamt/HTTP_Only_App_Template",
    buttonSrc: github,
    buttonAlt: "",
  },
  {
    id: 2,
    cardSrc: folderIMG,
    title: "Pthreads",
    cardAlt: "",
    description:
      "Find all primes to one-billion using multi-thread processing and mutex locks",
    href: "https://stackblitz.com/github/hickamt/HTTP_Only_App_Template",
    buttonSrc: github,
    buttonAlt: "",
  },
];
