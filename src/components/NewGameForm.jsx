import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewGameForm(props) {
  console.log({ props });
  function handleNewLogSubmission(event) {
    event.preventDefault();
    props.onNewLogCreation({
      gameName: event.target.gameName.value,
      gameWinner: event.target.gameWinner.value,
      gamePlayers: event.target.gamePlayers.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <h3>form</h3>
      <form onSubmit={handleNewLogSubmission}>
        <input type="text" name="gameName" placeholder="Which game?" />

        <input type="text" name="gamePlayers" placeholder="Which players?" />

        <input type="text" name="gameWinner" placeholder="Who won?" />
        <button type="submit">Submit Form</button>
      </form>
    </React.Fragment>
  );
}

NewGameForm.propTypes = {
  onNewLogCreation: PropTypes.func,
};

export default NewGameForm;
