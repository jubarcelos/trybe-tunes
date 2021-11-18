import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import AlbumCards from './components/AlbumCards';
import Filters from './components/Filters';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      allCards: [],
      filterValue: '',
      filterRare: 'todas',
      filterTrunfo: false,
    };
  }
  // função para definir que no checkbox não se pega o value, mas sim o checked. Sem um checkbox era só tirar o ternário.
  // como eu fiz arrow function, não preciso fazer o bind, já está declarado no this.

  onInputChange = ({ target }) => {
    const { name } = target;
    const inputValue = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: inputValue }, () => {
      this.setState({ isSaveButtonDisabled: this.formValidation() });
    });
  };

  onSaveButtonClick = (event) => {
    // impede que limpe imediatamente ao clique. Dai abre as informações contidas no preventDefault.allCards e adiciona o novo objeto.
    // dica acolhida do code Review do Gustavo.

    event.preventDefault();
    this.setState((preventDefault) => (
      { allCards: [...preventDefault.allCards, this.newCard()] }
    ));
    this.clearForm();
    this.trunfoIsChecked();
  };

  newCard = () => {
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
    } = this.state;

    const actualCreateCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    return actualCreateCard;
  };

  clearForm = () => {
    this.setState((
      {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      }));
  }

  formValidation = () => {
    let {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const { cardName, cardDescription, cardImage } = this.state;

    const atualState = [cardName, cardDescription, cardImage];
    const maxSolo = 90;
    const minSolo = 0;
    const maxValueTotal = 210;

    cardAttr1 = Number(cardAttr1);
    cardAttr2 = Number(cardAttr2);
    cardAttr3 = Number(cardAttr3);
    // Parti do codeReview do Gustavo com o Gabis para entender essa dinâmica.
    // tentei fazer a verificação de string vazia com um if || e não passava no test, Brunão me ajudou a ver que era esse meu problema.

    if (atualState.some((verification) => verification === '')) return true;
    if (cardAttr1 < minSolo || cardAttr1 > maxSolo || cardAttr1 === '') return true;
    if (cardAttr2 < minSolo || cardAttr2 > maxSolo || cardAttr2 === '') return true;
    if (cardAttr3 < minSolo || cardAttr3 > maxSolo || cardAttr3 === '') return true;
    if ((cardAttr1 + cardAttr2 + cardAttr3) > maxValueTotal) return true;
    return false;
  }

  // Emerson e Victor me ajudaram a ajustar minha lógica aqui e realocar. Estava dando muito conflito no Lint do jeito que eu havia feito.
  deleteCardClick = (atualCard) => {
    const { allCards } = this.state;
    const newState = allCards.filter((card) => card !== atualCard);
    this.setState({
      allCards: newState,
    }, () => this.trunfoIsChecked());
  }
  // obtive ajuda do Victor na monitoria para concluir essa função de cheked que depois de apagar dava problemas.

  trunfoIsChecked = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState(
        { hasTrunfo: true },
      );
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  filterChange = ({ target }) => {
    const { name, value } = target;
    const filterValue = target.type === 'checkbox' ? target.checked : value;
    this.setState({ [name]: filterValue }, () => {
      this.allFilterCards();
    });
  };

  allFilterCards = () => {
    const { allCards, filterValue, filterRare, filterTrunfo } = this.state;
    const trunfoCard = allCards.filter(({ cardTrunfo }) => cardTrunfo);

    if (filterTrunfo) return trunfoCard;
    let filteredCards = allCards.filter((card) => card.cardName.includes(filterValue));
    if (filterRare !== 'todas') {
      filteredCards = filteredCards.filter(({ cardRare }) => cardRare === filterRare);
    }
    return filteredCards;
  };

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
      deleteCardClick,
      filterValue,
      filterRare,
      filterTrunfo,
    } = this.state;

    const atualStates = {
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
      deleteCardClick,
    };

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...atualStates }
          // adiciona um novo objeto
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Filters
          filterChange={ this.filterChange }
          filterValue={ filterValue }
          filterRare={ filterRare }
          filterTrunfo={ filterTrunfo }
          // filterName={ filterName }
        />
        <section className="preview">
          <p className="p-title">Pré-visualização</p>
          <Card { ...atualStates } />
        </section>
        <AlbumCards
          allFilterCards={ this.allFilterCards }
          deleteCardClick={ this.deleteCardClick }
        />
      </div>
    );
  }
}

export default App;
