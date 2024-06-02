// auth.js

const basicAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).send("Authentication required");
    return;
  }

  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");

  if (username === "admin" && password === "password") {
    // User is authenticated, proceed to the next middleware
    next();
  } else {
    res.status(401).send("Authentication required");
  }
};

module.exports = basicAuth;
