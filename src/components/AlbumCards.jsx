import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AlbumCards extends React.Component {
  render() {
    const { allCards, deleteCardClick } = this.props;
    return (
      <div>
        { allCards.map((card) => (
          <div key={ card.cardName }>
            <Card
              cardTitle
              { ...card }
            />
            <button
              onClick={ () => deleteCardClick(card) }
              name={ cardName }
              data-testid="delete-button"
              type="button"
            >
              Excluir
            </button>

          </div>
        )) }
      </div>
    );
  }
}
export default AlbumCards;

AlbumCards.propTypes = {
  allCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteCardClick: PropTypes.func.isRequired,
};
