import initMiroAPI from "../../utils/initMiroAPI";

export default async function handler(req, res) {
    const code = req.query.code;
    console.log("I am part of AUTH on backend, here is my code: " + code);
   // const { miro, userId } = initMiroAPI();

    if (req.method === "GET") {
        try {
            // Your logic for handling the code goes here
            // For example, use the code to get an access token or something similar
            // ...

            // Send a success response
            return res.status(200).json({ message: "Success" });
        } catch (error) {
            // Send an error response
            return res.status(500).json({ error: "Error occurred" });
        }
    } else {
        // Handle other HTTP methods or return a 405 Method Not Allowed error
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};


