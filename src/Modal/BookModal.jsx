import React from "react";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import "./book-modal.css";
import { Card, CardContent, CardActions, Typography, CardHeader } from "@material-ui/core";

export default function BookModal(props) {
  const { openStatus, data: book, popUpHandler } = props;

  let getAgeOfBook = originDate => {
    const dayInMilliSeconds = 24 * 60 * 60 * 1000;
    const absoluteDiff = Math.round(
      (new Date() - new Date(originDate)) / dayInMilliSeconds
    );
    return absoluteDiff;
  };

  return (
    /* onClose event will handle the complete scenarios of closure of modal from click outside of modal to escape  
        function(event: object, reason: string) => void
        event: The event source of the callback
        reason: Can be:"escapeKeyDown", "backdropClick"
    */
    <Modal open={openStatus} onClose={() => popUpHandler(false)}>
      <Paper>
        <div className="modal-container">
          <Card>
          <CardHeader title={`${book.title} with page count ${book.pages} Information Modal`}>

          </CardHeader>
          <CardContent>
            <Typography>
              <Typography className="list-data">Unique ID : {book.id}</Typography>
              <div className="list-data">Title : {book.title}</div>
              <div className="list-data">Sub Title {book.subtitle}</div>
              <div className="list-data">
                Age of the Book : {getAgeOfBook(book.published)}
              </div>
              <div className="list-data">Author : {book.author}</div>
              <div className="list-data">Description : {book.description}</div>
              <div className="list-data">Published : {book.published}</div>
              <div className="list-data">Publisher : {book.publisher}</div>
              <div className="list-data">Pages : {book.pages}</div>
            </Typography>
          </CardContent>
          <CardActions>
          <button
            style={{ margin: "30px", 'padding' : '20px' }}
            onClick={() => popUpHandler(false)}
          >
            Close Modal
          </button>
          </CardActions>
        </Card>
          
        </div>

        
      </Paper>
    </Modal>
  );
}
