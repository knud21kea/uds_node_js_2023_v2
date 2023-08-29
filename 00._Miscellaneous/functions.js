function genericActionPerformer(genericAction, name) {
    return genericAction(name);
}

const jump = (name) => `${name} is jumping`

const textToLog = genericActionPerformer(jump, "Lasse");
console.log(textToLog);

function run(name) {
    return `${name} is running`
};

const textToLogTwo = genericActionPerformer(run, "Jonathon");
console.log(textToLogTwo);

const textToLogThree =  genericActionPerformer(((name) => `${name} is sleeping`), "Daniel");
console.log(textToLogThree);