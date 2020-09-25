import { IResolvers } from "graphql-tools";

const query: IResolvers = {
  Query: {
    async users(_: void, __: any, { db }): Promise<any> {
      return await db.collection("users").find().toArray();
    },

    async login(_: void, { email, password }, { db }): Promise<any> {
      return await db.collection("users").findOne({ email, password });
    },
  },
};

export default query;
