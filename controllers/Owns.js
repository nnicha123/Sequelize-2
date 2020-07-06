const db = require('../models');
const { sequelize, Sequelize } = require('../models');
const Op = Sequelize.Op

const createOwns = async (req,res) => {
    const {customerName,customerAge} = req.body
    const {accountValue} = req.body
    const {branchName,branchSize} = req.body
    const {managerName,managerExperience} = req.body
    const {ownsDay} = req.body

    const newManager = await db.Manager.create({
        name:managerName,
        experience:managerExperience
    })
    const newBranch = await db.Branch.create({
        name:branchName,
        size:branchSize,
        manager_id:newManager.id
    })
    const newAccount = await db.Account.create({
        value:accountValue,
        branch_id:newBranch.id
    })
    const newCustomer = await db.Customer.create({
        name:customerName,
        age:customerAge
    })
    const newOwns = await db.Owns.create({
        account_id:newAccount.id,
        customer_id:newCustomer.id,
        day:ownsDay
    })
    res.status(201).send(newOwns)
}

const getOwns = async (req,res) => {
    const allOwns = await db.Owns.findAll({include:[{model:db.Branch},{model:db.Manager}]})
    res.status(200).send(allOwns)
}

module.exports = {
    createOwns,getOwns
}