const span =document.querySelector('span')

const wordslist = ["Developer.","teacher.","coder.","student."]

const word = 'Developer'

let wordIndex = 0
let characterIndex = 0
let skipUpdate = 0
let reverseType = false

const interValid = setInterval (() =>{
 if(! reverseType){
span.innerText = span.innerText + wordslist[wordIndex][characterIndex]
characterIndex ++


 } else {
    span.innerText = span .innerText.slice(0, span.innerText.length -1)
 }

 if(characterIndex === wordslist[wordIndex].length) {
    reverseType = true
}

 if(span.innerText.length === 0 && reverseType){
    reverseType = false
    characterIndex = 0
    wordIndex ++
 }
if(wordIndex === wordslist.length ){
    wordIndex = 0
}
}, 300)
