# Notes app

Build a notes app as a frontend, single page web app.

```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want
```

```
As a programmer
I can create a new note
So I can record something I need to remember
```

```
As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```

### Learning objectives covered

- Write unit tests without using a testing library.
- Use javascript classes.
- Use the module pattern to wrap your code.
- Write unit tests without using a testing library.
- Use javascript classes.
- Interpolate data into static HTML.
- Create a minimal HTML page.
- Serve a static website.
- Insert content into the DOM.
- Integrate model, view and controller code.

### Steps to complete the challenge

- TDD a note object that fulfils the specification below.
- TDD a note list object that fulfils the specification below.
- TDD the note list view object that fulfils the specification below.
- Create an `index.html` file containing the minimal HTML structure.
- Add a `div` that has an `id` attribute set to `app` and contains the text `hello`.
- Install node
- Install `http-server` from npm
- Run `http-server` to serve your `index.html`.
- Visit `http://localhost:8080/` in a browser to view your `index.html` page that says `hello`.
- Create a `note-controller.js` file and use a `script` tag to load it in the `index.html` file.
- Add code that gets hold of the `app` `div` element in your `index.html` page.
- Add code that can change the `app` greeting from `hello` to `howdy`.
- Spike code that fulfils the specification below.
- Visit `http://localhost:8080` in your browser and see `Favourite drink: seltzer`.
- Delete your code and rewrite it using a TDD approach.
