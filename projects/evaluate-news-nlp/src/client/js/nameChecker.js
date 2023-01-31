function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);

    if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(inputText)) {
        console.log('Valid');
        return true;
    } else {
        console.log('Not Valid');
        return false
    }
}

export { checkForName }
