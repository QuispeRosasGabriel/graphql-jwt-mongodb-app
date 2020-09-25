import MongoClient from "mongodb";
import chalk from "chalk";
export class Database {
  async init() {
    const MONGODB = String(process.env.DATABASE);
    const client = await MongoClient.connect(MONGODB, {
      useNewUrlParser: true,
    });

    const db = await client.db();

    if (client.isConnected()) {
      console.log("======DATABASE=========");
      console.log(`STATUS ${chalk.greenBright("CONECTADO")}`);
      console.log(`${chalk.bgBlueBright(db.databaseName)}`);
    }
    return db;
  }
}
