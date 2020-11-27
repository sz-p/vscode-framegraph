import { DependencyTree } from "./core/dependencyTree";

import { DependencyTreeOptions } from "./index.d";
const dp = new DependencyTree();

const getDependencyTree = function (
  folderPath: string,
  entryPath: string,
  options?: DependencyTreeOptions
) {
  if (options) dp.setOptions(options);
  dp.registerParser("tsParser", DependencyTree.tsParser);
  dp.registerParser("vueParser", DependencyTree.vueParser);

  dp.registerParseRule(".vue", DependencyTree.vueParser);

  dp.registerParseRule(".js", DependencyTree.tsParser);
  dp.registerParseRule(".ts", DependencyTree.tsParser);
  dp.registerParseRule(".jsx", DependencyTree.tsParser);
  dp.registerParseRule(".tsx", DependencyTree.tsParser);

  return dp.parse(folderPath, entryPath);
};
export { getDependencyTree, DependencyTree, dp };