1. What problem does the context API help solve?

Prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: using dispatch you can send data to the store as actions, they are the only source of info for the store
Reducers: a pure function that converts previous state and actions to new state.
Store: holds the state for the whole app and cannot be mutated.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state of the whole app, like using the redux store for your app, and should be used if you have 
to pass props multiple components down. Component state is just the state of the components themselves.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux- Thunk is middleware that allows Redux to run asynchronously. So if you have to make an axios call in redux 
alone you would not be able to use it. It changes our action-creators by allowing us to have a start, success, and failure state 
instead of objects, this makes it more user friendly and easier to debug if something is wrong.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux. As to why, that is simple. It's a challenge that I am still struggling through. If I grasped it easier than context it 
would be the other way around but also Redux is going to help me in the long run into becoming a better developer. I really look
forward to using redux more until I mastered it!
