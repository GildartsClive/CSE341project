//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const users = ['Mic', 'Jimmy', 'Ann'];

router.post('/addUser', (req, res, next) => {
  const newUser = req.body.newUser;
  users.push(newUser);
  //console.log(newUser);
  res.redirect('/ta02/');
});

router.post('/removeUser', (req, res, next) => {
  //console.log(req.body.removeUser);
  const user = req.body.removeUser;
  
  const indexNum = users.indexOf(user);
  if (indexNum !== -1 ) {
      users.splice(indexNum, 1);
  }
  res.redirect('/ta02/');
});

router.get('/',(req, res, next) => {
  res.render('pages/ta02', {
      title: 'Team Activity 02',
      users: users,
      path: '/ta02', // For pug, EJS
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS
  });
});

module.exports = router;