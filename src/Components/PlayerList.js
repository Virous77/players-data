import React from "react";
import classes from "./PlayerList.module.css";

const PlayerList = ({ id, name, team, iplTeam, about }) => {
  return (
    <li key={id} className={classes["player-list"]}>
      <div className={classes.info}>
        <div>
          <span>NAME:- </span> {name}
        </div>
        <div>
          {" "}
          <span>NATIONAL TEAM:-</span> {team}
        </div>
        <div>
          <span>IPL TEAM:-</span> {iplTeam}
        </div>
      </div>
      <div className={classes.about}>
        <div className={classes.title}>ABOUT</div>
        {about}
      </div>
    </li>
  );
};

export default PlayerList;
