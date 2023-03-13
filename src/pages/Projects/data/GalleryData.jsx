/* 
  Data object created in anticipation of this being a JSON object from an
  API call. Used with CardBody for multiple jsx component render.
*/
import folderIMG from "./white_folder.png";
import github from "./github.png";
import stackblitz from "./stackblitz.png";

export const galleries = [
  {
    id: 0,
    galleryImgSrc: folderIMG,
    galleryImgTitle: "Italy",
    subGallery: [
      {
        // use key: map.(object, index) when mapping
        cardImgSrc: [],
        cardImgAlt: [],
      },
    ],
  },
  {
    id: 0,
    galleryImgSrc: folderIMG,
    galleryImgTitle: "Germany",
    subGallery: [
      {
        // use key: map.(object, index) when mapping
        cardImgSrc: [],
        cardImgAlt: [],
      },
    ],
  },
  {
    id: 0,
    galleryImgSrc: folderIMG,
    galleryImgTitle: "Ford-TBird",
    subGallery: [
      {
        // use key: map.(object, index) when mapping
        cardImgSrc: [],
        cardImgAlt: [],
      },
    ],
  },
];
