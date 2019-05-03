import React, { Component } from "react";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      title: "",
      author: "",
      description: "",
      image: ""
    };
  }

  onFormSubmit(event) {
    event.preventDefault();
    let newCard = {
      id: this.state.counter,
      title: this.state.title,
      description: this.state.description,
      image: this.state.image
    };

    this.setState({
      counter: this.state.counter + 1,
      listCards: [...this.state.listCards, newCard],
      title: "",
      description: "",
      image: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>Partager un livre avec nous!</h1>
        <label>
          Nom:
            <input type="text"
            name="lastName"
            placeholder="Votre nom.."
            value={this.state.lastName}
            required
          />
        </label>
        <label>
          Prénom:
            <input type="text"
            name="firstName"
            placeholder="Votre prénom.."
            value={this.state.firstName}
            required
          />
        </label>
        <label>
          Message:
            <textarea name="subject"
            placeholder="Votre message.."
            value={this.state.message}
            required
          />
        </label>

        <input type="submit" value="Submit" value="Ajouter" />
        <input type="reset" className="btn btn-danger" value="Annuler" />
      </form>
    );
  }
}
export default ContactPage;