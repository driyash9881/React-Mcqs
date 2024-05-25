import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState({});
  const [selVal, setSalVal] = useState("");
  const [value, setValue] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  
  useEffect(() => {
    setSelected(false);
  }, [questionIndex]);

  const handleClick = (selectedValue) => {
    setSalVal(selectedValue)
    setSelected(true);
    if (selectedValue === questions[questionIndex].correctAnswer) {
      if (!answeredCorrectly[questionIndex]) {
        setValue((prevValue) => prevValue + 1);
        setAnsweredCorrectly((prevState) => ({
          ...prevState,
          [questionIndex]: true,
        }));
      }
    }
    console.log('value is', value);
    console.log('Selected :', selectedValue);
  };
 const handleReset =()=>{
  setQuestionIndex(0);
  setSelected(false);
  setAnsweredCorrectly({});
  setValue(0);
  setIsQuizCompleted(false);
 }
  const handleNext = () => {
    if (selected) {
      if (questionIndex < questions.length - 1) {
        setQuestionIndex(questionIndex + 1);
      } else {
        alert('You have completed the quiz');
        setIsQuizCompleted(true);
      }
    }
    console.log('current index : ', questionIndex, selected, value);
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
    console.log('current index : ', questionIndex);
  };

  const questions = [
    // Your questions array...
    {
      id: 1,
      question: 'What is the primary purpose of React?',
      options: [
        'To manipulate the DOM directly',
        'To build user interfaces',
        'To perform server-side rendering',
        'To handle HTTP requests',
      ],
      correctAnswer: 'To build user interfaces',
    },
    {
      id: 2,
      question: 'Which method is used to update the state in a React component?',
      options: ['this.updateState()', 'this.modifyState()', 'this.setState()', 'this.changeState()'],
      correctAnswer: 'this.setState()',
    },
    {
      id: 3,
      question: 'What is a Hook in React?',
      options: [
        'A special type of component',
        'A function that lets you use state and other React features',
        'A method to handle events',
        'A built-in module for AJAX requests',
      ],
      correctAnswer: 'A function that lets you use state and other React features',
    },
    {
      id: 4,
      question: 'Which of the following is a built-in Hook in React?',
      options: ['useFetch', 'useEvent', 'useState', 'useStyle'],
      correctAnswer: 'useState',
    },
    {
      id: 5,
      question: 'What is the virtual DOM?',
      options: [
        'A direct representation of the real DOM',
        'A copy of the real DOM kept in memory and synced with the real DOM by libraries such as ReactDOM',
        'A feature that allows direct manipulation of the DOM',
        'An HTML template stored in JavaScript',
      ],
      correctAnswer: 'A copy of the real DOM kept in memory and synced with the real DOM by libraries such as ReactDOM',
    },
    {
      id: 6,
      question: 'How can you create a React component?',
      options: [
        'By defining a function',
        'By extending a class',
        'By using the React.createElement() method',
        'All of the above',
      ],
      correctAnswer: 'All of the above',
    },
    {
      id: 7,
      question: 'What does JSX stand for?',
      options: ['JavaScript XML', 'JavaScript XHTML', 'JavaScript Extension', 'JavaScript Syntax'],
      correctAnswer: 'JavaScript XML',
    },
    {
      id: 8,
      question: 'What is the correct way to pass a property to a component?',
      options: [
        '<Component property={value} />',
        '<Component property:value />',
        '<Component property-value />',
        '<Component property.value />',
      ],
      correctAnswer: '<Component property={value} />',
    },
    {
      id: 9,
      question: 'Which lifecycle method is called after a component is rendered for the first time?',
      options: ['componentDidMount', 'componentWillMount', 'componentDidUpdate', 'componentWillUpdate'],
      correctAnswer: 'componentDidMount',
    },
    {
      id: 10,
      question: 'How do you handle events in React?',
      options: [
        'With inline event handlers',
        'Using bind() in the constructor',
        'By defining event handler methods',
        'All of the above',
      ],
      correctAnswer: 'All of the above',
    },
  ];

  console.log('Value is : ', value);

  return (
    <div className="w-full h-full flex flex-col justify-center mt-10 p-9">
  
      <div className="w-[80vh] h-[50vh] border border-black p-10">
        <p>Score: {value}</p>
        <div>
          <span>{questions[questionIndex].id}. </span>
          <span>{questions[questionIndex].question}</span>
        </div>
        <div className="flex justify-center gap-16 p-10">
          <div className="grid grid-cols-2 gap-10">
            {questions[questionIndex].options.map((val) => (
              <button
              
                key={val}
                className={`border ${selVal === val ? 'bg-salte-200 border-black  bg-slate-500 text-white' : " "} hover:bg-amber-400 hover:border-amber-400 p-2 rounded-md`}
                onClick={() => handleClick(val)}
              >
                {val}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button className={`p-5 mr-16 border border-black `} onClick={handleNext}>
          Next
        </button>

        <button className="p-5 mr-16 border border-black" onClick={handlePrevious}>
          Previous
        </button>
      </div>
      {isQuizCompleted && (
        <>
        <div className='flex justify-center text-center w-[100vh] h-[100vh] border shadow-lg'>
        <div className='w-[50vh] h-[50vh] border border-black p-10'>
          <h1 className='text-3xl'>Quiz Completed</h1>
          <h1 className='text-3xl'>Your Score is {value}</h1>
          <button className='p-5 mr-16 border border-black' onClick={handleReset}>Reset</button>
        </div>
        </div>
        </>
      )}
     
    </div>
  );
};

export default App;
