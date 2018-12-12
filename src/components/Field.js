import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
  static contextType = LanguageContext;

  renderName = () => {
    const { language } = this.context;
    return language === 'english' ? 'Name' : 'Naam';
  };

  render() {
    return (
      <div className="ui field">
        <label>{this.renderName()}</label>
        <input />
      </div>
    );
  }
}

export default Field;
