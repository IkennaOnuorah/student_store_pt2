const express = require("express")
const User = require("../models/user")
const store = require("../models/store")
const router = express.Router()

router.post("/", async (req, res, next) => {
  try {
    const user = await User.login(req.body)
  } catch (err) {
    next(err)
  }
})

router.get("/register", async (req, res, next) => {
  try {
    const user = await User.register({ ...req.body, isAdmin: false })
  } catch (err) {
    next(err)
  }
})

router.get("/register", async (req, res, next) => {
    try {
      const user = await User.register({ ...req.body, isAdmin: false })
    } catch (err) {
      next(err)
    }
  })

  router.put("/register", async (req, res, next) => {
    try {
      const user = await User.register({ ...req.body, isAdmin: false })
    } catch (err) {
      next(err)
    }
  })

  router.post("/register", async (req, res, next) => {
    try {
      const user = await User.register({ ...req.body, isAdmin: false })
    } catch (err) {
      next(err)
    }
  })

module.exports = router