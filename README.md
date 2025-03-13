
# React + Vite Movie App

This project is a minimal React setup powered by Vite, designed to demonstrate the process of building a movie search app using The Movie Database (TMDb) API. It allows users to search for movies, view popular movies, and interact with movie data efficiently.

## Features
- Search movies by name.
- View a list of popular movies.
- Movie details card with basic information (title, release date, and overview).
- Simple and clean UI built using React and styled with custom CSS.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **The Movie Database (TMDb) API**: Provides information about movies, shows, and more.
- **CSS**: Custom styles for the user interface.

## Prerequisites
Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (Version 12.0 or above)
- [npm](https://npmjs.com/) (Comes with Node.js) or [Yarn](https://yarnpkg.com/)

## Setup Instructions

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/movie-app.git
cd movie-app
```

### 2. Install dependencies:
Use either npm or Yarn to install the dependencies.

#### With npm:
```bash
npm install
```

#### With Yarn:
```bash
yarn install
```

### 3. Add your TMDb API key:
- Create an account on [TMDb](https://www.themoviedb.org/).
- Get your API key from [TMDb API](https://www.themoviedb.org/settings/api).
- Add the API key to the `api.js` file as follows:
```
API_KEY=your_api_key_here
```

### 4. Run the app:
Once dependencies are installed and the API key is added, you can run the app:

#### With npm:
```bash
npm run dev
```

#### With Yarn:
```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app in action!

## Folder Structure
- **public/**: Contains static assets like images and icons.
- **src/**: Contains the React components, services, and CSS files.
  - `App.js`: The main React component.
  - `components/`: Reusable React components like `MovieCard`.
  - `services/`: API services (e.g., fetching movies from TMDb).
  - `css/`: Custom CSS files for styling.

## Usage
- **Search for Movies**: Enter the name of the movie in the search bar to fetch related results.
- **View Popular Movies**: On page load, popular movies will be displayed.
- **Movie Cards**: Each movie is displayed with its title, release date, and a brief overview.

## Screenshots
![Home Page](./images/home-page.png)
![Movie Details](./images/movie-details.png)

*(Add your images here in the `images/` folder)*

## Contributing
Feel free to fork the repository and submit pull requests if you would like to contribute. Please ensure your code is well-tested and follows the project's coding standards.

## License
This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements
- [TMDb API](https://www.themoviedb.org/documentation/api) for providing movie data.
- [Vite](https://vitejs.dev/) for fast development setup.
- [React](https://reactjs.org/) for building the UI components.

## Contact
For questions or suggestions, feel free to open an issue or contact me at [sandeshamith73@gmail.com](mailto:sandeshamith73@gmail.com).
