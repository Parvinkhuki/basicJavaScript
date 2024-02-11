/*
you and your friends Tom, jane, Peter and Hohn got their final exam results. Your total score in 85, tom's total score is 66, Jane's total score is 95, Peter's total score is 56 and john's total score is 40 the grading chart is 


80 or above  A grade
60 or above  B grade
50 or above  C grade
40 or above  D grade
39 or less=>  F grade

 */

// write a program to fins your and your friends grades using if-else

 let examScore =
 {
 'myScore':85,
 'tomScore': 66,
 'peterScore': 56,
 'janesScore': 40
 }
for(let [name, score] of Object.entries(examScore) ){


let grade;
if (score>=80) grade ='A grade'
else if (score>=60) grade ='B grade'
 else if (score>=50) grade ='C grade'
 else if (score>=40) grade ='D grade'
else if (score<=39) grade ='F grade'

console.log(`${name}  ${grade}`)
}
