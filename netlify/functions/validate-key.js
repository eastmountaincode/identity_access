exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const requestBody = JSON.parse(event.body);
    const key = requestBody.key;

    if (key === "SECRET123") {
        return { statusCode: 200, body: JSON.stringify({ status: "success" }) };
    } else {
        return { statusCode: 200, body: JSON.stringify({ status: "fail" }) };
    }
};