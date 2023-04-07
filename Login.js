const User = require("../models/user");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const { Router } = require("express");

Router.post("/", async (req, res) =>{
    const {email, password } = req.body;

    let user = await User.findOne({ email, password });
    if (!user) return res.status(400).send("Invalid email or password");

    let newUser = _.pick(user, ["_id", "name", "email"]);
    const token = jwt.sign(newUser, process.env, JWTSECRET, { expireIn: "1h" });

    res.send({ message: "Login Successfull!", token: token });
});

module.exports = router;