import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    const { filterValue, filterChange, filterRare, filterTrunfo } = this.props;
    return (
      <div>
        <label htmlFor="filterName">
          Filtrar por :
          <input
            type="text"
            value={ filterValue }
            name="filterValue"
            data-testid="name-filter"
            onChange={ filterChange }
            placeholder="nome / super trunfo / raridade"
          />
          <select
            value={ filterRare }
            name="filterRare"
            data-testid="rare-filter"
            onChange={ filterChange }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="cardTrunfo">
          É a super trunfo?
          <input
            data-testid="trunfo-filter"
            type="checkbox"
            name="filterTrunfo"
            checked={ filterTrunfo }
            onChange={ filterChange }
          />
        </label>
      </div>
    );
  }
}

export default Filters;

Filters.propTypes = {
  filterValue: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};
