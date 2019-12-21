// Node cannot compile ts files that have ts features like type.
// However, node can compile ts files that have plain js inside them.
// ts-node is a package allowing you to compile/execute ts files with node. (development only)

let age: number;

age = 30;

console.log(age);