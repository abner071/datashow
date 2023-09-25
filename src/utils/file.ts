import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
  } catch (err) {
    console.log(`deleteFile ${err}`);
    return false;
  }

  await fs.promises.unlink(filename);
};

export const fileExists = (filename: string) => {
  try {
    return fs.existsSync(filename);
  } catch (err) {
    console.log(`fileExists ${err}`);
    return false;
  }
};
