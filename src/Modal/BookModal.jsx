import React from "react";
import Modal from "@material-ui/core/Modal";
import Paper from '@material-ui/core/Paper';
import "./book-modal.css";

export default function BookModal(props) {
  const { openStatus, data: book, popUpHandler } = props;

  return (
    /* onClose event will handle the complete scenarios of closure of modal from click outside of modal to escape  
        function(event: object, reason: string) => void
        event: The event source of the callback
        reason: Can be:"escapeKeyDown", "backdropClick"
    */
    <Modal open={openStatus} onClose={() => popUpHandler(false)}>
    <Paper>
      <div className="modal-container">
        <h2>
          {" "}
          {book.Title} with page count {book.PageCount} Information Modal
        </h2>
        <div className="list-data">ID : {book.ID}</div>
        <div className="list-data">
          <b>Title : </b>
          {book.Title}
        </div>
        <div className="list-data">
          <b> Excerpt : </b>
          {book.Excerpt}
        </div>
        <div className="list-data">
          <b>Description :</b> {book.Description}
        </div>
        <div className="list-data">
          <b>Publish Date : </b>
          {book.PublishDate}
        </div>
        <div className="list-data">
          <b>Page Count : </b>
          {book.PageCount}
        </div>
        <button style={{'margin' : '30px'}} onClick={() => popUpHandler(false)}>Close Modal</button>
      </div>
      </Paper>
    </Modal>
  );
}
