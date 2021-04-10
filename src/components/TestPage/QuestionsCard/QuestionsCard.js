import s from './QuestionCard.module.css';
import { withStyles } from '@material-ui/core/styles';
import { orange, grey } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import { useState } from 'react';

const OrangeRadio = withStyles({
  root: {
    color: grey[400],
    '&$checked': {
      color: orange[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

const QuestionsCard = ({ counter, handelSet, apiData }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };
  return (
    <ul onClick={handelSet}>
      {apiData[counter].answers.map((el, index) => {
        return (
          <label htmlFor={index}>
            <li
              key={index}
              className={s.item}
              data-answer={el}
              data-index={index}
              data-index-answer={apiData[counter].questionId}
            >
              <OrangeRadio
                id={index}
                checked={selectedValue === `${index}`}
                onChange={handleChange}
                value={index}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'C' }}
              />
              <span className={s.testPage__questionListItemText}>{el}</span>
            </li>
          </label>
        );
      })}
    </ul>
  );
};

export default QuestionsCard;
