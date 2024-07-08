use("kec-crud");

//? $unwind
//? $unwind => undo or be undone after winding oe being wind

// db.products.insertOne({
//   name: "Bottle",
//   price: 400,
//   availableColor: ["blue", "green", "white"],
// });

// db.products.find();

// db.products.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $unwind: "$availableColor",
//   },
// ]);
// db.learner.insertOne({
//   name: "Smriti",
//   scores: [
//     {
//       sub: "Computer Network",
//       marks: 68,
//     },
//     {
//       sub: "Project Management",
//       marks: 60,
//     },
//     {
//       sub: "Organization and MAnagement",
//       marks: 58,
//     },
//   ],
// });
// db.learner.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $unwind: {
//       path: "$scores",
//     },
//   },
//   {
//     $sort: {
//       "scores.marks": 1,
//     },
//   },
// ]);

// todo one more example
