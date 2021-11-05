import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <div>
        <form action="">
          <label htmlFor="cardName">
            <input
              id="cardName"
              data-testid="name-input"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label
            htmlFor="CardDescription"
          >
            <textarea
              id="cardDescription"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label
            htmlFor="CardAttr1"
          >
            <input
              id="cardAttr1"
              data-testid="attr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label
            htmlFor="CardAttr2"
          >
            <input
              id="cardAttr2"
              data-testid="attr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label
            htmlFor="CardAttr3"
          >
            <input
              id="cardAttr3"
              data-testid="attr3-input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardImage">
            <input
              id="cardImage"
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardRare">
            <select
              data-testid="rare-input"
              name="cardRare"
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="cardTrunfo">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            id="save"
            data-testid="save-button"
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
