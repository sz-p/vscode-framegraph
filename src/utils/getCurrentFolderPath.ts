import * as vscode from "vscode";
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
