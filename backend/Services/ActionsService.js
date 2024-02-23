const userRepo = require("../Repositories/userRepository");
const jf = require("jsonfile");

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

const logAction = async (Name) => {
  //get user id
  const allUsers = await userRepo.getAllUsers();
  const user = allUsers.find((u) => u.Name === Name);

  const currentDate = new Date();
  // const currentDay = currentDate.getDate();
  const actionAllowed = user.NumOfActions - user.ActionsSoFar;
  const newAction = {
    id: user._id,
    maxActions: user.NumOfActions,
    date: currentDate.toLocaleDateString(),
    actionAllowed: actionAllowed,
  };
  //get the json from the log file
  const data = await jf.readFile("../backend/jsonData/logs.json");
  //add newAction to the array of logs
  data.actions.push(newAction);
  //write back to log file
  await jf.writeFile("../backend/jsonData/logs.json", data);
};

module.exports = {
  checkUserActions,
  resetActions,
  logAction,
};
