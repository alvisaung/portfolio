import React from "react";
import styles from "./TechUse.module.scss";

let TechBranch = {
  front_end: "Front End",
  backend: "Backend",
  devops: "devops",
  language: "languages",
  tools: "tools",
};
const TechUse = () => {
  const tech = {
    front_end: [
      {
        path: "img/tools/frontend/react.png",
        name: "React",
      },
      {
        path: "img/tools/frontend/redux.png",
        name: "Redux",
      },
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
  return (
    <div className={styles.tech_use}>
      <div className={`center sub-title`}>Technologies I've Worked With</div>
      <div className={styles.tool_wrap}>
        {Object.keys(tech).map((key, i) => (
          <div key={i} className={styles.tool_box}>
            <div className={styles.tool_title}>{TechBranch[key]}</div>
            <div className={styles.tool}>{RenderBox(tech[key])}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
const RenderBox = (tool) => {
  return (
    <div className={styles.box}>
      {tool.map((t) => (
        <img key={t.path} src={t.path} alt={t.name} className={styles.tool_img} />
      ))}
    </div>
  );
};

export default TechUse;
