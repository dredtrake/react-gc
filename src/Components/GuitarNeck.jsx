import React, { Component } from "react";
import { connect } from "react-redux";
import String from "./String";
import Cases from "./Cases";
import Chord from "./Chord";
import { changeChord } from "../actions";
import chordsDictionary from "../constants";

class GuitarNeck extends Component {
  handleClick = id => {
    changeChord(chordsDictionary[id]);
  };

  render() {
    const { name } = this.props;
    return (
      <div className="container">
        {Object.keys(chordsDictionary).map((item, index) => (
          <button
            key={index}
            onClick={e =>
              this.props.dispatch({
                type: "CHANGE_CHORD",
                payload: {
                  name: chordsDictionary[item].name,
                  id: index,
                  positions: chordsDictionary[item].positions,
                  position: chordsDictionary[item].position
                }
              })
            }
          >
            {item}
          </button>
        ))}
        <div className="guitar with-nut">
          <Cases by="5" />
          <String size="1" />
          <String size="2" />
          <String size="3" />
          <String size="4" />
          <String size="5" />
          <String size="6" />
          <Chord />
        </div>
        <h2>{name || ""}</h2>
      </div>
    );
  }
}
const mapStateToProps = ({ chord: { name } }) => ({
  name
});

export default connect(mapStateToProps)(GuitarNeck);
