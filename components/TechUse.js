import React from "react";
import styles from "./TechUse.module.scss";
import { TechUseData } from "@/data/project.data";

let TechBranch = {
  front_end: "Front End",
  backend: "Backend",
  devops: "devops",
  language: "languages",
  tools: "tools",
};
const TechUse = () => {
  return (
    <div className={styles.tech_use}>
      <div className={`center sub-title`}>Technologies I've Worked With</div>
      <div className={styles.tool_wrap}>
        {Object.keys(TechUseData).map((key, i) => (
          <div key={i} className={styles.tool_box}>
            <div className={styles.tool_title}>{TechBranch[key]}</div>
            <div className={styles.tool}>{RenderBox(TechUseData[key])}</div>
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
