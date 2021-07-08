import React, { useContext, useState } from "react";
import BrowseArea from "./BrowseArea";
import AddEditArea from "./AddEditArea";
import StudyArea from "./StudyArea";
import "./Flashcards.css";
import FlashcardsContext from "../../../../context/flashcards/flashcardsContext";

const FlashcardArea = () => {
  const flashcardsContext = useContext(FlashcardsContext);
  const { current } = flashcardsContext;

  const [isActive, setIsActive] = useState(current !== null);
  const [isStudy, setIsStudy] = useState(false);

  return (
    <>
      {isStudy ? (
        <div className={`studyContainer bg-secondary d-block`}>
          <StudyArea isStudy={isStudy} setIsStudy={setIsStudy} />
        </div>
      ) : (
        <div className="row h-100">
          <BrowseArea
            isActive={isActive}
            setIsActive={setIsActive}
            isStudy={isStudy}
            setIsStudy={setIsStudy}
          />
          <AddEditArea isActive={isActive} setIsActive={setIsActive} />
        </div>
      )}
    </>
  );
};

export default FlashcardArea;
