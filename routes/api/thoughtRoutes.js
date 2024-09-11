const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');

// GET all thoughts and POST a new thought
router.route('/')
  .get(getThoughts)
  .post(createThought);

// GET, PUT, DELETE a single thought by ID
router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// POST and DELETE a reaction by thought and reaction IDs
router.route('/:thoughtId/reactions')
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
