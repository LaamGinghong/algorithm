import {TreeNode} from '../tree-node'

function binaryTreePaths(root: TreeNode) {
    const result = []

    function recursive(node: TreeNode, path: string[]) {
        if (node === null) {
            return
        }
        path.push(node.value)
        if (node.left === null && node.right === null) {
            result.push(path.join('->'))
            return
        }
        if (node.left) {
            recursive(node.left, [...path])
        }
        if (node.right) {
            recursive(node.right, [...path])
        }
    }

    recursive(root, [])
    return result
}
