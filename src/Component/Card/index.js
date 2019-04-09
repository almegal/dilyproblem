import React from 'react';
// import PropTypes from 'prop-types';
import * as style from './style.css';

const lorem = `
Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.x+1,y-1)
You are given a sequence of points and the order in which you need to cover the points. Give the minimum number of steps in which you can achieve it. You start from the first point..
`;


const Card = (props) => {
  const {data, i} = props
  console.log(data);
  return (
    <div className="card-component">
      <h3 className="header-card-text">
          Lorem Ipsum
          #{i}
        <hr />
      </h3>
      <p className="card-text">{lorem}</p>
    </div>
  );
};

export default Card;
