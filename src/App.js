import React, { useState } from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";

function App() {
  const characters = [
    "blanka",
    "chun-li",
    "dhalsim",
    "guile",
    "honda",
    "ken",
    "ryu",
    "zangief",
  ];

  const [currentPlayer, setcurrentPlayer] = useState(1);
  const [playerOneSelected, setplayerOneSelected] = useState(null);
  const [playerTwoSelected, setplayerTwoSelected] = useState(null);

  var playerSelected = (name) => {
    if (currentPlayer == 1) {
      setcurrentPlayer(2);
      setplayerOneSelected(name);
    } else if (currentPlayer == 2) {
      setcurrentPlayer(null);
      setplayerTwoSelected(name);
    }
  };

  var playerOne;
  if (playerOneSelected) {
    playerOne = <Player name={playerOneSelected} player={1} />;
  }

  var playerTwo;
  if (playerTwoSelected) {
    playerTwo = <Player name={playerTwoSelected} player={2} />;
  }

  const playerPictos = characters.map((character) => (
    <PlayerPicto
      playerOneSelectedParent={playerSelected}
      name={character}
      currentPlayer={currentPlayer}
    />
  ));

  return (
    <Container
      style={{ display: "flex", justifyContent: "center" }}
      className="h-100 w-100"
    >
      <Row className="w-100">
        <Col xs="4" className="d-flex flex-column justify-content-center">
          {playerOne}
        </Col>
        <Col
          xs="4"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          className="justify-content-center"
        >
          <img
            style={{ width: "100%", paddingBottom: "50px" }}
            src="./images/player-select.jpg"
          />

          <Row
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "row",
            }}
            className="w-100"
          >
            {playerPictos}
          </Row>
        </Col>
        <Col xs="4" className="d-flex flex-column justify-content-center">
          {playerTwo}
        </Col>
      </Row>
    </Container>
  );
}

function PlayerPicto(props) {
  const [selected, setselected] = useState(null);

  const handleClick = () => {
    if (props.currentPlayer) {
      props.playerOneSelectedParent(props.name);
      setselected(props.currentPlayer);
    }
  };

  return (
    <Col
      xs="3"
      style={{ position: "relative" }}
      className="p-0"
      onClick={handleClick}
    >
      <img
        style={{ width: "100%", position: "absolute", top: "-9%" }}
        src={selected ? `./images/${selected}p-select.png` : null}
      />
      <img
        style={{ width: "100%" }}
        src={`./images/players/tiny/${props.name}.jpg`}
      />
    </Col>
  );
}

function Player(props) {
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <img style={{ width: "40%" }} src={`./images/${props.player}p.jpg`} />
      <img
        style={{ width: "100%" }}
        src={`./images/players/large/${props.name}.jpg`}
      />
    </div>
  );
}

export default App;
