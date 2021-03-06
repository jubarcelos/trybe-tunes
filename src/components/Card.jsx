import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;

    return (
      <section>
        <p data-testid="name-card">
          { cardName }
        </p>

        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <div>
          <p data-testid="attr1-card">
            Atributo 01 . . . . . .
            { cardAttr1 }
          </p>
          <p data-testid="attr2-card">
            Atributo 02 . . . . . .
            { cardAttr2 }
          </p>
          <p data-testid="attr3-card">
            Atributo 03 . . . . . .
            { cardAttr3 }
          </p>
        </div>
        <p data-testid="rare-card">
          Raridade:
          { cardRare }
        </p>

        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }

      </section>

    );
  }
}
// esse condicional do cardTrunfo que não é ternário é pq não tem um segundo valor. Dai pode substituir por &&.
export default Card;

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
// essa parte estava com o pessoal da salinha 3 e pedi muita ajuda ao: Rafael, o Renan, o Brunão e Joel.
