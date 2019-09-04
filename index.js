function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(highlight="*"){
    return function(param="special"){
        return `You are ${highlight}${param}${highlight}!`
    }
}

let Calculator = new Object()
Calculator.add = (num1, num2) => num1 + num2
Calculator.subtract = (num1, num2) => num1 - num2
Calculator.multiply = (num1, num2) => num1 * num2
Calculator.divide = (num1, num2) => num1 / num2

function actionApplyer(startingNum, arrayOfFs) {
    if (arrayOfFs.length < 1){
        return startingNum
    } else {
        let result = startingNum
        arrayOfFs.forEach(func => {
            return result = func(result)
        })
        return result
    }
}