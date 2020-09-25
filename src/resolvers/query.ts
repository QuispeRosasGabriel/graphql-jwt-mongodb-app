import { IResolvers } from "graphql-tools";

const query: IResolvers = {
  Query: {
    async users(_: void, __: any, { db }): Promise<any> {
      return await db.collection("users").find().toArray();
    },
  },
};

export default query;
