const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.json({
        "message": "Hello, I am using this API on agroecologia-ifam-cmzl.github.io",
        "listOfTools": [
            "Bootstrap",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT (by Auth0)",
            "FrontEnd Deploy on GitHub Actions",
            "RESTful API Deploy on Render.com"
        ]
    });
});

module.exports = router;
