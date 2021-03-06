type Opaque<Type, Token = unknown> = Type & { readonly __TYPE__: Token };
export type ErrorKey = Opaque<string, "ErrorKey">;
export const NO_FOLDER = "NO_FOLDER" as ErrorKey;
export const NO_PACKAGE_JSON = "NO_PACKAGE_JSON" as ErrorKey;
export const NO_ENTRY_FILE = "NO_ENTRY_FILE" as ErrorKey;
export const GET_DEPENDENCY_TREE_FAIL = "GET_DEPENDENCY_TREE_FAIL" as ErrorKey;
export const NO_WEBVIEW_PANEL = "NO_WEBVIEW_PANEL" as ErrorKey;
export const NO_DEPENDENCY = "NO_DEPENDENCY" as ErrorKey;
export const NO_DEPENDENCY_TREE_DATA = "NO_DEPENDENCY_TREE_DATA" as ErrorKey;
export const GET_AST_FAILED = "GET_AST_FAILED" as ErrorKey;
