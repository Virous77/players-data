import React from "react";
import classes from "./Player.module.css";
import PlayerList from "./PlayerList";

const Player = ({ players }) => {
  return (
    <section className={classes.section}>
      <ul>
        {players.map((player) => (
          <PlayerList
            key={player.id}
            name={player.name}
            team={player.team}
            iplTeam={player.iplTeam}
            about={player.about}
          />
        ))}
      </ul>
    </section>
  );
};

export default Player;
