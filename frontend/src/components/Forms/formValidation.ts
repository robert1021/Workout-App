function emailValidation(email: string) {
    //eslint-disable-next-line
    const pattern: RegExp = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/
    return pattern.test(email)

}

function whiteSpaceValidation(username: string) {
    const pattern: RegExp = /\s/
    return pattern.test(username)
}

export { emailValidation, whiteSpaceValidation }
