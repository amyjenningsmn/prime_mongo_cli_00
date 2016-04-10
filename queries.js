// 2.
db.bios.find({ awards: { $exists: true } }).pretty();

// 3.
db.bios.find({ awards: { $exists: false } }).pretty();

// 4.
db.bios.find({$or: [{"contribs": "OOP"}, {"contribs":"UNIX"}]}).pretty();

// 5.
db.bios.find({ "awards": { $elemMatch: { "award" : "Turing Award" } } }).pretty();

// 6.
db.bios.find({ $and: [ { "_id": { $lt: 7, $gt: 3 }} ] } ).pretty();
// I wasn't sure if you meant include 3 and 7. ^^Code above doesn't include.
// Code below does include 3 and 7.
db.bios.find({ $and: [ { "_id": { $lte: 7, $gte: 3 }} ] } ).pretty();

// 7.
db.bios.find({ "awards": { $elemMatch: { "year" : { $lt: 2000 } }}}).pretty();

// 8.
db.bios.find({$and: [{ "birth": {$exists: true}}, { "death": {$exists: false}}] }).pretty();
