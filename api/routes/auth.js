import express from 'express'
const router = express.Router()

/**
 * @desc    Confirm user is logged in
 * @route   GET /auth/authcheck
 * @access  PUBLIC
 */
const authCheck = (req, res) => {
  if (req.user) {
    res.status(200).json({
      user: {
        isAuthenticated: true,
        email: req.user.email,
        givenName: req.user.givenName,
        familyName: req.user.familyName,
        displayName: req.user.displayName,
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

/**
 * @desc    Log user out by destroying req.user object
 * @route   POST /auth/logout
 * @access  PUBLIC
 */
const authLogout = (req, res) => {
  req.logout()
  res.status(200).send('User logged out')
}

export { authCheck, authLogout }
