import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function ConnectDb() {
  try {
    await prisma.$connect();
    return "Connected To The Database";
  } catch (error) {
    throw { message: "Error Connection To the Database", error };
  }
}

export { ConnectDb, prisma as default };
