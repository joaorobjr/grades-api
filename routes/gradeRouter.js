import express from 'express';
import controller from '../controllers/gradeController.js';

const router = express.Router();

router.post('/', controller.create);
router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);
router.delete('/remove/', controller.removeAll);

export default router;
