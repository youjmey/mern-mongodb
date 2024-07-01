use("kec-crud");

//? evaluation operator
//?  $regex,$expr

// db.movies.find({ name: { $regex: "top model", $options: "i" } });

db.movies.find({ summary: { $regex: "dark comical", $options: "i" } });
