const fs = require("fs");
const path = require("path");

process.on("message", msg => {
  const filePath = path.join(__dirname, msg);
  console.log(filePath);
  const chunk = fs.createReadStream(filePath, { encoding: "utf-8" });

  chunk.on("data", data => {
    process.send(data);
  });

  chunk.on("end", () => process.exit());
});