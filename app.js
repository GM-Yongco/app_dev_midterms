// ======================================================================= */
// HEADERS
// =======================================================================
import express from "express";
import {router_var} from "./routes/user.js"


const app = express();
const port = 3000;

// =======================================================================
// MAIN_CONTENT~
// =======================================================================

app.use(express.json() ,router_var)

app.listen(port, () => {
	console.log('running on http://localhost:3000')
})

app.post('/', (req, res) => {
	return res.send('EMPTY POST');
})