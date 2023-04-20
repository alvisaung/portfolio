import React, { FC, useState } from "react";
import styles from "./Project.module.css";
import "keen-slider/keen-slider.min.css";

import ImageCarousel from "./ImageCarousel";

export interface Img {
  url: string;
  img_desc: string;
}
export enum ActionType {
  TRY_DEMO = "Try demo",
  VIEW_CODE = "view code",
}

interface ProjectAction {
  url: string;
  action: ActionType;
}

interface ProjectProps {
  title: string;
  desc: string;
  tech_use: string[];
  img_gp: Img[];
  actions: ProjectAction[];
}

const Project: FC<ProjectProps> = ({ title, desc, tech_use, img_gp, actions }) => {
  const renderEmoji = (action: ActionType) => {
    let img = "";
    if (action == ActionType.TRY_DEMO) {
      img = "/img/link.png";
    } else if (action == ActionType.VIEW_CODE) {
      img = "/img/github.png";
    }
    return img;
  };
  return (
    <div className={styles.project}>
      <div className={styles.title}>{title}</div>
      <ImageCarousel img_gp={img_gp} />
      <div className={styles.project_desc}>{FormatTxt({ type: FormatType.LineBreak, txt: desc })}</div>
      <div className={`${styles.project_desc} ${styles.project_tech}`}>
        Technologies:<span className={styles.project_sub_desc}> {FormatTxt({ type: FormatType.Comma, txt: tech_use })}</span>
      </div>
      <div className={`${styles.project_desc} ${styles.project_tech}`}>
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

  return <span>{formatted}</span>;
};
export default Project;
