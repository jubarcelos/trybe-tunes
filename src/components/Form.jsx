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
      <form action="">
        <fieldset>
          <label htmlFor="cardName">
            Nome:
            <input
              id="cardName"
              data-testid="name-input"
              type="text"
              value={ cardName }
              callback={ onInputChange }
            />
          </label>
          <label
            htmlFor="CardDescription"
          >
            Aqui algumas curiosidades:
            <textarea
              id="cardDescription"
              data-testid="description-input"
              value={ cardDescription }
              callback={ onInputChange }
            />
          </label>

          <label
            htmlFor="CardAttr1"
          >
            Primeiro atributo:
            <input
              id="cardAttr1"
              data-testid="attr1-input"
              type="number"
              value={ cardAttr1 }
              callback={ onInputChange }
            />
          </label>

          <label
            htmlFor="CardAttr2"
          >
            Segundo atributo:
            <input
              id="cardAttr2"
              data-testid="attr2-input"
              type="number"
              value={ cardAttr2 }
              callback={ onInputChange }
            />
          </label>

          <label
            htmlFor="CardAttr3"
          >
            Terceiro atributo:
            <input
              id="cardAttr3"
              data-testid="attr3-input"
              type="number"
              value={ cardAttr3 }
              callback={ onInputChange }
            />
          </label>
          <label htmlFor="cardImage">
            Insira a url com a imagem
            <input
              id="cardImage"
              data-testid="image-input"
              type="text"
              value={ cardImage }
              callback={ onInputChange }
            />
          </label>
          <label htmlFor="cardRare">
            Raridade:
            <select
              data-testid="rare-input"
              name="cardRare"
              id="cardRare"
              value={ cardRare }
              callback={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="cardTrunfo">
            É super trunfo?
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="cardTrunfo"
              checked={ cardTrunfo }
              callback={ onInputChange }
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
        </fieldset>
      </form>
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
