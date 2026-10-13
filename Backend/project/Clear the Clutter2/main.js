const express = require("express");
const app = express();
const port = 3000;
const fs = require("node:fs/promises");
const path = require("node:path");
const FileFolder = path.join(__dirname, "file");

async function Clear() {
  console.log("starting..");
  try {
      const entries = await fs.readdir(FileFolder, { withFileTypes: true });
      console.log("Started");
    for (const entry of entries) {
      if (!entry.isFile()) continue;

      const extension = path.extname(entry.name).toLowerCase();

      function capitalize(str) {
        if (!str) return str;

        return str[0].toUpperCase() + str.slice(1);
      }

      const folderName = capitalize(extension);
      const DestinationDir = path.join(FileFolder, folderName);
      const oldPath = path.join(FileFolder, entry.name);
      const newPath = path.join(DestinationDir, entry.name);

      await fs.mkdir(DestinationDir, { recursive: true });

      try {
        await fs.access(newPath);
        console.log(`Skipped: ${entry.name} already exists in ${folderName}`);
      } catch (error) {
        await fs.rename(oldPath, newPath);
        console.error(error.message);
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}
Clear();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
