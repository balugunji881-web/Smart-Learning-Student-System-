import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AssignmentTest() {
  const navigate = useNavigate();
  const { id } = useParams();

  const tests = {
    1: {
      title: "React Authentication Test",
      duration: 1800,
      questions: [
        {
          question: "What is React?",
          options: ["Library", "Database", "Language", "Framework"],
          answer: "Library"
        },
        {
          question: "Who developed React?",
          options: ["Google", "Microsoft", "Meta", "Amazon"],
          answer: "Meta"
        },
        {
          question: "What hook is used for state?",
          options: ["useState", "useEffect", "useRef", "useMemo"],
          answer: "useState"
        },
        {
          question: "JSX stands for?",
          options: [
            "Java Syntax XML",
            "JavaScript XML",
            "JSON XML",
            "JavaScript Extension"
          ],
          answer: "JavaScript XML"
        },
        {
          question: "React uses?",
          options: [
            "Virtual DOM",
            "Real DOM",
            "MongoDB",
            "Node"
          ],
          answer: "Virtual DOM"
        },
        {
          question: "Which hook handles side effects?",
          options: [
            "useState",
            "useEffect",
            "useRef",
            "useContext"
          ],
          answer: "useEffect"
        },
        {
          question: "React is mainly used for?",
          options: [
            "Frontend",
            "Backend",
            "Database",
            "Testing"
          ],
          answer: "Frontend"
        },
        {
          question: "Props are?",
          options: [
            "Data passed to components",
            "Database tables",
            "Hooks",
            "CSS files"
          ],
          answer: "Data passed to components"
        },
        {
          question: "React components should start with?",
          options: [
            "Uppercase",
            "Lowercase",
            "Number",
            "Symbol"
          ],
          answer: "Uppercase"
        },
        {
          question: "Which command creates React app?",
          options: [
            "npx create-react-app",
            "npm install react",
            "react-create",
            "node app"
          ],
          answer: "npx create-react-app"
        }
      ]
    }
  };

  const test = tests[id];

  const [timeLeft, setTimeLeft] = useState(test.duration);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOptionChange = (questionIndex, option) => {
    setAnswers({
      ...answers,
      [questionIndex]: option
    });
  };

  const handleSubmit = () => {
    let correctAnswers = 0;

    test.questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        correctAnswers++;
      }
    });

    const totalQuestions = test.questions.length;

    const percentage = Math.round(
      (correctAnswers / totalQuestions) * 100
    );

    localStorage.setItem(
      "assignmentScore",
      correctAnswers
    );

    localStorage.setItem(
      "totalQuestions",
      totalQuestions
    );

    localStorage.setItem(
      "assignmentPercentage",
      percentage
    );

    localStorage.setItem(
      "testName",
      test.title
    );
    const history =
    JSON.parse(
      localStorage.getItem("assignmentHistory")
    ) || [];

  const now = new Date();



const submittedAt =
  now.toLocaleDateString("en-GB") +
  " " +
  now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

history.push({
  testName: test.title,
  score: correctAnswers,
  totalQuestions,
  percentage,
  submittedAt,
});

  localStorage.setItem(
    "assignmentHistory",
    JSON.stringify(history)
  );

    navigate("/assignment-result");
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="test-container">
      <h1>{test.title}</h1>

      <div className="timer-box">
        ⏳ Time Left : {minutes}:
        {seconds.toString().padStart(2, "0")}
      </div>

      {test.questions.map((q, qIndex) => (
        <div
          key={qIndex}
          className="question-box"
        >
          <h3>
            {qIndex + 1}. {q.question}
          </h3>

          {q.options.map(
            (option, optionIndex) => (
              <label
                key={optionIndex}
                className="option-label"
              >
                <input
                  type="radio"
                  name={`question-${qIndex}`}
                  value={option}
                  onChange={() =>
                    handleOptionChange(
                      qIndex,
                      option
                    )
                  }
                />
                {option}
              </label>
            )
          )}
        </div>
      ))}

      <button
        className="submit-btn"
        onClick={handleSubmit}
      >
        Submit Test
      </button>
    </div>
  );
}

export default AssignmentTest;