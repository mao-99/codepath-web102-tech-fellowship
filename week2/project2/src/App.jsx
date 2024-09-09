import { useState } from 'react'
import Card from './components/card';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [content, setContent] = useState('question')
  const handleCard = () => {
    if (content === 'question'){
      setContent('answer');
    }
    else {
      setContent('question')
    }
  }
  const [questions, setQuestions] = useState([
    {'question': "Start", 'answer': 'Click on the button to go to the next card'},
    {'question': 'What will be the result of the following code: print(int(35.88))', 'answer': '35'},
    {'question': 'What will be the result of the following code: print(float(35))', 'answer': '35.0'},
    {'question': 'What is the function to convert a string to upper case letters?', 'answer': 'upper()'},
    {'question': 'What is the function to remove whitespace from beginning and end of string?', 'answer': 'strip()'},
    {'question': 'If x = 9, what is a correct formatting function to print x as 9.00?', 'answer': 'x:.2f'},
    {'question': 'What is the function to insert an element into a list at a particular index?', 'answer': 'insert(index, value)'},
    {'question': 'What is the function to remove an element from a list at a particular index?', 'answer': 'pop(index)'},
    {'question': 'What is the function to insert an element into the end of a list?', 'answer': 'append(value)'},
    {'question': 'What is the function to remove an element from a list by its value?', 'answer': 'remove(value)'},
    {'question': 'Fill in the missing parts to complete the list comprehension: fruits = ["apple", "banana", "cherry"], newlist = [x _ x _ fruits]', 'answer': 'for in'},
    {'question': 'What is the the syntax for making a copy of list1 using the copy function?', 'answer': 'list1.copy()'},
    {'question': 'What is the the syntax for making a copy of list1 using the list function?', 'answer': 'list(list1)'},
    {'question': 'What is the the syntax for making a copy of list1 using the indexing?', 'answer': 'list1[:]'},
    {'question': 'Which of these is a tuple: (2,4,5) | {2,4,5}?', 'answer': '(2,4,5)'},
    {'question': 'What is the keyword used to delete tuple and objects?', 'answer': 'del'},
    {'question': 'What is a legal way to turn this tuple: (1,2,3) into this tuple:(1,2,3,1,2,3)?', 'answer': 'tuple = tuple * 2'},
    {'question': 'What will be the result of the following code: x = lambda a, b : a - b, print(x(5, 3))?', 'answer': '2'},
    {'question': 'What will be the result of the following code: x = lambda a, b : a - b, print(x(5, 3))?', 'answer': '2'},
    {'question': "True or False: Lambda functions can take multiple arguments?", 'answer': 'True'},
    {'question': "True or False: Lambda functions can have multiple expressions.?", 'answer': 'False'},
    {'question': "True or False: Lambda functions can take multiple arguments?", 'answer': 'True'},
    {'question': "What will be the printed result of the following code: import re, txt = 'The rain in Spain', x = re.findall('[a-c]', txt), print(x)?", 'answer': '["a","a"]'},
    {'question': "What will be the printed result of the following code: import re, txt = 'The rain in Spain', x = re.search('a', txt), print(x.start())?", 'answer': '5'},
    {'question': "What will be the printed result of the following code: import re, txt = 'The rain in Spain', x = re.search('\s', txt), print(x.start())?", 'answer': '3'}
  ])
  const [cardPair, setCardPair] = useState(0)
  const handleNext = () => {
    setCardPair(Math.floor(Math.random() * questions.length));
    while (cardPair === 0){
      setCardPair(Math.floor(Math.random() * questions.length));
    }
  }


  return (
    <>
      <h3>Let's Learn Python</h3>
      <h5>How much do you know python? Test yourself with this game!</h5>
      <p>Number of cards: {questions.length}</p>
      <div onClick={handleCard}>
        <Card content={questions[cardPair][content]} color={'green'} />
      </div>
      <button onClick={handleNext}>{`->`}</button>
    </>
  )
}

export default App
