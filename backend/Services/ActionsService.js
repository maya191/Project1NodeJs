const userRepo = require("../Repositories/userRepository");

const checkUserActions = async (Name) => {
  try {
    const allUsers = await userRepo.getAllUsers();
    const user = allUsers.find((u) => u.Name === Name);

    const MaxActions = user.NumOfActions;
    const ActionsSoFar = user.ActionsSoFar;

    if (MaxActions - ActionsSoFar <= 0) {
      console.log("No More Actions for this Day");
      return false;
    } else {
      await userRepo.increaseAction(user._id);

      return true;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const resetActions = async () => {
  await userRepo.resetActions();
};

module.exports = {
  checkUserActions,
  resetActions,
};
