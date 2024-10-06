export const token_funcs = (req ,res, next) => {
    const auth_header = req.headers["auth_username"]
    // console.log(req.header("authorization"))
    console.log(auth_header)
    // const token = auth_header.split(" ")[1]
    // console.log(token)
    next()
}