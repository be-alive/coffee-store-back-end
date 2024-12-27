const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_SECRET =
  "CmV2@fcLm*wtdHkuftSkKhQC_rctVseL8eqta_6&FQ^!7HS-d3#DL9n&K7h_3LFFkV4q*cZ&!J7d@fET%+6Mr5bne+4Ms4PW?HF#ueTmwYxJ5EpDT8Ba@NCq";
const REFRESH_TOKEN_SECRET =
  "cuCqkN_zDe9^mqLGPzKj7$x&Jdy87x3c9H^e2_GEnQ&5r@*qyWeNtmNb?9q3L6kB_@_CwS5mun=KR%WyxHs$t$t^C!@_rp@_vs5f@@?n%X^?Kn#hS*9eLXs@";

module.exports = (id, username, email, role) => {
  const accessToken = jwt.sign(
    {
      _id: id,
      username: username,
      email: email,
      role: role,
    },
    ACCESS_TOKEN_SECRET,
    { expiresIn: "6h" }
  );
  const refreshToken = jwt.sign(
    {
      _id: id,
      username: username,
      email: email,
      role: role,
    },
    REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

  return { accessToken: accessToken, refreshToken: refreshToken };
};
