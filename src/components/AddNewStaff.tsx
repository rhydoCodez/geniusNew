import { useState, FormEvent } from "react"
import axios from "axios"

const AddNewStaff = () => {
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [userName, setUserName] = useState<string>("")
  const [emailAddress, setEmailAddress] = useState<string>("")
  const [role, setRole] = useState<string>("")
  const [contactNumber, setContactNumber] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  // old
  const [question, setQuestion] = useState<string>("")
  const [examType, setExamType] = useState("JAMB/UTME")
  const [subject, setSubject] = useState<string>("")
  const [correctAnswer, setCorrectAnswer] = useState<string>("")
  const [incorrectAnswer1, setIncorrectAnswer1] = useState<string>()
  const [incorrectAnswer2, setIncorrectAnswer2] = useState<string>()
  const [incorrectAnswer3, setIncorrectAnswer3] = useState<string>()

  const handleAddNewQuestion = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const incorrectAnswers = [
        incorrectAnswer1,
        incorrectAnswer2,
        incorrectAnswer3,
      ]

      const res = await axios.post(
        "http://localhost:3000/api/admin/question/addQuestion",
        {
          examType,
          question,
          subject,
          correctAnswer,
          incorrectAnswers,
        }
      )

      if (res.status === 201) {
        console.log(res.data)
        setExamType("")
        setQuestion("")
        setSubject("")
        setCorrectAnswer("")
        setIncorrectAnswer1("")
        setIncorrectAnswer2("")
        setIncorrectAnswer3("")

        return "Question added Successfully"
      }
      return res.data
    } catch (err: any) {
      return "Error adding Question"
    }
  }

  return (
    <div className="text-gray-900 flex items-center justify-center w-full flex-col space-y-5">
      <h3 className="text-genius-blue font-semibold text-2xl">Add New Staff</h3>
      <form action="" className="w-[448px]">
        <div className="flex flex-col space-y-3 mb-5 w-full">
          <label htmlFor="examType">Exam Type</label>
          {/* <select
            className="outline-none border-2 bg-gray-50 p-2"
            name="examType"
            id="examType"
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
          >
            {examTypes.map((examType, index) => (
              <option value={examType} key={index}>
                {examType}
              </option>
            ))}
          </select> */}
        </div>

        <div className="flex flex-col space-y-3 mb-5 w-full">
          <label htmlFor="subject">Subject</label>
          {/* <select
            className="outline-none border-2 bg-gray-50 p-2"
            name="subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            {subjects.map((subject, index) => (
              <option value={subject} key={index}>
                {subject}
              </option>
            ))}
          </select> */}
        </div>

        {/* <div>
          <label htmlFor="noOfQuestions">No. Of Questions</label>
          <input type="text" value={questions.length} />
        </div> */}

        {/* Enter New Question */}
        <div className="flex flex-col space-y-3 mb-5 w-full">
          <label htmlFor="newQuestion">Question</label>
          <textarea
            className="w-full min-h-[60px] p-3 outline-none border-2"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter Question here..."
          />
        </div>

        {/* options */}
        <div>
          <div className="flex flex-col space-y-3 mb-5 w-full">
            <label htmlFor="correctAnswer">Correct Answer</label>
            <input
              className="outline-none border-2 bg-gray-50 p-2"
              type="text"
              id="correctAnswer"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-3 mb-5 w-full">
            <label htmlFor="incorrectAnswer">Incorrect Answer 1</label>
            <input
              className="outline-none border-2 bg-gray-50 p-2"
              type="text"
              id="option B"
              value={incorrectAnswer1}
              onChange={(e) => setIncorrectAnswer1(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-3 mb-5 w-full">
            <label htmlFor="incorrectAnswer">Incorrect Answer 2</label>
            <input
              className="outline-none border-2 bg-gray-50 p-2"
              type="text"
              id="option C"
              value={incorrectAnswer2}
              onChange={(e) => setIncorrectAnswer2(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-3 mb-5 w-full">
            <label htmlFor="incorrectAnswer">Incorrect Answer 3</label>
            <input
              className="outline-none border-2 bg-gray-50 p-2"
              type="text"
              id="option D"
              value={incorrectAnswer3}
              onChange={(e) => setIncorrectAnswer3(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          <button
            type="submit"
            onClick={handleAddNewQuestion}
            className="bg-gradient-to-r from-genius-darkBlue to-genius-darkRed w-fit px-10 py-2 rounded-full text-gray-50 font-medium text-xl"
          >
            Add Question
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddNewStaff
