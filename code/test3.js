// 找到最佳站点，使其到其他位置的成本和最小
function solution(graph) {
  // const sites = new Set();
  const n = graph.length;
  for (let i = 0; i < n; i++) {
    sites.add(graph[i].from);
    sites.add(graph[i].to);
  }
  if (sites.size < 3) {
    if (graph[0].weight < graph[1].weight) {
      return graph[0].from;
    } else {
      return graph[1].from;
    }
  }

  // let minCost = 0;
  return graph[Math.random() * (n - 1)];
}

function _parseGraph(graph) {
  return graph.trim().split("|").map((edgeStr) => {
    const [from, to, weight] = edgeStr.split(" ");
    return {from, to, weight: parseFloat(weight)};
  });
}

const lines = readline().trim();
// const lines = "A B 3|B A 1|B C 4|A C 5|C B 9";
const graph = _parseGraph(lines);
// console.log(graph);

console.log(solution(graph));