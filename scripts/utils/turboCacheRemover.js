/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const deleteTurboCache = (dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${dir}: ${err}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error reading file ${filePath}: ${err}`);
          return;
        }

        if (stats.isDirectory()) {
          if (file === ".turbo") {
            fs.rm(filePath, { recursive: true, force: true }, (err) => {
              if (err) {
                console.error(`Error deleting directory ${filePath}: ${err}`);
              } else {
                console.log(`Deleted: ${filePath}`);
              }
            });
          } else {
            deleteTurboCache(filePath);
          }
        }
      });
    });
  });
};

deleteTurboCache(process.cwd());