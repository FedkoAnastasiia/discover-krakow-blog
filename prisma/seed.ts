import { PrismaClient } from "@prisma/client";
import { set } from "date-fns";
import posts from "../data/posts";
import { IPost } from "@/common/interfaces";

const prisma = new PrismaClient();

async function main() {
  const post = await prisma.post.createMany({
    data: [
      ...posts.map((p: IPost) => ({
        uid: p.id,
        title: p.title,
        image: p.image,
        created: set(new Date(p.created), { hours: 0, minutes: 0 }),
        preview: p.preview,
        description: p.description,
        location: [p.location.lat, p.location.lng],
        tags: p.tags,
      })),
    ],
  });

  console.log({ post });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e.message);
    await prisma.$disconnect();
    process.exit();
  });
