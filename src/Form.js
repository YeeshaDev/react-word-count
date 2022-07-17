import React, { useState } from "react";

export default function Form(){
    const [charCount,setCharCount] = useState(0)
    const [maxLen,setMaxLen] = useState(1000)
    const [count,setCount] = useState(0)
    const [input,setInput] = useState("")
    const [word,setWords] = useState(0)

function handleSubmit(e){
e.preventDefault();

 }
 
const wordChange =(e)=> {
wordcount(e.target.value)
setInput(e.target.value)

}

function wordcount(str,ev){
    let c = 0;
    let str1 = str.split(" ");
    let max = 1000

    for (let i = 0; i < str1.length; i++) {
    
      if (str1[i] !== "") {
        c++;
      }
      if (str1.length >= max + 1) {
      
        str1.length = max
       ev.preventDefault()   
        console.log('error')
      }
      setCount(c);
      charCnt(str)
      setWords(max - count)
      
    }
  }

  function charCnt(str) {
    let c = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        c++;
      }
    
    }
  
    setCharCount(c); 
  }

  function maxNum (e){
  setMaxLen(e.target.value)

  }

  
  function handleClick() {
   setInput("")
  setCount(0);
setCharCount(0);
setMaxLen("")
  }

    return (
        <main>
        <form className="word-form" onSubmit={handleSubmit}>
            <label htmlFor="count">Word Limit:</label>
            <input type="number"
             placeholder="Input no of words"
             value={maxLen}
             onChange={maxNum}
             
             />
           <textarea type="text" cols ="50" rows="20" 
           placeholder="Write your text here.."
           className="text--input"
           onChange={wordChange}
           value={input}
           
          
           >
            </textarea> 
           <p>Number of words: {count} Words</p>
           <p>Words left: {word} Remaining</p>
           <p>Number of characters: {charCount} Characters</p>
           
           <button onClick={handleClick}>
            Clear Text
           </button>
        </form>
        </main>
    )
}
