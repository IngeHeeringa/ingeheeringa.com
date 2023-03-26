import Angular from "../../assets/icons/angular.png";
import ExpressJs from "../../assets/icons/express.png";
import Jest from "../../assets/icons/jest.png";
import JWT from "../../assets/icons/jwt.png";
import MongoDB from "../../assets/icons/mongodb.png";
import NodeJs from "../../assets/icons/nodejs.png";
import React from "../../assets/icons/react.png";
import Sass from "../../assets/icons/sass.png";
import StyledComponents from "../../assets/icons/styledcomponents.png";
import TypeScript from "../../assets/icons/ts.png";
import peer2peerLogo from "../../assets/projects/peer2peer-logo.svg";
import wiztagramLogo from "../../assets/projects/wiztagram-logo.svg";
import type { Project } from "./types";

export const peer2peer: Project = {
  title: "peer2peer",
  image: peer2peerLogo,
  imageClass: "peer2peer-logo",
  description:
    "Peer2peer is a full-stack single page application that provides a platform for collaboration among programmers. It features secure user authentication using JWT to protect users' data and privacy. The platform's key feature is its ability to allow users to create posts requesting pair programming by listing their project's details and their level of experience.",
  stack: [Angular, TypeScript, Sass, Jest, JWT, ExpressJs, MongoDB, NodeJs],
  repo: "https://github.com/IngeHeeringa/peer2peer-front",
  prod: "https://peer2peer.vercel.app/",
};

export const wiztagram: Project = {
  title: "Wiztagram",
  image: wiztagramLogo,
  imageClass: "wiztagram-logo",
  description:
    "Wiztagram is a magic-themed image visualizer, built with React and the Redux pattern. It utilizes the Unsplash API to search and filter through keyword queries, delivering enchanting visual results. This front-end SPA offers a user-friendly interface, allowing users to bring the magic of the mystical world to life through the power of technology.",
  stack: [React, TypeScript, StyledComponents, Jest],
  repo: "https://github.com/IngeHeeringa/wiztagram",
  prod: "https://wiztagram.vercel.app/",
};

export const projects: Project[] = [peer2peer, wiztagram];
