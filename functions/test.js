const data = require('./src/data.json');

exports.handler = async (event, context) => {
	
	// event.path - The request path
	// event.httpMethod - The request HTTP method
	// event.headers - The request headers
	// event.queryStringParameters - The request query parameters
	// event.body - The request body in JSON format
	// event.isBase64Encoded - A boolean flag to indicate if the applicable request payload is Base64-encode

	console.log('Test function called...')

	return {

		// isBase64Encoded: true|false,
		// statusCode: httpStatusCode,
		// headers: { "headerName": "headerValue", ... },
		// body: "..."

		statusCode: 200,
		body: `Hello from Lambda: ${data.message}`
	}
}