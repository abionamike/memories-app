import express from 'express';
import { listMemories, getAMemory,createMemories, updateMemories, deleteMemories } from '../controllers/memoryController.js'

const router = express.Router();

router.get('/', listMemories);
router.post('/', createMemories);
router.get('/:id', getAMemory);
router.put('/:id', updateMemories);
router.delete('/:id', deleteMemories);

export default router;