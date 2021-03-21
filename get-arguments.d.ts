/// <reference types="typescript" />


/**
* Gets argument as switches with double dash, and return a dictionary object
* @param argumentsArray - arguments array (as received from porcess.argv)
* @return a key value object with seitchname and switch value
*/
declare function getArguments(argumentsArray: string[]);