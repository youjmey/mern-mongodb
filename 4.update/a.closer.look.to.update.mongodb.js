use("kec-crud");

// db.scores.find();

//? $set

// db.scores.updateOne(
//   { name: "Subham" },
//   {
//     $set: {
//       name: "Rajan",
//     },
//   }
// );
// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       age: 21,
//     },
//   }
// );

//? $unset => removes that field

// db.scores.updateOne(
//   {
//     name: "Rajan",
//   },
//   {
//     $unset: {
//       age: "",
//     },
//   }
// );
//?
//? update age of rajan to 30
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $set: {
//       age: 30,
//     },
//   }
// );
//? update age of suyasha to 40
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $set: {
//       age: 40,
//     },
//   }
// );
//? $inc => increases value of field value by provided value
// db.scores.updateMany(
//   {},
//   {
//     $inc: {
//       age: 5,
//     },
//   }
// );

// db.scores.insertOne({
//   name: "Smarika",
//   scores: [42, 65, 88],
//   points: [
//     {
//       sub: "Social",
//       point: 67,
//     },
//     {
//       sub: "Science",
//       point: 89,
//     },
//   ],
//   age: 30,
// });
// db.scores.updateMany(
//   {},
//   {
//     $inc: {
//       age: -10,
//     },
//   }
// );

// todo: research objectid
//? $mul  => multiply
// db.scores.updateOne(
//   { _id: ObjectId("66829a1394b9b1a9b107ee3e") },
//   {
//     $mul: {
//       age: 2,
//     },
//   }
// );

//? divide  age of suyasha by 2
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $mul: {
//       age: 1 / 2,
//     },
//   }
// );

//?     $rename  => renames field
// db.scores.updateMany(
//   {},
//   {
//     $rename: {
//       scores: "marks",
//     },
//   }
// );

//?  $min,$max
// ? $min => if field value is more than specified value, it sets min value to that field
// db.scores.updateMany(
//   {},
//   {
//     $min: {
//       age: 16,
//     },
//   }
// );

// ? $max => if field value is less than specified value, it sets max value to that field
// db.scores.updateMany(
//   {},
//   {
//     $max: {
//       age: 50,
//     },
//   }
// );

// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       luckyThings: {
//         number: 7,
//         color: "green",
//       },
//     },
//   }
// );

//? update lucky color of suyasha to "blue"
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $set: {
//       "luckyThings.color": "blue",
//     },
//   }
// );
//? update lucky number of smarika to 8
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $set: {
//       "luckyThings.number": 8,
//     },
//   }
// );

//? increase lucky number of rajan by 3
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $set: {
//       "luckyThings.number": 10,
//     },
//   }
// );

// db.scores.find();
