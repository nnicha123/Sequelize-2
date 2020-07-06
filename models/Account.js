module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('Account',{
        value:{
            type:DataTypes.FLOAT
        }
    },{
        tableName:'accounts',
        timestamps:false
    })
    model.associate = models => {
        model.belongsTo(models.Branch, {foreignKey:'branch_id'})
        model.belongsToMany(models.Customer,{through:models.Owns,foreignKey:'account_id'})
    }
    return model;
}
