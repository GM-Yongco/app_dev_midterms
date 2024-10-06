import {get_users} from "../models/userModel.js"

export const log_in = (req ,res) => {
    const users = get_users()

    // console.log(users)
    console.log(req.body)

    const found_user = users.find(user => user.username === req.body.username)
    
    // console.log(found_user)

    if(!found_user){
        return res.send("user not found")
    }
    if(req.body.password !== found_user.password){
        return res.send("wrong password owo")
    }

    res.send(
        {
            "status":"success",
            "token": found_user.username
        }
    )
}

export const register_func = (req ,res) =>{
    const users = get_users();

    const found_user = users.find(user => user.username === req.body.username)
    if(found_user !== undefined){
        return res.send("user already exists")
    }

    if(req.body.username === undefined 
        || req.body.password === undefined
        || req.body.email === undefined){
        return res.send("username, password, or email is undefined")
    }

    const new_id = users.length
    req.body.id = new_id
    users.push(req.body)



    res.send("sucess!!! :DDD")
}

export const profile_func = (req ,res) =>{
    const users = get_users();

    const found_user = users.find(user => user.username === req.body.username)
    if(found_user !== undefined){
        return res.send("user already exists")
    }

    

    res.send(found_user)
}