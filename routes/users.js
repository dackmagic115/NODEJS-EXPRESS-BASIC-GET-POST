const router = require("express").Router();
const users = require("../service/users");
const { check, validationResult } = require("express-validator");

users.getUser;
router.get("/", (req, res) => {
  try {
    const userInfo = users.getUser();
    res.json({ userInfo });
  } catch (error) {
    res.status(500).send("Something broke!");
  }
});

router.get("/:userId", (req, res, next) => {
  const { userId } = req.params;
  const user = users.getOne(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send({ errorMsg: "User not found" });
  }
});

router.post(
  "/",
  [
    check("firstname", "กรุณากรอกข้อมูล").not().isEmpty(),
    check("lastname", "กรุณากรอกข้อมูล").not().isEmpty(),
    check("birthDate", "กรุณากรอกข้อมูล").isISO8601().not().isEmpty(),
  ],
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const { firstname, lastname, birthDate } = req.body;

    try {
      const user = users.addUser({ firstname, lastname, birthDate });
      res.json({ user });
    } catch (error) {
      res.status(500).send("Something broke!");
    }
  }
);

module.exports = router;
