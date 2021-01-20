import React from 'react';
import { connect } from "react-redux";
import {removeFeature} from "../actions/actions"
const AddedFeature = props => {
  const handleRemove = (e) => {
    e.preventDefault();
    props.removeFeature(props.feature)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"
      onClick = {handleRemove} >X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeature})(AddedFeature);
