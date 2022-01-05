// First phrase of the motivational message
const firstParts = ['Love for all', 'Change the world', 'Nerver regret anything', 'Aspire to inspire', 'Simplicity', 'Whatever you do', 'What we think', 'All limitations', 'Problems are not stop signs', 'I could agree with you'];
// Connectors to the phrases
const connectors = [', ', ' by ', ' that ', ' before ', ' is ', ' are ', ' but then '];
// Second phrase of the message
const secondParts = ['hatred for none.', 'being yourself.', 'made you smile.', 'we expire.', 'the ultimate sophistication.', 'do it well.', 'we become.', 'self-imposed.', 'they are guidelines.', 'we\'d both be wrong.'];

// Creat an object for store the compenents of the message
const messagesFactory = (firstPart, connector, secondPart) => {
    return {
        firstPart,
        connector,
        secondPart
    };
}

// the motivational messages componenets
const motivationalMessages = messagesFactory(firstParts, connectors, secondParts);


const messageGenerator = () => {
    // create random indexes to the arrays in motivationalMessages
    iFPart = Math.floor(Math.random() * motivationalMessages.firstPart.length);
    iConnector = Math.floor(Math.random() * motivationalMessages.connector.length);
    iSPart = Math.floor(Math.random() * motivationalMessages.secondPart.length);
    let message = "";
    message = motivationalMessages.firstPart[iFPart] + motivationalMessages.connector[iConnector] + motivationalMessages.secondPart[iSPart];
    console.log(message);
    return message;
}

messageGenerator();