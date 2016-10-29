import React, { Component } from 'react';

class StickySelect extends Component {
  static get propTypes() {
    return {
      options: React.PropTypes.arrayOf(
                 React.PropTypes.shape({
                   text: React.PropTypes.string.isRequired,
                   value: React.PropTypes.string.isRequired,
                 })
                 ).isRequired,
    };
  }

  get sortedOptions() {
    return this.props.options.sort((a, b) => {
      if (a.value === 'all') return -1;
      if (b.value === 'all') return 1;

      if (a.text > b.text) {
        return 1;
      }

      return -1;
    });
  }

  renderOptions() {
    return this.sortedOptions.map((option) => {
      return (
          <option value={option.value}>
          {option.text}
          </option>
          );
    });
  }

  render() {
    return (
        <select>
          {this.renderOptions()}
        </select>
        );
  }
};

export default StickySelect;
