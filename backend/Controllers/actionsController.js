const actionService = require("../Services/ActionsService");
const jf = require("jsonfile");

const actionsCheck = async (req, res, next) => {
  const Name = req.headers["username"];
  if (!Name) return res.status(401).json({ message: "No Name provided" });

  const hasActions = await actionService.checkUserActions(Name);

  if (!hasActions) {
    return res.status(500).send("No More Actions For User!");
  } else {
    //get user id
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const actionAllowed = user.NumOfActions - user.ActionsSoFar;
    const newAction = {
      id: user._id,
      maxActions: user.maxActions,
      date: currentDay.toString(),
      actionAllowed: actionAllowed,
    };
    //get the json from the log file
    const data = await jf.readFile("../jsonData/logs.json");
    //add newAction to the array of logs
    data.actions.push(newAction);
    //write back to log file
    await jf.writeFile("../jsonData/logs.json", data);
    next();
  }
};

module.exports = actionsCheck;
