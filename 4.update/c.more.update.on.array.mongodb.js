use("kec-crud");

//? $ operator
//? $ => element which matched the document
// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Science" },
//   {
//     $set: {
//       "points.$.sub": "Statistics",
//     },
//   }
// );
db.scores.updateOne(
  { name: "Suyasha", "points.sub": "Science" },
  {
    $inc: {
      "points.$.points": 3,
    },
  }
);
//? update sub from "c++" to "mern " and point to 69 from smarika
// db.scores.updateOne(
//   { name: "Smarika", "points.sub": "mern" },
//   {
//     $set: {
//       "points.$.sub": "c++",
//       "points.$.points": 69,
//     },
//   }
// );
//? update points to 70 fro each sub of smarika
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $set: {
//       "points.$[].points": 70,
//     },
//   }
// );

//? update point to 75 for each sub which
//? has point below 70 for suyasha
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $min: {
//       "points.$[element].points": 75,
//     },
//   },
//   {
//     arrayFilters: [{ "element.points": { $lt: 70 } }],
//   }
// );

//? decrease each marks of rajan by 10
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $inc: {
//       "marks.$[]": -10,
//     },
//   }
// );
//? set 57 marks to 77 to suyashas marks
// db.scores.updateOne(
//   { name: "Suyasha", marks: 57 },
//   {
//     $set: {
//       "marks.$": 77,
//     },
//   }
// );
//? decrease each marks which are greater than
// ? 60 by 10 marks for smarika
db.scores.updateOne(
  { name: "Smarika" },
  {
    $inc: {
      "marks.$[elements]": -10,
    },
  },
  {
    arrayFilters: [{ elements: { $gt: 80 } }],
  }
);
db.scores.find();
