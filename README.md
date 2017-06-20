# React/Redux Revisited - Food Stand Project
In this project we are going to get more familiar with the process of building out a full redux cycle, as well as connecting it to a React application.

### Setup
- Download `project_skeleton.zip` and unzip (feel free to rename the folder as wel)
- navigate into the folder and run `npm install`
- run `npm run bundle` to bundle our files and let webpack start watching them.
- run `open index.html` in the command line to open up the current state of our App.

### Explore
Take a look at the project file structure
- `index.html` renders a simple `div` that our root React component hooks into.
- the `frontend` folder stores all our application's moving parts
  - `actions` stores all of our redux actions
  - `components` stores all of our React components
  - `reducers` containers our Redux reducers
  - `store` just has the store
  - `foodstand.jsx` is our 'entry' file where we hook/render our Root React component into `index.html`

### Fruit stand
After you open the app you'll see that we have a functioning fruit stand. You can add apples and oranges, as well as any other user input.

### I like fruit.... but what about snacks?
Fruit is awesome, but I like chips too... and other unhealthy snacks for that matter. Let's dive in and add a new layer to our App that will allow us to add different kinds of snacks into our Food Stand.

### Project Workflow
We will build this new layer in two phases.
Work through the relevant Snack files according to the workflow below. Each file has detailed comments that will give some direction.

If you get stuck, feel free to examine the related 'Fruit' redux part or React component to get a better sense of what you can do.

#### Phase 1 : Redux Cycle
- Actions
  - snackActions
- Reducer
  - snackReducer
  - rootReducer
- Store
  - store

#### Phase 2 : Connecting Redux to our React Components
- Container Component
  - SnackContainer
- Presentational Components
  - SnackStand
  - SnackInput
