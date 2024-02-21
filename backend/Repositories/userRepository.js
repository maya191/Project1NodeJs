const User = require("../Models/UserModel");

const getAllUsers = () => {
  return User.find();
};

const getUserbyId = async (id) => {
  try {
    const user = await User.findById(id);
    if (user) {
      return user;
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.error("Error");
  }
};

const getMaxActions = async (id) => {
  try {
    const user = await User.findById(id);
    if (user) {
      return user.NumOfActions;
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.error("Error");
  }
};
const getActionsSoFar = async (id) => {
  try {
    const user = await User.findById(id);
    if (user) {
      return user.ActionsSoFar;
    } else {
      console.log("User not found");
      return -1;
    }
  } catch (error) {
    console.error("Error");
    return -1;
  }
};
const increaseAction = async (id) => {
  var NumOfActions = await getActionsSoFar(id);
  if (NumOfActions >= 0) {
    var actionsObj = { ActionsSoFar: ++NumOfActions };
    await User.findByIdAndUpdate(id, actionsObj);
  }
};

const resetActions = async () => {
  try {
    await User.updateMany({}, { ActionsSoFar: 0 });
  } catch (err) {
    console.error("Error:", err);
  }
};

module.exports = {
  getAllUsers,
  getUserbyId,
  getMaxActions,
  getActionsSoFar,
  increaseAction,
  resetActions,
};
