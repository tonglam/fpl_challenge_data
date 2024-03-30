const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function run() {
  const user = await prisma.user.upsert({
    where: { email: 'cody@mail.com' },
    update: {},
    create: {
      name: 'Coder Codes',
      email: 'cody@mail.com',
    },
  });

  console.log({ user });
}

run()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
