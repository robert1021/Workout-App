function emailValidation(email) {
    //eslint-disable-next-line
    const pattern = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/
    return pattern.test(email)

}

function whiteSpaceValidation(username) {
    const pattern = /\s/
    return pattern.test(username)
}

export { emailValidation, whiteSpaceValidation }
