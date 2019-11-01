1. What problem does the context API help solve?
    
    Context API helps to share data without having to pass it to every component manually.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    -Actions are full of information that give the app data
    -Reducers help updating the state more predicably
    -Store is where the state of the app exists. It is known as the single source of truth because this is where all of the imutable data is kept. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application State can be used globally throughout the app and is good to use when many components are in need of the same data. 
    Component state is used for one component and is used locally just for that component. this would be good to use when the data was only need for that component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux thunk is a middleware that returns a function and delay the dispatch of an action. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    My favorite is redux because it keeps things more organized and more predictable. 