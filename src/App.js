import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
// import PropTypes from 'prop-types';

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
          onInputChange={ onInputChange }
        />
        <Card { ...atualStates } />
      </div>
    );
  }
}

export default App;
