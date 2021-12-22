const AccountModel = require("../database/models/account");

const findAccountByUsermane = async (username) => {
  const findAccount = await AccountModel.findOne({
    where: {
      username,
    },
  });
  return findAccount;
};

const createAccount = async (data) => {
  const newAccount = await AccountModel.create(data);

  return newAccount;
};

module.exports = { findAccountByUsermane, createAccount };
