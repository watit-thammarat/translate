import React, { Component } from 'react';

const DEFAULT_LANGUAGE = 'english';

const Context = React.createContext(DEFAULT_LANGUAGE);

export class LanguageStore extends Component {
  state = {
    language: DEFAULT_LANGUAGE
  };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
