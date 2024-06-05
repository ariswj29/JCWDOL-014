# State Management in React

## Key Points from The Slide

### Intro

1. We need to manage our data/state.
2. Local state is okay for simple project, bigger one needs a global state.
3. Global state means, our data/state is not tied to a specific component therefore all components have the same data access.

### useContext

1. useContext is the bone of state management in React.
2. Redux behaves similary like useContext.

### Local Storage

1. We can store data in the document's/browser storage object through localStorage API.
2. The stored data is persist across browser's window sessions.
3. The stored data is specific for the origin (protocol, hostname, and port) of the document.
4. It has four methods:
   - setItem()
   - getItem()
   - removeItem()
   - clear()

### Session Storage

1. The difference with local storage is, local storage data does not expire, whereas session storage cleared after the page session ends.
2. It has four methods just like local storage.

### Cookies

1. Cookies are small pieces of data created by a web server and stored on the user's device (computer, phone, tablet) when they visit a website.
2. They act like memory joggers for websites, enabling them to remember information about the user and their preferences.

### Redux and Redux Toolkit

1. Redux in some way make it easier to understand how our state behave when changes occur.
2. Not all apps need Redux.
3. Redux libraries and tools:

   - React-Redux
   - Redux Toolkit
   - Redux DevTools Extension

4. Redux data flow. Actions - State - View - Actions - ...repeat.
5. Whole state is stored in a single **store**. The only way to mutate that store is to create an **action**(decription of what happened) then **dispatch** it to the store. In the store, a **reducer** will calculate how the state should be changed. Then any components that connected to the store will be notified so they can rerender.

## Key Points from The React.dev

?
