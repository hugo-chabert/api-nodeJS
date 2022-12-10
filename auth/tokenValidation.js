const jwt = require("jsonwebtoken");
module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if (token) {
            // Remove Bearer from string
            token = token.slice(7);
            const verified = jwt.verify(token, process.env.JWT_KEY);
            if(verified){
                next();
                return res.send("Successfully Verified");
            }else{
                // Access Denied
                return res.status(401).send(error);
            }
        } else {
            return res.json({
                success: 0,
                message: "Access Denied! Unauthorized User"
            });
        }
    }
};