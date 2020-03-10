import React from 'react';
import Button from './button';

const Row: React.FC = () => {
  const buttonsArray: Array<JSX.Element> = [];
  for (let i = 0; i <= 3; i += 1) {
    buttonsArray.push(<Button />);
  }
  return (
    <div>
      {buttonsArray}
      Hey World
    </div>
  );
};

export default Row;
