-- CreateTable
CREATE TABLE "lostItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "itemPhotoURL" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "locationPhotoURL" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "dateLastSeen" DATETIME NOT NULL,
    "dateCreated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
