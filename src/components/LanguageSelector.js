import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends Component {
  static contextType = LanguageContext;
  render() {
    const { onLanguageChange } = this.context;
    return (
      <div>
        Select a language:
        <i onClick={() => onLanguageChange('english')} className="flag us" />
        <i onClick={() => onLanguageChange('dutch')} className="flag nl" />
      </div>
    );
  }
}

export default LanguageSelector;
