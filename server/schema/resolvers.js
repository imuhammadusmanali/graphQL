const { UserList, MovieList } = require('../Data');
const _ = require('lodash');

const resolvers = {
  Query: {
    // USER RESOLVERS
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = UserList.find((user) => user.id === Number(id));

      return user;
    },
    // MOVIE RESOLVERS
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = MovieList.find((movie) => movie.name === name);

      return movie;
    },
  },
  User: {
    favMovies: () => {
      const movies = MovieList.filter(
        (movie) => movie.yearPublished >= 2015 && movie.yearPublished <= 2020
      );

      return movies;
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const prevId = UserList[UserList.length - 1].id;

      user.id = prevId + 1;

      UserList.push(user);

      return user;
    },

    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;

      const user = UserList.find((user) => user.id === Number(id));
      user.username = newUsername;

      return user;
    },

    deleteUser: (parent, args) => {
      const id = args.id;

      _.remove(UserList, (user) => user.id === Number(id));

      return null;
    },
  },
};

module.exports = { resolvers };
