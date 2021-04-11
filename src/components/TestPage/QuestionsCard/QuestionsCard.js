import s from './QuestionCard.module.css';

const QuestionsCard = ({ counter, handelSet, apiData, currentAnswer }) => {
  return (
    <ul onClick={handelSet}>
      {apiData[counter].answers.map((el, index) => {
        return (
          <li
            key={index}
            name="check"
            className={s.item}
            id={index}
            data-answer={el}
            data-index={index}
            data-index-answer={apiData[counter].questionId}
          >
            {el}
          </li>
        );
      })}
    </ul>
  );
};

export default QuestionsCard;
