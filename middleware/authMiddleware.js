
export const log_request = (req,res,next)=>{
    const log_details = {}
    log_details.method = req.method
    log_details.url = req.url
    log_details.date_now = Date.now()

    console.log(log_details)
    next()
}

export const token_funcs = (req ,res, next) => {
    //uses the username as a token in the header

    if(!(req.headers["auth_username"])){
        return res.send("headers are undefined")
    }

    const auth_header = req.headers["auth_username"]
    // console.log(auth_header)
    next()
}
