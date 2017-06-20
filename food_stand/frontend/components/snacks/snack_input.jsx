import React from 'react';

/*
In this file we are going to define our SnackInput component

The component should render a form that allows the user to enter a snack.
When the form is submitted, we should "preventDefault" and invoke the
addSnack action instead.

The component will need to store some local state (the name of the snackt
the user is entering)

Define two additional methods handleInput and handleSubmit that add this desired functionality.
 - use event listeners onChange and onSubmit
 
*/

class SnackInput extends React.Component {
  constructor(props) {
    super(props);

    // define local component state
  }

  handleInput() {

  }

  handleSubmit(e) { // remember e is the 'event' being fired.
    // be sure to preventDefault
  }

  render() {

  }
}

export default SnackInput;
