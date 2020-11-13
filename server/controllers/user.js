const User = require('../models/userSchema');

const getCities = async (req, res) => {
  const { userId } = req.query;
  try {
    const user = await User.findById(userId);
    if (!user) {
      // eslint-disable-next-line no-console
      console.log('---> error finding user', err);
      res.status(404);
      res.send({ error: '404', message: 'user not found' });
    }
    res.status(200);
    res.send(user.savedCities);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('---> error posting new city', err);
    res.status(500);
    res.send({ err, message: 'Could not get cities' });
  }
};

const postCity = async (req, res) => {
  const { userId, city } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(404);
      res.send({ error: '404', message: 'user not found' });
    }
    user.savedCities = [...user.savedCities, city];
    const updatedUser = await user.save();
    res.status(201);
    res.send(updatedUser.savedCities);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('---> error posting new city', err);
    res.status(500);
    res.send({ err, message: 'Could not get cities' });
  }
};

module.exports = {
  getCities,
  postCity,
};
