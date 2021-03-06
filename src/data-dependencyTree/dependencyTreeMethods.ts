import * as fs from "fs";
import * as path from "path";

import { setEntryFileRelativePath } from "../utils/fileSystem/setting/setting";
import { getObjectFromJsonFile } from "../utils/utils";
export const getPackageJsonPath = function (
  folderPath: string
): string | undefined {
  const files = fs.readdirSync(folderPath);
  if (files.includes("package.json")) {
    return folderPath + "/package.json";
  } else {
    return undefined;
  }
};

export const getMainFilePath = function (
  folderPath: string,
  packageJsonPath: string
): string | false {
  const packageJson = getObjectFromJsonFile(packageJsonPath);
  // const packageJson = require(packageJsonPath);
  if (packageJson && packageJson.main) {
    const mainFilePath = path.join(packageJson.main);
    setEntryFileRelativePath(mainFilePath);
    return mainFilePath;
  } else {
    return false;
  }
};
