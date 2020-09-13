import * as React from 'react';
import { useRef, useEffect } from 'react'
import { connect } from 'react-redux';
import { D3Tree } from './renderTree';
import { throttle } from '../../utils/utils';
import "./treeView.css"

const tree = new D3Tree();
const focusOnNode = throttle(tree.focusOnNode.bind(tree), tree.DURATION_TIME);

const treeView = function (props) {
  const { dependencyTreeData, focusOn, assetsBaseURL, gotDependencyTreeData } = props;
  const chartArea = useRef();
  useEffect(() => { if (dependencyTreeData && assetsBaseURL) { tree.init(chartArea.current, dependencyTreeData, assetsBaseURL); tree.update() } }, [dependencyTreeData, assetsBaseURL])
  useEffect(() => { if (focusOn) focusOnNode(focusOn.fileData) }, [focusOn])
  const viewStatus = gotDependencyTreeData ? "treeView" : "treeView hidden";
  return (<div className={viewStatus} ref={chartArea}></div>)
}
const mapStateToProps = (state) => {
  return {
    dependencyTreeData: state.dependencyTreeData,
    assetsBaseURL: state.assetsBaseURL,
    focusOn: state.focusOn,
    gotDependencyTreeData: state.gotDependencyTreeData,
  }
};
export const TreeView = connect(mapStateToProps)(treeView);
