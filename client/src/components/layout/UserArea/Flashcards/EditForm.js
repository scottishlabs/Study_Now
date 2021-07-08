import React, { useState, useContext, useEffect } from "react";
import FlashcardsContext from "../../../../context/flashcards/flashcardsContext";

const EditForm = ({ setIsActive }) => {
  const flashcardsContext = useContext(FlashcardsContext);
  const {
    flashcards,
    getFlashcards,
    current,
    filtered,
    addFlashcard,
    updateFlashcard,
    deleteFlashcard,
    setCurrentFlashcard,
    clearCurrentFlashcard,
    filterFlashcards,
    clearFilterFlashcards,
  } = flashcardsContext;

  const [form, setForm] = useState(current);

  const { title, front, back, isActive } = form;

  const formChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const resetForms = () => {
    setForm(current);
  };

  const onSubmit = () => {
    updateFlashcard(form);
    setIsActive(false);
    clearCurrentFlashcard();
  };

  const onClose = () => {
    setIsActive(false);
    clearCurrentFlashcard();
  };

  const handleDeleteCard = () => {
    deleteFlashcard(current._id);
    setIsActive(false);
    getFlashcards();
  };

  return (
    <form className="text-white">
      <div className="row">
        <div className="col-11 p-0 flashcardUnselectable">
          <h3>Edit Card</h3>
        </div>
        <div className="col-1 p-0">
          <i
            className="fas fa-times text-secondary float-right fa-2x"
            style={{ lineHeight: "55px" }}
            onClick={onClose}
          />
        </div>
      </div>

      <hr className="bg-secondary" />
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          id="title"
          value={title}
          onChange={formChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="front">Front</label>
        <textarea
          placeholder="Front of the Flashcard"
          id="front"
          rows="8"
          value={front}
          onChange={formChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea
          placeholder="Back of the Flashcard"
          id="back"
          rows="8"
          value={back}
          onChange={formChange}
          className="form-control"
          required
        />
      </div>
      <div className="d-flex flex-column">
        <div className="btn btn-block btn-secondary" onClick={resetForms}>
          <i className="fas fa-undo" />
        </div>
        <div className="d-flex flex-row mt-2">
          <div className="btn btn-block btn-success mr-2" onClick={onSubmit}>
            <i className="fas fa-check" />
          </div>
          <div
            className="btn btn-block btn-danger m-0"
            onClick={() => handleDeleteCard()}
          >
            <i className="fas fa-trash" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
