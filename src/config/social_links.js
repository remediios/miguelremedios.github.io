import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdPaper } from "react-icons/io";

export const social_links = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/miguelremediioss/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/MiguelRemedios",
  },
  {
    id: 3,
    child: (
      <>
        Email <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:miguelremediioss@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        CV <IoMdPaper size={30} />
      </>
    ),
    href: "/resume.pdf",
    style: "rounded-br-md",
    download: true,
  },
];

export default social_links;
