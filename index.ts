import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //Create User
  // const user = await prisma.user.create({
  //   data: {
  //     name: "John Doe",
  //     email: "john@gmail.com",
  //   },
  // });

  // Get all Users
  const users = await prisma.user.findMany({
    include: {
      articles: true,
    },
  });

  // Create article and associate it with user
  // const article = await prisma.article.create({
  //   data: {
  //     title: "Johns First Article",
  //     body: "This is Johns first article",
  //     author: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  // });

  // Get all articles and associate it with user
  const articles = await prisma.article.findMany();

  // Create user and article and associate them
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Sara Smith",
  //     email: "sara@gmail.com",
  //     articles: {
  //       create: {
  //         title: "Saras First Article",
  //         body: "This is saras first article",
  //       },
  //     },
  //   },
  // });

  // Create another article
  // const article = await prisma.article.create({
  //   data: {
  //     title: "Sample Artilce",
  //     body: "This is a simple article",
  //     author: {
  //       connect: {
  //         id: 2,
  //       },
  //     },
  //   },
  // });

  // Loop over Saras articles
  // users.forEach((user) => {
  //   console.log(`User: ${user.name}, Email:${user.email}`);
  //   console.log("Articles:");
  //   user.articles.forEach((article) => {
  //     console.log(`- Title: ${article.title}, Body:${article.body}`);
  //   });
  //   console.log('\n');
  // });

  // Update data
  // const user = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: "John Doe Jr",
  //   },
  // });

  // Remove data
  // const article = await prisma.article.delete({
  //   where: {
  //     id: 2,
  //   },
  // });
  console.log(articles);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
