import React from "react";
import { connect } from "react-redux";

import { getData } from "../store/actions";

import { CatFact } from "./CatFact.js";

const CatFactList = props => {
  console.log("CatFactList Props", props);

  return (
    <div>
        <button onClick={ props.getData }>
            Load Facts
        {props.isLoading ? (
        
        <div>Loading</div>
        ) : (
          "Load Cat Facts!"
        )}
        </button>
        {props.catFacts &&
            props.catFacts.map(fact => <CatFact key={ fact.id } fact={ fact } />)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    catFacts: state.catFacts
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(CatFactList);