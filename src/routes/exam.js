import { Router } from 'express'

const router = Router();

const exams = [
  { 
    id: 1, 
    name: 'Intprog Exam',
  },
];


router.get('/exam-group', (req, res) => 
  res.json({ message: "Group E API" })
)

/**
 * @author Christian Yancha
 */
router.get('/exams', (req, res) => {

});

/**
 * [POST] /api/exams
 * @author Princess Villanueva
 */
router.post('/exams', (req, res) => {
  const newExam = req.body;
  newExam.id = exams.length + 1; 
  exams.push(newExam);
  res.status(201).json(newExam);
});
/**
 * [PUT] /api/exams
 * @author Ian John Dal
 */
router.put('/exams/:id', (req, res) => {
  const { name } = req.body
  
  // Update exam
});

export default router;