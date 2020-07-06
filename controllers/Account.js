const db = require('../models');
const { sequelize, Sequelize } = require('../models');
const Op = Sequelize.Op

const getAccountsAndBranchesAndManager = async (req,res) => {
    const allAccountsAndBranchesAndManager = await db.Account.findAll({include:[db.Branch]})
    res.status(200).send(allAccountsAndBranchesAndManager)
}
const createAccountsAndBranchesAndManager = async(req,res) => {
    const {managerName,managerExperience} = req.body
    const { branchName, branchSize } = req.body
    const {accountValue} = req.body

    const newManager = await db.Manager.create({
        name:managerName,
        experience:managerExperience
    })
    const newBranch = await db.Branch.create({
        name: branchName,
        size: branchSize,
        manager_id:newManager.id
    })
    const newAccount = await db.Account.create({
        value:accountValue,
        branch_id:newBranch.id
    })
    res.status(201).send(newAccount)
}

module.exports = {
    getAccountsAndBranchesAndManager,createAccountsAndBranchesAndManager
}