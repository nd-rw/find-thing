/*
  Warnings:

  - You are about to drop the column `dateCreated` on the `lostItem` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_lostItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "itemPhotoURL" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "locationPhotoURL" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "dateLastSeen" DATETIME NOT NULL
);
INSERT INTO "new_lostItem" ("area", "dateLastSeen", "description", "id", "itemPhotoURL", "location", "locationPhotoURL", "name") SELECT "area", "dateLastSeen", "description", "id", "itemPhotoURL", "location", "locationPhotoURL", "name" FROM "lostItem";
DROP TABLE "lostItem";
ALTER TABLE "new_lostItem" RENAME TO "lostItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
