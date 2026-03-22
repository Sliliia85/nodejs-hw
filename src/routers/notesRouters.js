import { Router } from "express";
import { getNotes } from "../controllers/notesController";
import { getNoteById } from "../controllers/notesController";
import { createNote } from "../controllers/notesController";
import { deleteNote } from "../controllers/notesController";
import { updateNote } from "../controllers/notesController";

const router = Router();

router.get('/notes', getNotes);
router.get('/notes/:noteId', getNoteById);
router.post('/notes', createNote);
router.delete('/notes/:noteId', deleteNote);
router.put('/notes/:noteId', updateNote);

export default router;


