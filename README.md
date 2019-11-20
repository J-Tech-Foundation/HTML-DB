## HTML-DB

---

[![NPM](https://nodei.co/npm/html-db.png)](https://nodei.co/npm/html-db/)

![npm](https://img.shields.io/npm/dw/html-db)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/html-db)
![npm (tag)](https://img.shields.io/npm/v/html-db/latest)

requirements: fs (nodejs), child-process (nodejs)

---

## DOCS

---

require:

```js
var db = require("html-db");
```

access pure database:

```js
db.db; //if you stored something, it will not display {} or whatever is in the default .htdb file
```

how to create a database:

```js
db.createDB("NAME__HERE"); //creates a database
```

**table**

---

- create

```js
db.ref.create("database_name", "table_name");
```

- fetch

```js
db.ref.fetch("database_name", "table_name");
```

- insert

```js
db.ref.insert("database_name", "table_name", "row", "value");
```

- delete

```js
db.ref.delete("database_name", "table_name");
```

___

push to database :
```js
db.pushDB("DATABASE", "TABLE", "VALUE")
```

save:
```js
db.save("FILENAME");
```

load:
```js
db.load("FILENAME")
```
___
<br>
<br>

if we have missed anything, please let us know via our gitter