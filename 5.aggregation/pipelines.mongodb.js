use("kec-crud");

//? aggregation => powerful query tool
//?  uses pipeline stage
//? $match
//? $project
//? $sort
//? $skip
//? $limit
// db.movies.aggregate([
//   {
//     $match: { name: "Glee" },
//   },
// ]);
// db.movies.aggregate([
//   {
//     $match: {
//       genres: "Action",
//       "rating.average": { $gt: 9 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       rating: 1,
//     },
//   },
// ]);
// db.movies.find();

//? find movies whose genres is crime or network country is united states
// db.movies.aggregate([
//   {
//     $match: {
//       $or: [{ genres: "Crime" }, { "network.country": "United States" }],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       networkCountry: "$network.country.name",
//     },
//   },
// ]);

//? find movies whose genre includes both drama and comedy and project namae and genre
// db.movies.find();
// db.movies.aggregate([
//   {
//     $match: {
//       $and: [{ genres: "Drama" }, { genres: "Comedy" }],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);
//? alternate code
// db.movies.aggregate([
//   {
//     $match: {
//       genres: { $all: ["Drama", "Comedy"] },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);

//? $sort => arranges data in either ascending or descending order
//? 1 => ascending sort
//? -1 => descending sort

// yedi sort grda duita id same xa vane name le pani sort grna milxa
// db.movies.aggregate([
//   { $match: {} },
//   {
//     $sort: {
//       id: -1,
//     },
//   },
//   {
//     $project: {
//       id: 1,
//       name: 1,
//     },
//   },
// ]);

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       name: -1, // descending sort
//     },
//   },
//   {
//     $project: {
//       name: 1,
//     },
//   },
// ]);

//? $limit => number of documents to be returned

// db.movies.aggregate([
//   { $match: {} },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   {
//     $limit: 5,
//   },
//   {
//     $project: {
//       id: 1,
//       _id: 0,
//       name: 1,
//     },
//   },
// ]);

//? find 5 movies whose rating is greater than 8 and id sorted in ascending order
db.movies.aggregate([
  {
    $match: {
      "rating.average": { $gt: 8 },
    },
  },
  {
    $sort: {
      id: 1,
    },
  },
  {
    $limit: 5,
  },
  {
    $project: {
      id: 1,
      _id: 0,
      name: 1,
    },
  },
]);
