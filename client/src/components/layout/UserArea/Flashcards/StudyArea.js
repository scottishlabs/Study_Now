import React, { useState, useContext, useEffect } from "react";
import cloneDeep from "lodash/cloneDeep";
import FlashcardsContext from "../../../../context/flashcards/flashcardsContext";
import moment from "moment";

const StudyArea = ({ isStudy, setIsStudy }) => {
  const flashcardsContext = useContext(FlashcardsContext);
  const { updateFlashcard, getFlashcards, flashcards } = flashcardsContext;

  const [currentFlashcards, setFlashcards] = useState([]);
  const [currentFlashcard, setCurrentFlashcard] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    selectACard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnswered]);

  const filterFlashcards = () => {
    const filterCards = flashcards
      .filter((flashcard) => new Date(flashcard.nextActive) <= new Date())
      .sort((a, b) => b.nextActive - a.nextActive);
    setFlashcards(filterCards);
    setCurrentFlashcard(filterCards[0]);

    console.log(filterCards);
  };

  const selectACard = async () => {
    await getFlashcards();
    filterFlashcards();
  };

  const setInactiveBad = async () => {
    await updateFlashcard({
      ...currentFlashcard,
      nextActive: moment(new Date()).add(1, "m"),
    });
    await selectACard();
    setIsAnswered(false);
  };

  const setInactiveGood = async () => {
    await updateFlashcard({
      ...currentFlashcard,
      nextActive: moment(new Date()).add(1, "h"),
    });
    await selectACard();
    setIsAnswered(false);
  };

  const setInactivePerfect = async () => {
    await updateFlashcard({
      ...currentFlashcard,
      nextActive: moment(new Date()).add(1, "d"),
    });
    await selectACard();
    setIsAnswered(false);
  };

  return (
    <div>
      <div className="topBar w-100 py-2 px-4" style={{ height: "70px" }}>
        <div
          className="float-right btn text-dark"
          onClick={() => setIsStudy(false)}
          style={{ fontSize: "2rem" }}
        >
          <i className="fas fa-times" />
        </div>
      </div>
      <div className="container text-dark d-flex flex-column flex-center">
        {!currentFlashcard || currentFlashcards.length === 0 ? (
          <div className="container bg-white text-center p-4">
            <h5 className="">No cards available comeback later!</h5>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => selectACard()}
            >
              Refresh
            </button>
          </div>
        ) : isAnswered ? (
          <>
            <div className="flashcardContainer my-4 py-5 px-4 px-lg-5 container bg-white">
              <h4>{currentFlashcard.back}</h4>
            </div>
            <div className="m-4 d-flex flex-row">
              <div
                className="btn btn-block btn-danger mx-3 mt-2 shadow"
                onClick={() => setInactiveBad()}
              >
                Bad (1m)
              </div>
              <div
                className="btn btn-block btn-warning text-white  mx-3 shadow"
                onClick={() => setInactiveGood()}
              >
                Good (1h)
              </div>
              <div
                className="btn btn-block btn-success mx-3 shadow"
                onClick={() => setInactivePerfect()}
              >
                Perfect (1d)
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flashcardContainer my-4 py-5 px-4 px-lg-5 container bg-white">
              <h4>{currentFlashcard.front}</h4>
            </div>
            <div
              className="btn btn-dark m-4"
              onClick={() => setIsAnswered(true)}
            >
              Show Answer
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StudyArea;
