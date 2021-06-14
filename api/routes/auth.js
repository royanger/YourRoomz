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
        email: req.user.email,
      },
    })
  } else {
    // TODO handle not logged in state
    //res.status(401).send('There was an error')
    console.log('user is not logged in')
    res.status(200).send('needs updating')
  }
}

export { authCheck }
