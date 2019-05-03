import React, { Component } from "react";
import firebase from "../firebaseConfig";

class AddBookPage extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      // counter: 3,
      title: "",
      author: "",
      description: "",
      cover: "",
      url:"",
      category:""
    };
    // console.log(this.props)
  }

  onFormSubmit(event) {
    event.preventDefault();
    let newBook = {
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
      cover: this.state.cover,
      url: this.state.url,
      category: this.state.category
    };

    firebase
      .database()
      .ref("books")
      .push()
      .set(newBook);

    // this.props.history.push("/list");

    this.setState({
      // listBooks: [...this.state.listCards, newCard],
      title: "",
      author: "",
      description: "",
      cover: "",
      url: "",
      category: ""
    });
  }

  onInputChange(event) {
    let newState = {};

    newState[event.target.name] = event.target.value;

    this.setState(newState);
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>Partager un livre avec nous!</h1>
        <label>
          Titre du livre:
            <input type="text"
            name="title"
            placeholder="Entrez le titre du livre.."
            value={this.state.title}
            onChange={this.onInputChange}
            required
          />
        </label>
        <label>
          Auteur:
            <input type="text"
            name="author"
            placeholder="Entrez l'auteur du livre.."
            value={this.state.author}
            onChange={this.onInputChange}
            required
          />
        </label>
        <label>
          Catégorie du livre:
            <select name="category" onChange={this.onInputChange}>
                      <option value="Psychologie" selected>Psychologie</option>
                      <option value="Philosophie">Philosophie</option>
                      <option value="Romans">Romans</option>
                      <option value="Science fiction">Science fiction</option>
                      <option value="Histoire">Histoire</option>
                      <option value="Poésie">Poésie</option>
                      <option value="Science">Science</option>
          </select>
        </label>
        <label>
          Couverture du livre:
            <input type="file"
            name="cover"
            placeholder="Entrez une couverture du livre.."
            value={this.state.cover}
            onChange={this.onInputChange}
            required
          />
        </label>
        <label>
          Lien du livre:
            <input type="file"
            name="url"
            placeholder="Entrez le livre en PDF.."
            value={this.state.url}
            onChange={this.onInputChange}
            required
          />
        </label>
        <label>
          Description sur le livre:
                    <textarea name="bookDesc"
            placeholder="Une description sur le livre.."
            name="description"
            value={this.state.description}
            onChange={this.onInputChange}
            required
          />
        </label>

        <input type="submit" value="Submit" value="Ajouter" />
        <input type="reset" className="btn btn-danger" value="Annuler" />
      </form>
    );
  }
}
export default AddBookPage;

// import  { FirebaseContext } from '../Firebase';

// const SomeComponent = () => (
//   <FirebaseContext.Consumer>
//     {firebase => {
//       return <div>I've access to Firebase and render something.</div>;
//     }}
//   </FirebaseContext.Consumer>
// );

// export default SomeComponent;