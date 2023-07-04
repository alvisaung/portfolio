import React, { FC, useState } from "react";
import styles from "./Project.module.scss";
import "keen-slider/keen-slider.min.css";

import ImageCarousel from "./ImageCarousel";

export interface Img {
  url: string;
  img_desc: string;
  is_video?: boolean;
}
export enum ActionType {
  TRY_DEMO = "Try demo",
  VIEW_CODE = "view code",
}

interface ProjectAction {
  url: string;
  action: ActionType;
}

interface Project {
  title: string;
  desc: string;
  role: string;
  tech_use: string[];
  img_gp: Img[];
  actions: ProjectAction[];
}

interface ProjectProps {
  project: Project;
}

const Project: FC<ProjectProps> = (props) => {
  const renderEmoji = (action: ActionType) => {
    let img = "";
    if (action == ActionType.TRY_DEMO) {
      img = "/img/link.png";
    } else if (action == ActionType.VIEW_CODE) {
      img = "/img/github.png";
    }
    return img;
  };
  const { title, desc, tech_use, img_gp, actions, role } = props.project;

  return (
    <div className={styles.project}>
      <div className={styles.title}>{title}</div>
      <ImageCarousel img_gp={img_gp} />
      <div className={styles.project_content}>
        <div className={styles.project_desc}>{FormatTxt({ type: FormatType.LineBreak, txt: desc })}</div>
        <div className={`${styles.project_desc} ${styles.project_tech}`}>
          Role: <span className={styles.project_sub_desc}>{role}</span>
        </div>
        <div className={`${styles.project_desc} ${styles.project_tech}`}>
          Technologies: <span className={styles.project_sub_desc}> {FormatTxt({ type: FormatType.Comma, txt: tech_use })}</span>
        </div>
        {actions.map((action) => (
          <button onClick={() => window.open(action.url, "_blank")} key={action.url} className="button project-action-btn">
            {action.action}
            <img className={"icon"} src={renderEmoji(action.action)} alt={action.action} />
          </button>
        ))}
      </div>
    </div>
  );
};

enum FormatType {
  Comma = "comma",
  LineBreak = "line-break",
}
interface FormatInt {
  type: FormatType;
  txt: string | string[];
}

const FormatTxt = (formatInt: FormatInt): JSX.Element => {
  let formatted: string | JSX.Element[] = "";

  switch (formatInt.type) {
    case FormatType.Comma:
      formatted = Array.isArray(formatInt.txt) ? formatInt.txt.join(", ") : "";
      break;
    case FormatType.LineBreak:
      formatted = !Array.isArray(formatInt.txt)
        ? formatInt.txt.split("<br/>").map((line, idx) => {
            return (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            );
          })
        : "";
      break;
    default:
      formatted = "";
      break;
  }

  return <>{formatted}</>;
};
export default Project;
