-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "image_url" VARCHAR(255) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "ownerId" TEXT NOT NULL,
    "status" VARCHAR(255),
    "date" TEXT NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Revenue" (
    "id" TEXT NOT NULL,
    "month" VARCHAR(4) NOT NULL,
    "revenue" INTEGER NOT NULL,

    CONSTRAINT "Revenue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Revenue_month_key" ON "Revenue"("month");

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
