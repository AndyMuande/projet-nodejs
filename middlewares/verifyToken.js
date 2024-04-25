const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.header("Authorization")?.split("")[1];

  if (!token) return res.status(401).send("access denied");
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(400).send("invalid token");//if (err) return res.sendStatus(401);
    req.user = user;
    next();
  });
}
module.exports = verifyToken;
//if (err) return res.sendStatus(401);
//if (err) return res.sendStatus(401);
//if (err) return res.sendStatus(401);