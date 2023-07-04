import { ActionType } from "@/components/Project";

export const ProjectData = [
  {
    title: "Prushoppe",
    role: "Full Stack Developer and Technical Lead managing a team of five developers",
    desc: "An insurance purchasing platform for Prudential Laos Life Assurance. Project involves interfaces and control system for admin, user, staff and partner. User can purchase insurance product in the platform and making payment with BCEL One Pay. <br/> Project involves lead management system, request monitoring system, POS system ,etc.",
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
    role: "only Full-time react native blockchain developer",
    desc: "A Singapore based blockchain startup company. Build a crypto app using React Native that is enable to create wallet, send and receive crypto, wallet connect with DAPP app, notifications and so on.",
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
    title: "Sale Succeed",
    role: "Working interactively with another Full-stack developer",
    desc: "A Commission-based Sales Platform that help to connect businesses with commission-based sales experts globally. The platform offers businesses access to top commission-based sales talent, allowing them to eliminate the need to hire, train and retain a full-time sales force.  It also offers independent sales agents access to rewarding sales opportunities and curated commission-based sales opportunities across industries and geographies, giving them full control over the projects they choose based on their expertise and interest.",
    tech_use: ["NextJS", "Laravel", "NodeJS", "Socket.IO", "MySql", "MaterialUI"],
    img_gp: [
      {
        url: "/img/projects/salesucceed/home.jpg",
        img_desc: "Landing Page",
      },
      {
        url: "/img/projects/salesucceed/sales_dashboard.jpg",
        img_desc: "Sales' Dashboard",
      },
      {
        url: "/img/projects/salesucceed/sales_profile.jpg",
        img_desc: "Sales Profile",
      },
      {
        url: "/img/projects/salesucceed/sale_update_profile.jpg",
        img_desc: "Sales update profile",
      },
      {
        url: "/img/projects/salesucceed/browse_project.jpg",
        img_desc: "Sales browse for project",
      },
    ],
    actions: [
      {
        url: "https://salesucceed.com/",
        action: ActionType.TRY_DEMO,
      },
    ],
  },
  {
    title: "ClearChannel Ads Panel",
    role: "Solo Developer",
    desc: "Small interactive games develop for ads company, ClearChannel in Singapore as advertisement on their panels. Direct communication with project manager in discussing requirements. Mainly use the Javascript, HTML/SASS, Canvas, GSAP (animation), and laravel for backend.",
    tech_use: ["ReactJS", "HTML Canvas", "GSAP", "Laravel"],
    img_gp: [
      {
        url: "/img/projects/cc/giftcatch.mp4",
        is_video: true,
        img_desc: "Catching Gift on Panel",
      },
      {
        url: "/img/projects/cc/bagel.mp4",
        is_video: true,
        img_desc: "Moving Bagel",
      },
      {
        url: "/img/projects/cc/dengue.mp4",
        is_video: true,
        img_desc: "Memory Game",
      },
      {
        url: "/img/projects/cc/wallysally.mp4",
        is_video: true,
        img_desc: "Photobooth with Wall & Sally",
      },
    ],
    actions: [
      {
        url: "https://demopage.sg/",
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
      path: "img/tools/frontend/vue.png",
      name: "Vue",
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
