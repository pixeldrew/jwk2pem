const jose = require("node-jose");
const fs = require("node:fs");

module.exports = ({ jwkJson, includePk }) => {
    const key = fs.readFileSync(jwkJson);
    jose.JWK.asKey(key).then((key) => {
        console.log(key.toPEM(includePk));
    });
};
