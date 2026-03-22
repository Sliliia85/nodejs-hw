import { Router } from "express";
import { getNotes } from "../controllers/notesController.js";
import { getNoteById } from "../controllers/notesController.js";
import { createNote } from "../controllers/notesController.js";
import { deleteNote } from "../controllers/notesController.js";
import { updateNote } from "../controllers/notesController.js";

const router = Router();

router.get('/notes', getNotes);
router.get('/notes/:noteId', getNoteById);
router.post('/notes', createNote);
router.delete('/notes/:noteId', deleteNote);
router.put('/notes/:noteId', updateNote);

export default router;


