use("kec-crud");

// to insert data
//? insertOne
//? insertMany

// db.student.insertOne({
//   name: "rajan",
//   address: "dhapakhel",
// });
// db.student.insertOne({
//   _id: 1,
//   name: "patrik",
//   address: "godawari",
// });
// db.student.insertMany([
//   {
//     name: "prashant",
//     address: "pkr",
//   },
//   {
//     name: "siddhant",
//     address:"imadol",
//   },
// ]);
//? read operation
//? findOne
//? find
// db.student.find();
// db.student.find({ address: "imadol" });

// db.student.findOne({ name: "patrik" });

// db.student.findOne({ address: "imadol" });

// db.student.insertOne({
//   _id: 1,
//   name: "patrik",
//   address: "godawari",
// });
// db.student.find({ _id: 1 });
// db.student.find();
// db.student.find({ _id: ObjectId("667e96f85f1107dabb34c0d3") });

//? delete => remove data
//? deleteOne
//? deleteMany

// db.student.deleteOne({ address: "imadol" });

// db.student.deleteMany({address:"godawari"})

//? update => to change field data(s)
//? updateOne
//? updateMany

// db.student.updateOne(
//   {
//     name: "rajan",
//   },
//   {
//     $set: {
//       name: "raj",
//     },
//   }
// );

// db.student.updateMany(
//   { address: "pkr" },
//   {
//     $set: {
//       address: "ktm",
//     },
//   }
// );

// db.studetn.updateOne(
//   { name: "sita" },
//   {
//     $set: {
//       address: "imadol",
//     },
//   },
//   {
//     upsert: true,
//   }
// );
db.student.find();
