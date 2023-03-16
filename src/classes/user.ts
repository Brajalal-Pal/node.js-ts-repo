import { sql, poolPromise } from "../config/sql-server";

export class User {
  private userid: string;
  private email: string;
  private password: string;

  constructor(userid: string, email: string, password: string) {
    this.userid = userid;
    this.email = email;
    this.password = password;
  }

  // Creating data
  public createUser = async () => {
    try {
      const pool = await poolPromise;
      const result = await pool
        .request()
        .input("userid", sql.VarChar(20), this.userid)
        .input("email", sql.VarChar(20), this.email)
        .input("password", sql.VarChar(20), this.password)
        .query("INSERT INTO users (userid, emailAddress, password) values (@userid, @email, @password)");

      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}
