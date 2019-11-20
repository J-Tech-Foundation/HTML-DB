let cp = require("child_process");
let _ = require("lodash")._;

let Disc = {}; //  main storage
let fake = { Disc: {} }; //  storage creator & backup
let items = {
  $config: process.env.db_config || 2, //  set default by package, optional user
  $config_path: process.env.db_path || "/", //  path to db config file, set by user
  $db_names: process.env.db_names || "/", //  default set by package
  $db_max: process.env.db_max || 10 //  max arrays, default package optional user
};
let db = (Disc = fake.Disc);
//  checks for correct variables
// NOT INCLUDED:  items

if (db !== (Disc || fake.Disc))
  console.error("#~ERR! UNABLE TO CREATE DATABASE @src/0.0.1.common.js ERR!~#");
if (fake.Disc !== (Disc || db))
  console.error("#~ERR! UNABLE TO CREATE DATABASE @src/0.0.1.common.js ERR!~#");
let create = name => (db[name] = {}); //  so the system creates a new table for the database
let push = (name, array, i) => (db[name][array] = _.concat(db[name][array], i)); //  adds new item to array
let table = {
  //lets not make this a competition again, ok?
  create: (name, n) => (db[name][n] = []), //oi
  delete: (name, n) => delete db[name][n],
  insert: (name, n, aft, val) => db[name][n][aft].push(val),
  fetch: (name, n) => db[name][n]
};
let Fake = name => {
  db[name]["refresh"] = [];
  delete db[name]["refresh"];
}; //will refresh db

module.exports = {
  createDB: n => create(n),
  ref: table,
  pushDB: (n, o, i) => push(n, o, i),
  refresh: n => null,
  db: db,
  save: n =>
    cp.execSync(
      `echo "${JSON.stringify(module.exports.db)}" > ${n.toString()}`
    ),
  load: n => (db = cp.execSync(`cat ${n.toString()}`))
};
