use("kec-crud");

//? logical operator
//? $and,$not,$nor,$or

//? find movies whose genre is "action"and rating is greater than 7

// db.movies.find(
//   {
//     $and: [
//       { genres: "Action" },
//       {
//         "rating.average": { $gt: 7 },
//       },
//     ],
//   },
//   {
//     name: 1,
//     genres: 1,
//     rating: 1,
//   }
// );

// db.movies.find({ genres: "Action", "rating.average": { $gt: 7 } });

//? find movies whose genres is "Crime" or network country is "United States"

// db.movies.find({
//   $or: [{ genres: "Crime" }, { "network.country.name": "United States" }],
// });

// *$nor => all applied condition should not match
//? find movies whose rating is neither greater than 7 nor genres is "Drama"

db.movies.find({
  $nor: [
    {
      "rating.average": {
        $gt: 7,
      },
    },
    {
      genres: "Drama",
    },
  ],
});
