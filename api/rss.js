export default async function handler(req, res) {
    const url = req.query.url

    if (!url) {
        return res.status(400).json({ error: "Missing RSS URL" })
    }

    try {
        const response = await fetch(url)
        const text = await response.text()

        // Allow Framer (and your site) to call this from the browser
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.status(200).send(text)
    } catch (error) {
        res.status(500).json({ error: error.toString() })
    }
}
