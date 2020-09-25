import { IResolvers } from "graphql-tools";

const query: IResolvers = {
  Query: {
    async users(_: void, __: any, { db }): Promise<any> {
      return await db.collection("users").find().toArray();
    },

    async login(_: void, { email, password }, { db }): Promise<any> {
      return await db
        .collection("users")
        .findOne({ email, password })
        .then((res: any) => {
          if (res === null) {
            return {
              status: false,
              message: "Login Incorrecto, comprueba la información",
              user: null,
            };
          }
          return {
            status: true,
            message: "Login Correcto",
            user: res,
          };
        })
        .catch((err: any) => {
          return {
            status: false,
            message: "Error inesperado",
            user: "null",
          };
        });
    },
  },
};

export default query;
