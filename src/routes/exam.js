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
router.get('/exams', (req,res) => 
  res.json(exams)
)
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
  const examId = parseInt(req.params.id);
  const updatedData = req.body;

  let exam = exams.find(e => e.id === examId);
  if (exam) {
    exam.name = updatedData.name || exam.name;
    res.json(exam);
  } else {
    res.status(404).json({ error: 'Exam not found' });
  }
});

export default router;