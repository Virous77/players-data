import React, { useRef, useState } from "react";
import classes from "./AddPlayer.module.css";

const AddPlayers = (props) => {
  const nameRef = useRef("");
  const teamRef = useRef("");
  const iplRef = useRef("");
  const aboutRef = useRef("");
  const [isVaild, setIsVaild] = useState(false);

  const playerSubmitHandler = (e) => {
    e.preventDefault();

    if (
      nameRef.current.value.length === 0 ||
      teamRef.current.value.length === 0 ||
      aboutRef.current.value.length < 11
    ) {
      setIsVaild(true);
      return;
    } else {
      setIsVaild(false);
    }

    const player = {
      name: nameRef.current.value,
      team: teamRef.current.value,
      iplTeam: iplRef.current.value,
      about: aboutRef.current.value,
    };
    props.onAddPlayers(player);
    e.target.reset();
  };

  return (
    <main className={classes.main}>
      <form className={classes.form} onSubmit={playerSubmitHandler}>
        <div className={classes.forms}>
          <input
            type="text"
            placeholder="Player Name"
            ref={nameRef}
            className={isVaild ? classes.vaild : ""}
          />
          <input
            type="text"
            placeholder="National Team"
            ref={teamRef}
            className={isVaild ? classes.vaild : ""}
          />
          <input
            type="text"
            placeholder="IPL Team"
            ref={iplRef}
            className={isVaild ? classes.vaild : ""}
          />
        </div>
        <div className={classes["add-player"]}>
          <textarea
            rows="5"
            placeholder="About"
            ref={aboutRef}
            className={isVaild ? classes.vaild : ""}
          ></textarea>
          <button type="submit">Add Players</button>
        </div>
      </form>
    </main>
  );
};

export default AddPlayers;
