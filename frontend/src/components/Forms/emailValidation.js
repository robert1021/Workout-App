function emailValidation(email) {
    //eslint-disable-next-line
    const pattern = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/
    return pattern.test(email)

}

export default emailValidation
