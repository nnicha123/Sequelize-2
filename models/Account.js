module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('Account',{
        value:{
            type:DataTypes.FLOAT
        }
    },{
        tableName:'accounts'
    })
    return model;
}
