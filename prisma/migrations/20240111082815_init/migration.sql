-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "uid" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "location" DOUBLE PRECISION[],
    "tags" TEXT[],
    "preview" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_uid_key" ON "Post"("uid");
