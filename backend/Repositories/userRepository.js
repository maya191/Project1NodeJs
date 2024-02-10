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
const decreaseAction = async (id) => {
  const NumOfActions = await getActionsSoFar(id);
  if (NumOfActions >= 0) {
    const actionsObj = { ActionsSoFar: NumOfActions++ };
    await User.findByIdAndUpdate(id, actionsObj);
  }
};

module.exports = {
  getAllUsers,
  getUserbyId,
  getMaxActions,
  getActionsSoFar,
  decreaseAction,
};
