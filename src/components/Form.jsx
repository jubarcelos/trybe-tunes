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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form action="">
        <fieldset>
          <div>
            <label htmlFor="cardName">
              Nome:
              <input
                id="cardName"
                name="cardName"
                data-testid="name-input"
                type="text"
                value={ cardName }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="CardDescription"
            >
              Descrição:
              <textarea
                id="cardDescription"
                name="cardDescription"
                data-testid="description-input"
                placeholder="Descreva esse card."
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="CardAttr1"
            >
              Primeiro atributo:
              <input
                id="cardAttr1"
                name="cardAttr1"
                data-testid="attr1-input"
                type="number"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="CardAttr2"
            >
              Segundo atributo:
              <input
                id="cardAttr2"
                name="cardAttr2"
                data-testid="attr2-input"
                type="number"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="CardAttr3"
            >
              Terceiro atributo:
              <input
                id="cardAttr3"
                name="cardAttr3"
                data-testid="attr3-input"
                type="number"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div>
            <label htmlFor="cardImage">
              Insira a url com a imagem
              <input
                id="cardImage"
                name="cardImage"
                data-testid="image-input"
                type="text"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <label htmlFor="cardRare">
            Raridade:
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

          <div>
            { hasTrunfo
              ? <span> Você já tem um Super Trunfo em seu baralho.</span>
              : (
                <label htmlFor="cardTrunfo">
                  É a super trunfo?
                  <input
                    data-testid="trunfo-input"
                    type="checkbox"
                    id="cardTrunfo"
                    name="cardTrunfo"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                </label>
              ) }
          </div>

          <button
            id="save"
            name="save"
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
