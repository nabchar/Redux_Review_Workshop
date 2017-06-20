import { connect } from 'react-redux';

/*
In this file we will define the container component for our
presentational component, SnackStand, that will render our list of snacks.

Container components are directly connected to the store, and pass down the
necessary pieces of information to the presentational component.

In particular, we will pass down 1. Relevant pieces of state,
and 2. relevant actions for us to dispatch.

We do this by defining two functions:
1. mapStateToProps
2. mapDispatchToProps

We pass down pieces of state and actions to dispatch by calling connect()
connect() takes two arguments, mapStateToProps and mapDispatchToProps (in that order)

connect() returns a function, which will we then immediately invoke, passing
in our StandStand component as an argument. This connect the component to the store
and allows it to render data.

Again, if you get stuck, look at the fruitStandContainer as a reference.
*/

// 1. Import the SnackStand component
// 2. Import relevant actions you want to map to the component (i.e. addSnack, etc.)


// 3. Define mapStateToProps
//    - The function should accept state as an argument
//    - And return an object containing a key, value pair of
//      the piece/slice of state you want to give it.


// 4. Define mapDispatchToProps
//    - the function should accept the dispatch function as an arugment
//    - And return an object containing a key, value particular
//      - the key will be the name of the action,
//      - the value will be an anonymous function that when invoked,
//        dispatchs that action.


// 5. export, by default, the result of invoking connect, passing it
//    mapStateToProps and mapDispatchToProps, and then immediately invoking
//    it, passing SnackStand as an argument.
