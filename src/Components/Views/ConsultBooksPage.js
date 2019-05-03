import React, { Component } from "react";
import Book from "../Book";
import firebase from "../firebaseConfig";
import { Row, Container, Col } from "react-bootstrap";

class ConsultBooksPage extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      // listBooks: [
      //   {
      //     id: 1,
      //     title: "test cool 1",
      //     author: "fdsd",
      //     description: "cool description 1",
      //     cover: "https://www.w3schools.com/w3css/img_lights.jpg",
      //     url: "xgw"
      //   },
      //   {
      //     id: 2,
      //     title: "test cool 2",
      //     author: "fdsd",
      //     description: "cool description 2",
      //     cover:
      //       "https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg",
      //     url: "xgw"
      //   }
      // ]
      // isLoading: true,
      listBooks: []
    }
    // this.onClickDelete = this.onClickDelete.bind(this);
    this.GetBooks = this.GetBooks.bind(
      this);
  }


  componentDidMount() {
    this.GetBooks()
  }
  GetBooks() {
    firebase
      .database()
      .ref("/books")
      .once("value")
      .then(books => {
        let booksList = [];

        const booksObject = books.val();

        for (const book in booksObject) {
          if (booksObject[book].cover.includes("fakepath")) {
            booksObject[book].cover = booksObject[book].cover.replace("fakepath", "Users\\Sara JAZI\\source\\repos\\ReactProjects");
          }
          booksList = [...booksList, booksObject[book]];
        }

        this.setState({ listBooks: booksList });
        console.log(booksList);
      });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.state.listBooks.map(b => {
              console.log(b);
              return (
                <Book
                  cover={b.cover}
                  title={b.title}
                  author={b.author}
                  description={b.description}
                />
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default ConsultBooksPage;