import React from 'react';

import FruitInput from './fruit_input';

const FruitStand = (props) => { // a functional component!
  // construct array of <li>s
  const fruits = props.fruit.map((fruit) => {
    return (
      <li>
        {fruit}
      </li>
    );
  });

  return (
    <section>
      <ul>
        {fruits}
      </ul>
      <button onClick={props.addApple}>Add Apple</button>
      <button onClick={props.addOrange}>Add Orange</button>
      <button onClick={props.clearFood}>clear food</button>
      <FruitInput addFruit={props.addFruit} />
    </section>
  );
};

export default FruitStand;
