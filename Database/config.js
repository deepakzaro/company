const { Sequelize} =require ('sequelize');

const sequelize = new Sequelize(
    'company',
    'root',
    'password',
    {
        host:'localhost',
        dialect:'mysql',
    }
);

module.exports = sequelize