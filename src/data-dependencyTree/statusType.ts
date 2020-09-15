type Opaque<Type, Token = unknown> = Type & { readonly __TYPE__: Token };
export type StatusKey = Opaque<string, 'StatusKey'>;
export const STATUS_GET_DEPENDENCY_DATA_GET_FOLDER = 'STATUS_GET_DEPENDENCY_DATA_GET_FOLDER' as StatusKey;
export const STATUS_GET_DEPENDENCY_DATA_GET_SAVED_DATA = 'STATUS_GET_DEPENDENCY_DATA_GET_SAVED_DATA' as StatusKey;
export const STATUS_GET_DEPENDENCY_DATA_GET_PACKAGE_JSON = 'STATUS_GET_DEPENDENCY_DATA_GET_PACKAGE_JSON' as StatusKey;
export const STATUS_GET_DEPENDENCY_DATA_GET_ENTRY_FILE = 'STATUS_GET_DEPENDENCY_DATA_GET_ENTRY_FILE' as StatusKey;
export const STATUS_GET_DEPENDENCY_DATA_GET_DATA = 'STATUS_GET_DEPENDENCY_DATA_GET_DATA' as StatusKey;
export const STATUS_GET_DEPENDENCY_DATA_PROCESS_DATA = 'STATUS_GET_DEPENDENCY_DATA_PROCESS_DATA' as StatusKey;
