import {
  getDependencyTreeDataFromFile,
  getDependencyTreeDataByCompute,
  getWebViewDataByCompute,
  getSavedDataFromFile,
  getSavedDataByCompute,
  getWebViewDataFromFile,
  setDataToFile
} from "../utils";
import { expect } from 'chai';
const mainFilePath = "./src/index.js";
const {
  dependencyTreeData,
  dependencyNodesData,
  folderPath,
} = getDependencyTreeDataFromFile("realProject");
const { dependencyTree, dependencyNodes } = getDependencyTreeDataByCompute(
  folderPath,
  mainFilePath
);
const savedDataFromFile = getSavedDataFromFile("realProject");
const savedDataByCompute = getSavedDataByCompute(
  "realProject",
  folderPath,
  mainFilePath
);
const readData = getWebViewDataByCompute("realProject", folderPath);
const webViewData = getWebViewDataFromFile("realProject");
describe("dependencyTree(real project): get dependencyTree data", function () {
  it("dependencyNodesData", function () {
    // setDataToFile("./dependencyNodes.json", dependencyNodes)
    expect(dependencyNodesData.length).to.equal(dependencyNodes.length);
  });
  it("dependencyTreeData", function () {
    // setDataToFile("./dependencyTree.json", dependencyTree)
    expect(dependencyTreeData.length).to.equal(dependencyTree.length);
  });
});

describe("dependencyTree(real project): get saved data", function () {
  it("jsonString", function () {
    // setDataToFile("./savedDataByCompute.json", savedDataByCompute)
    expect(savedDataFromFile.length).to.equal(savedDataByCompute.length);
  });
});

describe("dependencyTree(real project): get webView data", function () {
  it("dependencyTreeData", function () {
    setDataToFile("./readData.json", readData)
    expect(readData.length).to.equal(webViewData.length);
  });
});
