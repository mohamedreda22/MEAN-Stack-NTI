const express = require("express");
const router = express.Router();
const userTypeController = require("../controllers/userType.controller");
const auth = require("../utilis/auth");

router.post("/", auth.authMW, userTypeController.createUserType);
router.get("/", auth.authMW, userTypeController.getUserTypes);
// router.get("/:id", auth.authMW, userTypeController.getUserType);
// router.put("/:id", auth.authMW, userTypeController.updateUserType);
// router.delete("/:id", auth.authMW, userTypeController.deleteUserType);

module.exports = router;
