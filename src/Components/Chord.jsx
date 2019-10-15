import React from "react";
import { connect } from "react-redux";
import "../scss/chord.scss";

const Chord = ({ positions, position }) => {
  if (position) {
    positions = parseShortChord(position);
  }
  return positions ? (
    <div className="chord">
      {positions.map(({ p }) => {
        const s = p.split("-");
        const c = s[1] !== "0" ? " filled" : "";
        return <div key={p} className={`dot position-${p}${c}`} />;
      })}
    </div>
  ) : null;
};

const reverseString = str => {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

const parseShortChord = position => {
  let ret = [];

  position = reverseString(position);

  for (var i = 0; i < position.length; i++) {
    let char = position[i];
    if (char !== "x") {
      ret.push({ p: `${i + 1}-${char}` });
    }
  }
  return ret;
};

const mapStateToProps = state => ({
  positions: state && state.chord && state.chord.positions,
  position: state && state.chord && state.chord.position
});

export default connect(mapStateToProps)(Chord);
