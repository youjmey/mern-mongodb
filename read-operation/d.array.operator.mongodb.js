use("kec-crud");

//* array operators
//? $all
//? $elemMatch
//? $size

//? find movies whose genre includes both "Drama" and "Comedy"

db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Comedy" }] });
//? if same field ma "$and" use bhairako xa ra tyo field chai array ho vane:
//? we can use $all

// db.movies.find({ genres: ["Drama", "Comedy"] });

// *$size
//? we cannot provide range to size
//? must provide concrete value

//? find movies whose genre size is 3
db.movies.find({ genres: { $size: 3 } });
