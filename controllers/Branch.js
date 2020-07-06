const db = require('../models');
const { sequelize, Sequelize } = require('../models');
const Op = Sequelize.Op

const getAllBranches = async (req, res) => {
    const allBranches = await db.Branch.findAll({include:[db.Manager]})
    res.status(200).send(allBranches)
}
const createBranchAndManager = async (req, res) => {
    const {managerName,managerExperience} = req.body
    const { branchName, branchSize } = req.body
    const newManager = await db.Manager.create({
        name:managerName,
        experience:managerExperience
    })
    const newBranch = await db.Branch.create({
        name: branchName,
        size: branchSize,
        manager_id:newManager.id
    })
    res.status(201).send(newBranch)
}
const deleteBranch = async (req,res) => {
    const targetId = req.params.id
    await db.Branch.destroy({
        where:{id:targetId}
    })
    res.status(204).send()
}

module.exports = {
    getAllBranches, createBranchAndManager,deleteBranch
}