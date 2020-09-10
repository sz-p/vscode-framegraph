import * as vscode from 'vscode';
import { getDependencyTreeData, statusCallBack } from './data-dependencyTree/data-dependencyTree';
import { createView } from './web-dependencyTree/openWebView';
import { postMessageCatchError } from './utils/message/postMessageToWebView';
import { MESSAGE_FOCUS_ON_NODE } from './utils/message/messagesKeys';
import { reOpenWebView } from './web-dependencyTree/reOpenWebView';
import { renderTreeView } from './view-dependencyTree/renderTreeView';
import { onError } from './utils/error/onError';
import { NO_DEPENDENCY_TREE_DATA } from './utils/error/errorKey';
let message = 0;

export const command_openView = vscode.commands.registerCommand('framegraph.openView', () => {
	createView();
});

// export const command_postMessage = vscode.commands.registerCommand('framegraph.postMessage', () => {
// 	postMessageCatchError({ key: 'postMessageTest', value: message++ });
// });

export const command_focusOnNode = vscode.commands.registerCommand('framegraph.focusOnNode', (fileName, fileData) => {
	postMessageCatchError({ key: MESSAGE_FOCUS_ON_NODE, value: { fileName, fileData } });
});
export const command_reOpenView = vscode.commands.registerCommand('framegraph.reOpenView', (fileName, fileData) => {
	if (global.dependencyTreeData) {
		reOpenWebView(global.dependencyTreeData);
	} else {
		onError(NO_DEPENDENCY_TREE_DATA);
	}
});
export const command_refreshFile = vscode.commands.registerCommand('framegraph.refreshFile', (fileName, fileData) => {
	// no catch error may be webview is closed
	global.dependencyTreeData = getDependencyTreeData(statusCallBack);
	if (global.dependencyTreeData) {
		renderTreeView(global.dependencyTreeData);
	}
});
export const allCommands = [ command_openView, command_reOpenView ];
