import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AlbumCards extends React.Component {
  render() {
    const { allCards } = this.props;
    return (
      <div>
        { allCards.map((card) => (
          <Card
            cardTitle
            key={ card.cardName }
            { ...card }
          />
        )) }
      </div>
    );
  }
}

export default AlbumCards;

AlbumCards.propTypes = {
  allCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
