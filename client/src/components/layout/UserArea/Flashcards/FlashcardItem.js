import React, { useContext } from "react";
import FlashcardsContext from "../../../../context/flashcards/flashcardsContext";

const FlashcardItem = ({ flashcard, setIsActive }) => {
  const flashcardsContext = useContext(FlashcardsContext);

  const {
    flashcards,
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

  const { _id, title, front, back, due } = flashcard;

  const selectFlashcard = () => {
    setCurrentFlashcard(flashcard);
    setIsActive(true);
  };

  return (
    <li className="list-group-item" style={{ height: "54px" }}>
      <div className="row ">
        <div className="col-11 p-0">
          <div className="flashcardTitle flashcardUnselectable float-left">
            {title}
          </div>
        </div>
        <div className="col-1 p-0">
          <div
            className="btn text-primary float-right p-0 pl-2 pr-1"
            onClick={() => selectFlashcard()}
          >
            <i className="fa fa-pencil-square-o" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default FlashcardItem;
