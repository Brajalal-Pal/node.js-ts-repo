import sql, { config } from "mssql";

const configuration: config = {
  user: "sa",
  password: "root123",
  server: "MAIN-PC1\\SQL01",
  database: "ShoppingCart",
  options: {
    trustServerCertificate: true,
  },
};

const poolPromise = new sql.ConnectionPool(configuration)
  .connect()
  .then((pool) => {
    console.log("Connected to MS SQL");
    return pool;
  })
  .catch((err) => {
    console.log("Database connection failed!", err);
    throw err;
  });

export { sql, poolPromise };
