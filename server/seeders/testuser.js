const User = require('../models/userSchema');

(async () => {
  const testUser = new User({
    email: 'test',
    password: 'test',
    cities: [],
  });
  const user = await testUser.save();
  // eslint-disable-next-line no-console
  console.log(user);
})();
