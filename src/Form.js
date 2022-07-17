import React, { useState } from "react";

export default function Form(){
    const [input,setInput] = useState("")
    const [count,setCount] = useState(0)
    const [charCount,setCharCount] = useState(0)
    const [maxLen,setMaxLen] = useState("")

function handleSubmit(e){
e.preventDefault();

 }
 
const wordChange =(e)=> {
wordcount(e.target.value)
setInput(e.target.value)
console.log(input)

}

function wordcount(str){
    let c = 0;
    let str1 = str.split(" ");
    charCnt(str);

    for (let i = 0; i < str1.length; i++) {
      if (str1.length === 0) {
        setCount(0);
      }
      if (str1[i] !== "") {
        c++;
      }
      setCount(c);
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

  function handleClick(e) {
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
             onChange={(e) => setMaxLen(e.target.value)}
             />
           <textarea type="text" cols ="50" rows="20"
           placeholder="Write your text here.."
           className="text--input"
           onChange={wordChange}
           maxLength={maxLen}
           value={input}>
            </textarea> 
           <p>Number of words: {count} words</p>
           <p>Number of characters: {charCount} characters</p>
           <button onClick={handleClick}>
            Clear Text
           </button>
        </form>
        </main>
    )
}
