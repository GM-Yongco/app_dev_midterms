const requestsPerUser = [];

export const sirs_rateLimiterMiddleware = (req, res, next) => {
	
	const address = req.socket.remoteAddress
	requestsPerUser.push({
		address,
		time: new Date()
	})
	const filteredRequests = requestsPerUser.filter(request => {
	  	return request.address === address && request.time > new Date() - 60000
	})
	// console.log('Filtered:', filteredRequests)
	if (filteredRequests.length > 5) {
	  	return res.send('Too many requests')
	} 
	next()
}