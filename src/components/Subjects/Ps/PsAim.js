import React from 'react'

function PsAim() {
  return (
    <>
    <div>
    <h1> Numerical Representation</h1>
    <div>How are number represented in C? In this lab we help you understand how numbers are repsented in C and based on that two problems are given.The 1st is simple to solve while the second one is little tricky.</div>
    <h3>Problem 1:</h3>
    <div>Given a positive integer find the minimum number of bits required to represent it as a binary number.</div>
    <h3>Input Specification</h3>
    <div>Input contains a single positive integer.</div>
    <h3>Output Specification</h3>
    <div>Output the minimum number of bits required for the representing in binary.</div>
    <h3>Sample Input and Output</h3>
    <div>
        <ol>
            <li>Input: 4</li>
            <li>Output:3</li>
            <li>Input: 16</li>
            <li>Output: 5</li>
         </ol>
         </div>
         <h3>Problem 2:</h3>
         <div>Given N followed by N distinct characters, we can find all possible 2N words(sequence of characters) which preserve the ordering in the input (assuming that all words are valid words in the language). For example, if N is 3 and chatacters are A, B and C, the words in the alphabet order are A, AB, ABC, AC, B, BC and C. Your task now, is to find the index of the word in the dictionary. i.e., if input is AC, output is 4. You may avoid generating all the words and comparing the word with every word in the dictionary.</div>
         <h3>Input Specification</h3> 
         <div>Input contains a number N representing the number of alphabets followed by a space and N characters in the dictionary listed in lexicographic order and then a valid word present in dictionary.</div>  
         <h3>Output Specification</h3>
         <div>Output must be the index of the word in the dictionary.</div>
         <h3>Sample Input and Output</h3>
         <div>
            <ol>
                <li>Input: 3 A B C AC</li>
                <li>Output: 4</li>
                <li>Input: 3 A B C BC</li>
                <li>Output: 6</li>
            </ol>
         </div>
    </div>
    
    </>
  )
}

export default PsAim