use("kec-crud");
//? update on array

//? $push =>
//? add 92 on marks of Rajan
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $push: {
//       marks: 92,
//     },
//   }
// );

//? add 87 and 93 to marks od suyasha

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $push: {
//       marks: {
//         $each: [87, 93],
//       },
//     },
//   }
// );

//? $pop
//? 1 => removes item form end of array
//? -1 => removes item from stgarting of array

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $pop: {
//       marks: -1,
//     },
//   }
// );

//? $pull => removes item based upon condition
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $pull: {
//       marks: { $lt: 70 },
//     },
//   }
// );
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $pull: {
//       points: { sub: "Science" },
//     },
//   }
// );

//? pull item which has sub "science" and marks less than 88 from Rajans data
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $pull: {
//       points: { sub: "Science" },
//       points: { $lt: 88 },
//     },
//   }
// );
// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Science" },
//   {
//     $set: {
//       "points.$sub": "Maths",
//     },
//   }
// );

//? pullALL
//? we give concrete value which needs to be removed
// db.scores.updateOne(
//   { _id: ObjectId("66852011b75c74a809c97873") },
//   {
//     $pullAll: {
//       marks: [42, 65],
//     },
//   }
// );

//? push 78,67,83 to the marks array of rajan
// db.scores.updateOne(
//   { _id: ObjectId("66829a1394b9b1a9b107ee3c") },
//   {
//     $push: {
//       marks: { $each: [78, 67, 83] },
//     },
//   }
// );

//? $addToSet
// db.scores.updateOne(
//   {
//     name: "Rajan",
//   },
//   {
//     $addToSet: {
//       marks: { $each: [95, 83, 88, 52] },
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $addToSet: {
//       points: { sub: "Social", point: 83 },
//     },
//   }
// );

//? push an object with sub:science and point:92 on suyasha
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $push: {
//       points: { sub: "Science", points: 92 },
//     },
//   }
// );
//? push 57,88,96 on suyasha marks such that no value is duplicate
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $addToSet: {
//       marks: { $each: [57, 88, 96] },
//     },
//   }
// );
//? change rajans lucky color to orange
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $set: {
//       "luckyThings.color": "orange",
//     },
//   }
// );
//? pull last item from rajans points
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $pop: {
//       points: 1,
//     },
//   }
// );
//? decrease age of smarika by 20
// db.scores.updateOne(
//   { _id: ObjectId("66852011b75c74a809c97873") },
//   {
//     $inc: {
//       age: -20,
//     },
//   }
// );
//? push {sub:"c program",points :72} and {sub:"c++",point:65} on smarikas
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $push: {
//       points: {
//         $each: [
//           { sub: "C Program", points: 72 },
//           { sub: "C++", points: 65 },
//         ],
//       },
//     },
//   }
// );
//? divide age of Rajan by 2
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $mul: {
//       age: 1 / 2,
//     },
//   }
// );
// db.scores.find();
