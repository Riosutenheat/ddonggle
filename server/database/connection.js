const db = require('mariadb');
const conf = require('../../config')
const mybatisMapper = require('mybatis-mapper');
var format = {language: 'sql', indent: '  '};

const dbPool = db.createPool({
    host: conf.dbInfo.host,
    port: conf.dbInfo.port,
    user: conf.dbInfo.user,
    password: conf.dbInfo.password,
    database: conf.dbInfo.database,
    connectionLimit: conf.dbInfo.connLimit
});
mybatisMapper.createMapper([ './database/mapper/data.xml' ]);

async function dbQuerying (query) {
    let conn, rows;
    try{
        conn = await dbPool.getConnection();
        rows = await conn.query(query);
    }
    catch(err){
        // 추후 로그 필요
        console.log(err)
    }
    finally{
        if(conn) conn.end();
        return rows;
    }
}

// 대쉬보드 all 데이터 가져오기
function GetDashboardData() {
    var query = mybatisMapper.getStatement('data', 'GetDashboardData', null, format);
    return dbQuerying(query);
}

module.exports = {
    getDashboardData: GetDashboardData
};
