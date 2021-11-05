import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="cardName">
            <input
              id="cardName"
              data-testid="name-input"
              type="text"/>
          </label>
          <label
            htmlFor="CardDescription">
            <textarea
              id="cardDescription"
              data-testid="description-input"/>
          </label>

          <label
            htmlFor="CardAttr1">
            <input
              id="cardAttr1"
              data-testid="attr1-input"
              type="number" />
          </label>

          <label
            htmlFor="CardAttr2">
            <input
              id="cardAttr2"
              data-testid="attr2-input"
              type="number" />
          </label>

          <label
            htmlFor="CardAttr3">
            <input
              id="cardAttr3"
              data-testid="attr3-input"
              type="number" />
          </label>
          <label htmlFor="cardImage">
            <input
              id="cardImage"
              data-testid="image-input"
              type="text" />
          </label>
          <label htmlFor="cardRare">
            <select
              data-testid="rare-input"
              name="cardRare"
              id="cardRare">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito-raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="superTrunfo">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="superTrunfo" />
          </label>
          <label htmlFor="save">
            <button
              id="save"
              data-testid="save-button"
              type="submit">
              Salvar
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
