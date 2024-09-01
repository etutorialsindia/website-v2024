export default function (inputFunction) {
    return (req, res) => {
        const inputs = {
            body: req.body,
            files: req.files,
            headers: req.headers,
            client: req.cleintIP,
            user: req.user
        }
        try {
            let temp = inputFunction(inputs);
            if (temp instanceof Promise) {
                temp.then(response => {
                    return res.status(response.status).json(response.data);
                })
            }
            else {
                return res.status(temp.status).json(temp.data);
            }
        } catch (e) {
            return res.status(500).json({
                status: "error",
                message: e.message ?? "something went wrong"
            })
        }
    }
}