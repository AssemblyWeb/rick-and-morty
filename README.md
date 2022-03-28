# Rick and Morty's Character Cards API

This app is a small dashboard that allows the visualization of the characters of "Rick and Morty" and that it is possible to search for them easily and also save the characters on a list.

## Installation

1. Download the repository.
2. Install the dependencies with `npm install`.
3. Start the application with `npm start`.

## Technologies used

- React (router, axios) and CSS (Bootstrap).

## Main features

- The app shows the first 20 characters of the [rickandmortyapi](https://rickandmortyapi.com/documentation/#get-all-characters)
- Detail of the character visible in a modal (by clicking on an element of the list)
- It's possible to search through the characters
- Pagination
- Add / remove a character to the list of favorite characters
- See the list of favorite characters

### Search 🔍

- If no characters match the search text, a warning message will be displayed.

### Navigation 🏄

- The are 2 pages (Characters & Favorites) managed by react-router
