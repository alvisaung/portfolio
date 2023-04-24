import { ActionType } from "@/components/Project";

export const ProjectData = [
  {
    title: "Prushoppe",
    desc: "Work as a contract full-stack developer in developing an issuance purchasing platform for Prudential Laos Life Assurance. Acting as a role of technical lead plus full-stack developer, assigning tasks to coworkers and direct communicate with client for requirements and feedback. Project involves interfaces and control system for admin, user, staff and partner.",
    tech_use: ["React", "NextJS", "MaterialUI", "Laravel", "MySql"],
    img_gp: [
      {
        url: "/img/projects/prudential/home.jpg",
        img_desc: "Home page of user interface",
      },
      {
        url: "/img/projects/prudential/detail.jpg",
        img_desc: "Product Detail",
      },
      {
        url: "/img/projects/prudential/cart.jpg",
        img_desc: "Product Cart",
      },
      {
        url: "/img/projects/prudential/customer_portal.jpg",
        img_desc: "Customer Portal",
      },
      {
        url: "/img/projects/prudential/claim_submit.jpg",
        img_desc: "Claim Submit",
      },
    ],
    actions: [
      {
        url: "https://shop.prudential.la/",
        action: ActionType.TRY_DEMO,
      },
    ],
  },
  {
    title: "PayBolt",
    desc: "Working as a full-time react native blockchain developer in PayBolt, a Singapore based blockchain startup company. <br/> Build a crypto app using React Native that is enable to create wallet, send and receive crypto, wallet connect with DAPP app, notifications and so on.",
    tech_use: ["React Native", "Redux", "Web3", "Ethers.js", "Cyptocurrency"],
    img_gp: [
      {
        url: "/img/projects/paybolt/1.jpg",
        img_desc: "This is img 1",
      },
      {
        url: "/img/projects/paybolt/2.jpg",
        img_desc: "This is img 2",
      },
      {
        url: "/img/projects/paybolt/3.jpg",
        img_desc: "This is img 2",
      },
    ],
    actions: [
      {
        url: "https://play.google.com/store/apps/details?id=com.fincrypt.paybolt",
        action: ActionType.TRY_DEMO,
      },
    ],
  },
  {
    title: "SaleSucceed",
    desc: "A Commission-based Sales Platform with Lead and Invoice management. ",
    tech_use: ["NextJS", "ContextAPI", "Laravel", "MySql"],
    img_gp: [
      {
        url: "/img/projects/salesucceed/home.jpg",
        img_desc: "Landing Page",
      },
    ],
    actions: [
      {
        url: "https://salesucceed.com/",
        action: ActionType.TRY_DEMO,
      },
    ],
  },
];

export const TechUseData = {
  front_end: [
    {
      path: "img/tools/frontend/react.png",
      name: "React",
    },
    {
      path: "img/tools/frontend/redux.png",
      name: "Redux",
    },
    { path: "img/tools/frontend/material_ui.png", name: "Material UI" },
  ],
  backend: [
    {
      path: "img/tools/backend/node.png",
      name: "Node JS",
    },
    {
      path: "img/tools/backend/socket.png",
      name: "Socket JS",
    },
    {
      path: "img/tools/backend/laravel.png",
      name: "Laravel",
    },
  ],
  devops: [
    {
      path: "img/tools/devops/githublogo.png",
      name: "Github",
    },
    {
      path: "img/tools/devops/gitlogo.png",
      name: "Git",
    },
    {
      path: "img/tools/devops/npm.png",
      name: "NPM",
    },
    {
      path: "img/tools/devops/webpack.png",
      name: "Webpack",
    },
  ],
  language: [
    {
      path: "img/tools/language/js.png",
      name: "Javascript",
    },
    {
      path: "img/tools/language/php.png",
      name: "PHP",
    },
  ],
  tools: [
    {
      path: "img/tools/tools/postman.png",
      name: "Postman",
    },
  ],
};
