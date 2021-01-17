var db = openDatabase('dbProPose', '1.0', 'dbProPoseCCR2021', 2 * 1024 * 1024);

db.transaction(tx => {
    tx.executeSql('CREATE TABLE users (ID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, mail TEXT, password TEXT, type INTEGER, access INTEGER)');
 });