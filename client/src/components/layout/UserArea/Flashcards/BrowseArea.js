import React, { useState, useContext, useEffect, Fragment } from "react";
import FlashcardsContext from "../../../../context/flashcards/flashcardsContext";
import FlashcardItem from "./FlashcardItem";

const BrowseArea = ({ setIsActive, setIsStudy }) => {
  const flashcardsContext = useContext(FlashcardsContext);
  const {
    flashcards,
    loading,
    current,
    filtered,
    getFlashcards,
    addFlashcard,
    updateFlashcard,
    deleteFlashcard,
    setCurrentFlashcard,
    clearCurrentFlashcard,
    filterFlashcards,
    clearFilterFlashcards,
  } = flashcardsContext;

  useEffect(() => {
    getFlashcards();
    // eslint-disable-next-line
  }, []);

  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onAddFlashcard = () => {
    setCurrentFlashcard(null);
    setIsActive(true);
  };

  const onStartStudy = () => {
    setIsActive(false);
    setIsStudy(true);
  };

  return (
    <div className="browseWrapper d-block m-auto col-lg-7">
      <div className="searchFlashcard input-group">
        <input
          type="text"
          name="name"
          maxLength="48"
          className="form-control"
          placeholder="Search..."
          value={search}
          onChange={onChange}
        />
        <div className="input-group-append">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => filterFlashcards(search)}
          >
            <i className="fas fa-search" />
          </button>
        </div>
        <button
          className="btn btn-secondary ml-3"
          onClick={clearFilterFlashcards}
        >
          Clear Filter
        </button>
      </div>

      <div className="flashcardBtns row mb-3">
        <div className=" col-6 p-0 pr-3">
          <button className="btn btn-primary btn-block" onClick={onStartStudy}>
            <i className="fas fa-play" />
          </button>
        </div>
        <div className=" col-6 p-0">
          <button
            className="btn btn-secondary btn-block"
            onClick={onAddFlashcard}
          >
            <i className="fas fa-plus" />
          </button>
        </div>
      </div>
      <hr></hr>
      {flashcards !== null && !loading ? (
        <div className="container-fluid browseFlashArea">
          <ul className="list-group">
            {flashcards === null ? (
              <h3 className="text-center my-5">Add a Flashcard to begin!</h3>
            ) : filtered !== null ? (
              filtered.map((flashcard) => (
                <FlashcardItem
                  key={flashcard._id}
                  flashcard={flashcard}
                  setIsActive={setIsActive}
                />
              ))
            ) : (
              flashcards.map((flashcard) => (
                <FlashcardItem
                  key={flashcard._id}
                  flashcard={flashcard}
                  setIsActive={setIsActive}
                />
              ))
            )}
          </ul>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowseArea;
