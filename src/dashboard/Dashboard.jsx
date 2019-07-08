import React, { Component } from "react";
import "./dashboard.css";
import BookModal from "../Modal/BookModal";
import {
  Paper,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import webapiClient from "../client/webapi-client";
import BooksAppBar from "../app-bar/AppBar";

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

  /**
   * The callback function provided by Expansion Panel provides two parameter in the callback 
   * event and isExpanded(which is current status of the panel)
   */
  handleAccordian = (book)=>(event, isExpanded)=>{
    isExpanded ? this.setState({book}) : this.setState({book : {}}) ;
  }

  render() {
    const { books} = this.state;
    return (
      <div id="dashboard-container">
      <BooksAppBar/>
        <h1>Books Dashboard</h1>
        <Paper>
          <section id="dashboard-section">
            <div className="list">
                  {/* expanded tells the panel that it should be in expanded state or collapsed state */} 
              {books.map(book => (
                <ExpansionPanel 
                    expanded = {book.id === this.state.book.id}
                    onChange={this.handleAccordian(book)}
                key={book.id}>

                  <ExpansionPanelSummary 
                  expandIcon={<ExpandMoreIcon />}>
                    <Typography>{`${book.title} with page count ${
                      book.pages
                    } Information Modal`}</Typography>
                  </ExpansionPanelSummary>

                  <ExpansionPanelDetails>
                    <Typography className="list-data">
                      <b>Unique ID : </b>{book.id}
                    </Typography>
                    <div className="list-data"><b>Title : </b>{book.title}</div>
                    <div className="list-data"><b>Sub Title : </b>{book.subtitle}</div>
                    <div className="list-data">
                    <b> Age of the Book : </b>{this.getAgeOfBook(book.published)} days
                    </div>
                    <div className="list-data"><b>Author : </b>{book.author}</div>
                    <div className="list-data">
                    <b>  Description : </b>{book.description}
                    </div>
                    <div className="list-data">
                    <b>Published : </b>{book.published}
                    </div>
                    <div className="list-data">
                    <b> Publisher : </b>{book.publisher}
                    </div>
                    <div className="list-data">Pages : {book.pages}</div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              ))}
            </div>
          </section>
        </Paper>
      </div>
    );
  }
}

export default Dashboard;
