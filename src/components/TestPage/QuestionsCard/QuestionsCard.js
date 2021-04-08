import s from './QuestionCard.module.css';

const QuestionsCard = ({ counter, handelSet, apiData }) => {
  return (
    <ul onClick={handelSet}>
      {apiData[counter].answers.map((el, index) => {
        return (
          <li
            key={index}
            className={s.item}
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
