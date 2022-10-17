import express from 'express';
import User from '../schemas/user.js';

const router = express.Router();

// Retrieves all users
router.get('/', async (req, res, next) => {
  User.find().sort('name').exec((err, users) => {
    if (err) return next(err);
    req.body = {};
    req.body.message = 'Users retrieved';
    req.body.users = users;
    next();
  });
});

// Retrieves a specif user
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  User.find({ _id: id }).exec((err, users) => {
    if (err) return next(err);
    res.send(users);
  });
});

// Create a new user
router.post('/', (req, res, next) => {
  const user = new User(req.body);
  User.save((err, savedUser) => {
    if (err) return next(err);
    res.send(savedUser);
  });
});

// Modify existing user
router.patch('/:id', (req, res, next) => {
  const id = req.id;
  const params = req.params;
  User.findByIdAndUpdate({ _id: id }, params, (err, modifiedUser) => {
    if (err) return next(err);
    res.send(modifiedUser);
  });
});

// Delete an existing user
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  User.deleteOne({ _id: id }, (err, deletedUser) => {
    if (err) return next(err);
    res.send(deletedUser);
  });
});

router.delete('/', (req, res, next) => {
  User.deleteMany({}, (err, deletedUser) => {
    if (err) return next(err);
    res.send(deletedUser);
  });
});

router.use((req, res, next) => {
  const body = { ...req.body };
  res.send(body);
});

export default router;
