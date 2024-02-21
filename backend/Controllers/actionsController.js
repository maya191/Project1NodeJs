const actionService = require("../Services/ActionsService");

const actionsCheck = async (req, res, next) => {
  const Name = req.headers["username"];
  if (!Name) return res.status(401).json({ message: "No Name provided" });

  const hasActions = await actionService.checkUserActions(Name);
  if (!hasActions) {
    return res.status(500).send("No More Actions For User!");
  } else {
    next();
  }
};

module.exports = actionsCheck;
