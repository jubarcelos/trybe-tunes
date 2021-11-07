import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
    };
  }
  // função para definir que no checkbox não se pega o value, mas sim o checked. Sem um checkbox era só tirar o ternário.
  // como eu fiz arrow function, não preciso fazer o bind, já está declarado no this.

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () => {
      this.setState({ isSaveButtonDisabled: this.formValidation() });
    });
  };

  onSaveButtonClick = () => { }

  formValidation = () => {
    let {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const atualState = Object.values(this.state);
    const maxSolo = 90;
    const minSolo = 0;
    const maxValueTotal = 210;

    cardAttr1 = Number(cardAttr1);
    cardAttr2 = Number(cardAttr2);
    cardAttr3 = Number(cardAttr3);
    // tentei fazer a verificação de string vazia com um if || e não passava no test, Brunão me ajudou a ver que era esse meu problema.

    if (atualState.some((verification) => verification === '')) return true;
    if (cardAttr1 < minSolo || cardAttr1 > maxSolo || cardAttr1 === '') return true;
    if (cardAttr2 < minSolo || cardAttr2 > maxSolo || cardAttr2 === '') return true;
    if (cardAttr3 < minSolo || cardAttr3 > maxSolo || cardAttr3 === '') return true;
    if ((cardAttr1 + cardAttr2 + cardAttr3) > maxValueTotal) return true;
    return false;
  }

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
        <Card { ...atualStates } />
      </div>
    );
  }
}
// no CR o Gabis deu a dica de armazenar os dados do state em uma variável para não reatribuir e o Guilherme Augusto me ajudou a entender melhor essa forma de fazer.

export default App;
