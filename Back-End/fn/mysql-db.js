var mysql = require('mysql');

var createConnection = () => {
    return mysql.createConnection({
        host: '127.0.0.1',
    	port: '3306',
    	user: 'root',
    	password: 'T@ndung2609',
    	database: 'ilovexeom'
    });
}
exports.load = sql => {
    return new Promise((resolve, reject) => {
        var cn = createConnection();
        cn.connect();
        cn.query(sql, (err, rows, fields) => {
            if (err) {
            	reject(err);
            } else {
            	resolve(rows);
            }

            cn.end();
        });
    });
}

exports.insert = sql => {
    return new Promise((resolve, reject) => {
        var cn = createConnection();
        cn.connect();
        cn.query(sql, (err, value) => {
            if (err) {
                reject(err);
            } else {
                resolve(value);
            }

            cn.end();
        });
    });
}