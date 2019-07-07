import React, { Component } from "react";
import "./dashboard.css";
import BookModal from "../Modal/BookModal";
import { Paper } from "@material-ui/core";

class Dashboard extends Component {
  state = { books: [], book: {}};

  async componentDidMount() {
    let stream = await fetch("https://fakerestapi.azurewebsites.net/api/Books");
    const books = await stream.json();
    this.setState({ books: books });
  }

  handlePopup = ( openPopUp, book)=>{
    openPopUp ? this.setState({book}): this.setState({book : {}}); 
  }

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
              <div className="list-row" key={book.ID} onClick={()=>this.handlePopup(true, book)}>
                <div className="list-data">{book.ID}</div>
                <div className="list-data">{book.Title}</div>
                <div className="list-data">{book.Excerpt}</div>
                <div className="list-data">{book.Description}</div>
                <div className="list-data">{book.PublishDate}</div>
                <div className="list-data">{book.PageCount}</div>
              </div>
            ))}
          </div>
          <BookModal openStatus={book.ID !== undefined} data = {book} popUpHandler = {this.handlePopup}/>
        </section>
        </Paper>
      </div>
    );
  }
}

export default Dashboard;
