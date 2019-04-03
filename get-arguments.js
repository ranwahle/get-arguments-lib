/**
* Gets argument as switches with double dash, and return a dictionary object
* @param argumentsArray - arguments array (as received from porcess.argv)
* @return a key value object with seitchname and switch value
*/
function getArguments(argumentsArray) {
    const result = {};
    argumentsArray.forEach((argument, index) => {
        const nextArgument = argumentsArray[index + 1];
        if (argument.indexOf('--') === 0 && nextArgument) {
            result[argument.substring(2)] = nextArgument;
        }
    })

    return result;
}


module.exports = getArguments;
