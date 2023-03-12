/* 
  Data object created in anticipation of this being a JSON object from an
  API call. Used with CardBody for multiple jsx component render.
*/
import folderIMG from "./white_folder.png";
import github from "./github.png";
import stackblitz from "./stackblitz.png";

export const projects = [
  {
    id: 0,
    cardSrc: folderIMG,
    cardAlt: "",
    cardTitle: "HttpOnly",
    description:
      "Ongoing project template with React & Express using HTTP Only Cookie",
    buttonHref: "https://stackblitz.com/github/hickamt/HTTP_Only_App_Template",
    buttonSrc: stackblitz,
    buttonAlt: "button image with stack blitz logo",
  },
  {
    id: 1,
    cardSrc: folderIMG,
    cardAlt: "",
    cardTitle: "PSU Shell",
    description:
      "Custom shell exhibiting redirects, piping, and other standard exec() commands",
    buttonHref: "https://github.com/hickamt/PSU-Shell",
    buttonSrc: github,
    buttonAlt: "button image of github link",
  },
  {
    id: 2,
    cardSrc: folderIMG,
    cardTitle: "Pthreads",
    cardAlt: "",
    description:
      "Find all primes to one-billion using multi-thread processing and mutex locks",
    buttonHref: "https://github.com/hickamt",
    buttonSrc: github,
    buttonAlt: "button image of github link",
  },
];
