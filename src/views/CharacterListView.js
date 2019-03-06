import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {getChar} from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChar();
  }

  render() {
    
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
      return <h1>FETCHING DATA</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
    characters: state.charsReducer.characters,
    isLoading: state.charsReducer.isLoading,
    error: state.charsReducer.error
})

export default connect(
  /* mapStateToProps replaces null here */
  mapStateToProps,
  {
    getChar
  }
)
(CharacterListView);
