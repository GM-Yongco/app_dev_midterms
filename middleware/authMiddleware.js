export const token_funcs = (req ,res, next) => {
    //uses the username as a token in the header

    if(!req.headers["auth_username"]){
        return res.send("headers are undefined")
    }

    const auth_header = req.headers["auth_username"]
    console.log(auth_header)
    next()
}