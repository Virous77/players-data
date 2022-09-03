import React, { useState } from "react";
import "./App.css";
import Player from "./Components/Player";
import AddPlayers from "./Components/AddPlayers";

function App() {
  const [player, setPlayer] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const getPlayersData = async () => {
    setIsFetching(true);
    try {
      const res = await fetch(
        "https://players-b274b-default-rtdb.asia-southeast1.firebasedatabase.app/players.json"
      );
      const data = await res.json();

      const playersData = [];
      for (const loop in data) {
        playersData.push({
          id: loop,
          name: data[loop].name,
          team: data[loop].team,
          iplTeam: data[loop].iplTeam,
          about: data[loop].about,
        });
      }

      setPlayer(playersData);
    } catch (error) {}

    setIsFetching(false);
  };

  const playersDataHandler = async (playerr) => {
    // const players = { ...playerr, id: new Date().getSeconds().toString() };
    // const newPlayers = [...player, players];
    // setPlayer(newPlayers);
    const res = await fetch(
      "https://players-b274b-default-rtdb.asia-southeast1.firebasedatabase.app/players.json",
      {
        method: "POST",
        body: JSON.stringify(playerr),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
  };

  return (
    <section className="App">
      <h1>Add & Fetch Players Data</h1>
      <AddPlayers onAddPlayers={playersDataHandler} />
      <section className="section">
        <button onClick={getPlayersData}>Get Players</button>
      </section>

      <section className="data">
        {isFetching && <p>Fetching wait...</p>}
      </section>
      <Player players={player} />
    </section>
  );
}

export default App;
