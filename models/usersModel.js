const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function setUsers(data) {
  await prisma.users.create({
    data: {
      username: data.username,
      password: data.password,
    },
  });
}
async function getUsers() {
  const users = await prisma.users.findMany();
  return users;
}

module.exports = {
  setUsers,
  getUsers,
};
