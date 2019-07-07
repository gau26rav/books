import React, { Component } from "react";
import "./dashboard.css";
import BookModal from "../Modal/BookModal";
import { Paper } from "@material-ui/core";
import webapiClient from "../client/webapi-client";

class Dashboard extends Component {
  state = { books: [], book: {} };

  async componentDidMount() {
    let stream = await webapiClient.GET("books");
    const books = await stream.json();
    console.log(books);
    this.setState({ books: books });
  }

  handlePopup = (openPopUp, book) => {
    openPopUp ? this.setState({ book }) : this.setState({ book: {} });
  };

  getAgeOfBook = originDate => {
    const dayInMilliSeconds = 24 * 60 * 60 * 1000;
    const absoluteDiff = Math.round(
      (new Date() - new Date(originDate)) / dayInMilliSeconds
    );
    return absoluteDiff;
  };

  render() {
    const { books, book } = this.state;
    return (
      <div id="dashboard-container">
        <h1>Books Dashboard</h1>
        <Paper>
          <section id="dashboard-section">
            <div className="list">
              <div className="list-headers">
                <div>ID</div>
                <div>Title</div>
                <div>Excerpt</div>
                <div>Description</div>
                <div>Publish Date</div>
                <div>Page Count</div>
              </div>

              {books.map(book => (
                <div
                  className="list-row"
                  key={book.id}
                  onClick={() => this.handlePopup(true, book)}
                >
                  <div className="list-data">{book.id}</div>
                  <div className="list-data">{book.title}</div>
                  <div className="list-data">{book.subtitle}</div>
                  <div className="list-data">
                    {this.getAgeOfBook(book.published)}
                  </div>
                  <div className="list-data">{book.author}</div>
                  <div className="list-data">{book.description}</div>
                  <div className="list-data">{book.published}</div>
                  <div className="list-data">{book.publisher}</div>
                  <div className="list-data">{book.pages}</div>
                </div>
              ))}
            </div>
            <BookModal
              openStatus={book.id !== undefined}
              data={book}
              popUpHandler={this.handlePopup}
            />
          </section>
        </Paper>
      </div>
    );
  }
}

export default Dashboard;
