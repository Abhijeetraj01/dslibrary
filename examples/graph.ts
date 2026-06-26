import {
    dijkstra,
    topologicalSort
} from "../src";

// Dijkstra

const weightedGraph = new Map([
    [
        "A",
        [
            { node: "B", weight: 4 },
            { node: "C", weight: 2 }
        ]
    ],
    [
        "B",
        [
            { node: "D", weight: 5 }
        ]
    ],
    [
        "C",
        [
            { node: "B", weight: 1 },
            { node: "D", weight: 8 }
        ]
    ],
    [
        "D",
        []
    ]
]);

console.log("Dijkstra:");
console.log(
    dijkstra(
        weightedGraph,
        "A"
    )
);

// Topological Sort

const dag = new Map([
    ["A", ["C"]],
    ["B", ["C"]],
    ["C", ["D"]],
    ["D", []]
]);

console.log("\nTopological Sort:");
console.log(
    topologicalSort(dag)
);