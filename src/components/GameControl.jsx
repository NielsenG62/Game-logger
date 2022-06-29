import React from "react";
import NewGameForm from "./NewGameForm";
import GameLog from "./GameLog";

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainGameLog: [],
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  };

  handleAddingGameToLog = (newLog) => {
    const newMainGameLog = this.state.mainGameLog.concat(newLog);
    this.setState({
      mainGameLog: newMainGameLog,
      formVisibleOnPage: false,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewGameForm onNewLogCreation={this.handleAddingGameToLog} />
      );
      buttonText = "Return to game log";
    } else {
      currentlyVisibleState = <GameLog gameLog={this.state.mainGameLog} />;
      buttonText = "Log game";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default GameControl;
