import * as fs from "fs";
import * as vscode from "vscode";

export const pathExists = function (p: string): boolean {
  try {
    fs.accessSync(p);
  } catch (err) {
    return false;
  }
  return true;
};

export const getObjectFromJsonFile = function (
  filePath: string
): Object | false {
  if (!pathExists(filePath)) return false;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

/**
 * get current workspace first folder path
 * catch path return path
 *
 * @returns {(String | undefined)}
 */
export const getCurrentFolderPath = function (): string | undefined {
  const ws = vscode.workspace;
  let folder = ws.workspaceFolders;
  let folderPath = "";
  if (folder !== undefined) {
    folderPath = folder[0].uri.fsPath;
  }
  if (folderPath) {
    // setCurrentFolderPath(folderPath);
    return folderPath;
  } else {
    return undefined;
  }
};
