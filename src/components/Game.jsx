import React from "react";
import PropTypes from "prop-types";

function Game(props) {
  return (
    <React.Fragment>
      <h3>Game: {props.gameName}</h3>
      <h4>Winner: {props.gameWinner}</h4>
      <p>Players: {props.gamePlayers}</p>
      <hr />
    </React.Fragment>
  );
}

Game.propTypes = {
  gameName: PropTypes.string,
  gamePlayers: PropTypes.string,
  gameWinner: PropTypes.string,
};

export default Game;
