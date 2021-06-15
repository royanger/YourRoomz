import express from 'express'
const router = express.Router()

/**
 * @desc    Confirm user is logged in
 * @route   GET /auth/authcheck
 * @access  PUBLIC
 */
const authCheck = (req, res) => {
  console.log('checking if user is logged in ')
  if (req.user) {
    console.log('user logged in')
    res.status(200).json({
      user: {
        isAuthenticated: true,
        email: req.user.email,
      },
    })
  } else {
    res.status(200).json({
      user: {
        isAuthenticated: false,
      },
    })
  }
}

export { authCheck }
