1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

a) Map, Filter, Reduce
b) Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

a) actions are event objects with type and other properties which were sent to the reducer for routing to the listening components.
b) Reducers received the action objects from action creator then return a new object of the app's state object with the updated data
c) Store is the module that provides connections to actions and reducers. It has methods like getState, subscribe and dispatch which allows components to listen to state change and dispatch events.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
a) Application state holds the only state of the entire app that are shared by all components. Component state resides in components that needs to keep track of its own state such as form inputs. 


1.  What is middleware?
a) Middleware are functions that can be plug in to the store which then have access to the reducers, actions and dispatch methods that can be used to intercept events/actions before they reached the reducer. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
a) Redux-thunk middleware allows action creator to returns a async function rather than a object. It's often used to fetch api data.


1.  Which `react-redux` method links up our `components` with our `redux store`?
a) connect()()
