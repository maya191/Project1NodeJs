const actionService = require("../Services/ActionsService");

let lastResetDay = null;

// Function to reset actions at a specific time after midnight (e.g., 1:07 AM)
const resetUserActions = async (req, res, next) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  // Check if the last reset day is not set or if the current day is different from the last reset day
  if (!lastResetDay || currentDay !== lastResetDay) {
    try {
      // Call the service to reset actions for all users
      await actionService.resetActions();
      console.log("Actions reset to 0 for all users.");
      next();

      // Update the last reset day
      lastResetDay = currentDay;
    } catch (error) {
      console.error("Error resetting actions:", error);
    }
  }
};

module.exports = resetUserActions;
