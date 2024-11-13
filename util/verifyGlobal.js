const Group = require("../models/groupModel");

const verifyGlobal = async () => {
  const global = await Group.findOne({
    where: {
      id: 1,
      groupName: "Global",
    },
  });
  if (!global) {
    await Group.create({
      id: 1,
      groupName: "Global",
    });
  }
};

module.exports = verifyGlobal;
