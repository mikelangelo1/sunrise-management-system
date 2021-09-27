const router = require("express").Router();
const User = require("../../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator');

// // Register
// router.post("/", auth,async (req, res) => {
//   try {
//     const { email, password, confirmPassword } = req.body;

//     // Validation
//     if (!email || !password || !confirmPassword)
//       return res
//         .status(400)
//         .json({ errorMessage: 'Please enter all required fields.' });

//     if (password.length < 6)
//       return res
//         .status(400)
//         .json({
//           errorMessage: "Please enter a password of at least 6 characters."
//         });
//     if (password !== confirmPassword)
//       return res.status(400).json({ errorMessage: "Passwords don't match" });

//     const existingUser = await User.findOne({ email })
//     if (existingUser)
//       return res.status(400).json({ errorMessage: "User already exist" });

//     // Hash the password
//     const salt = await bcrypt.genSalt();
//     const passwordHash = await bcrypt.hash(password, salt);
//     console.log(passwordHash)

//     // Save a new user account to the db
//     const newUser = new User({
//       email,
//       passwordHash,
//     });
//     const savedUser = await newUser.save();
//     console.log(savedUser)

//     // Sign the token 

//     const token = await jwt.sign(
//       {
//         user: savedUser._id,
//       },
//       'fZJ9K9c55hS(y7Qt)YB5QSq$kp9TP&_w%!(5v8&aVHM3E)j7n'
//     );
//     console.log(token)

//     // Send the token in a HTTP-only cookie
//     res.cookie("token", token, {
//       httpOnly: true,
//     }).send();


//   } catch (err) {
//     console.error(err);
//     res.status(500).send();
//   }
// });


// @route    POST api/user
// @desc     Register user
// @access   Public
router.post(
  '/',
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  async (req, res) => {
    // console.log(req.body)
    const errors = validationResult(req);
    // console.log(req.body)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }


      user = new User({
       email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);




module.exports = router;