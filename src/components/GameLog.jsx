import React from "react";
import Game from "./Game";
import PropTypes from "prop-types";

function GameLog(props) {
  return (
    <React.Fragment>
      <hr />
      {props.gameLog.map((game, index) => (
        <Game
          gameName={game.gameName}
          gameWinner={game.gameWinner}
          gamePlayers={game.gamePlayers}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

GameLog.propTypes = {
  gameLog: PropTypes.array,
};

export default GameLog;
