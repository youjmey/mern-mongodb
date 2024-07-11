use("kec-crud");

//? $lookup
//? to query between collections

// db.person.insertMany([
//   {
//     firstname: "Rohan",
//     lastname: "Gurung",
//     address: "Sydney",
//   },
//   {
//     firstname: "Rohil",
//     lastname: "khadka",
//     address: "udaypur",
//   },
//   {
//     firstname: "enish",
//     lastname: "Gurung",
//     address: "canada",
//   },
// ]);
// db.person.find();
// db.vehicle.insertMany([
//   {
//     model: "X",
//     brand: "Tesla",
//     builtyear: 2021,
//     ownerId: ObjectId("668bb342c3025ecdb20b3ad8"),
//   },
//   {
//     model: "Mustang",
//     brand: "Ford",
//     builtyear: 2023,
//     ownerId: ObjectId("668bb342c3025ecdb20b3ad9"),
//   },
//   {
//     model: "Creta",
//     brand: "Hyundai",
//     builtyear: 2024,
//     ownerId: ObjectId("668bb342c3025ecdb20b3ada"),
//   },
// ]);
// db.vehicle.aggregate([
//   {
//     $match: {
//       model: "Mustang",
//     },
//   },
//   {
//     $lookup: {
//       from: "person",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetails",
//     },
//   },
//   {
//     $project: {
//       model: 1,
//       brand: 1,
//       ownerFirstname: { $first: "$ownerDetails.firstname" },
//       ownerLastname: { $first: "$ownerDetails.lastname" },
//     },
//   },
//   {
//     $project:{
//         model:1,
//         brand:1,
//         ownerfirstname:{$concat:["$ownerFirstname", " " , "$ownerLastname"]}
//     }
//   }
// ]);

// db.person.aggregate([
//   {
//     $match: {
//       firstname: "enish",
//     },
//   },
//   {
//     $lookup: {
//       from: "vehicle",
//       localField: "_id",
//       foreignField: "ownerId",
//       as: "vehicleDetails",
//     },
//   },
//   {
//     $project: {
//       firstname: 1,
//       carModel: { $arrayElemAt: ["$vehicleDetails.model", 0] },
//       carBrand: { $arrayElemAt: ["$vehicleDetails.brand", 0] },
//     },
//   },
// ]);

// db.vehicle.insertOne({
//   model: "Y",
//   brand: "Tesla",
//   builtYear: 2020,
//   ownerId: ObjectId("668bb342c3025ecdb20b3ada"),
// });
// db.vehicle.find();

// db.person.aggregate([
//   {
//     $match: {
//       firstname: "enish",
//     },
//   },
//   {
//     $lookup: {
//       localField: "_id",
//       from: "vehicle",
//       foreignField: "ownerId",
//       as: "vehicleData",
//     },
//   },
//   {
//     $project: {
//       firstname: 1,
//       lastname: 1,
//       models: "$vehicleData.model",
//       "vehicleData.model": 1,
//       "vehicleData.brand": 1,
//       lastCarBrand: { $last: "$vehicleData.brand" },
//     },
//   },
// ]);
//? find owner of ford mustang car
db.vehicle.aggregate([
  {
    $match: {
      model: "Mustang",
    },
  },
  {
    $lookup: {
      localField: "ownerId",
      from: "person",
      foreignField: "_id",
      as: "vehicleData",
    },
  },
  {
    $project: {
      model: 1,
      brand: 1,
      ownerFirstname: { $first: "$vehicleData.firstname" },
      ownerLastname: { $first: "$vehicleData.lastname" },
    },
  },
]);
