import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };

    // this.onInputChange = this.onInputChange.bind(this);
  }
  // função para definir que no checkbox não se pega o value, mas sim o checked. Sem um checkbox era só tirar o ternário.
  // como eu fiz arrow function, não preciso fazer o bind, já está declarado no this.

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick = () => { }

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

export default App;

// no CR o Gabis deu a dica de armazenar os dados do state em uma variável para não reatribuir e o Guilherme Augusto me ajudou a entender melhor essa forma de fazer.
