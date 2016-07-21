var katzDeliLine = [];

function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person)
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
};

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
};


function currentLine(katzDeliLine){

  var theLine = []

  if (katzDeliLine.length === 0){
    return "The line is currently empty."

  } else {

    for (var i = 0 ; i < katzDeliLine.length ; i++)
    theLine.push(`${i+1}. ${katzDeliLine[i]}`)


  }
  // theLine = ["1. person1", "2. person2", "3. person3" ]
  return `The line is currently: ${theLine.join(", ")}`
};
