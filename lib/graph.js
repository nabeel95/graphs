var ld = require('lodash');
module.exports=graph={};

graph.UndirectedGraph=function(){
	this.graph=[];
	this.edge=0;
};
graph.UndirectedGraph.prototype={
	addVertex:function(vertex){
		var keys = Object.keys(this.graph);
		if(keys.indexOf(vertex)==-1) this.graph[vertex]=[];
	},
	addEdge:function(from,to){
		this.graph[from].push(to);
		this.graph[to].push(from);
		this.edge++;
	},
	hasEdgeBetween:function(from,to){
		return this.graph[from].some(function(element){return element==to});
	},
	order:function(){
		return Object.keys(this.graph).length;
	},
	size:function(){
		return this.edge;
	},
	pathBetween:function(from,to,visited){
		visited = visited || [];
		if(from == to) return visited.concat(from);
		for(var i in this.graph[from]){
			var anotherFrom = this.graph[from][i];
			if(visited.indexOf(anotherFrom) == -1){
				var path = this.pathBetween(anotherFrom,to,visited.concat(from));
				if(path[path.length - 1]==to) return path
			}
		}
		return [];
	},
	farthestVertex:function(vertex){
		console.log(vertex,'vertex');
	}
};

//==============================================================================
graph.DirectedGraph=function(){
	this.graph=[];
	this.edge=0;
};
graph.DirectedGraph.prototype={
	addVertex:function(vertex){
		var keys = Object.keys(this.graph);
		if(keys.indexOf(vertex)==-1) this.graph[vertex]=[];
	},
	addEdge:function(from,to){
		this.graph[from].push(to);
		this.edge++;
	},
	hasEdgeBetween:function(from,to){
		return this.graph[from].some(function(element){return element==to});
	},
	order:function(){
		return Object.keys(this.graph).length;
	},
	size:function(){
		return this.edge;
	},
	pathBetween:function(from,to,visited){
		visited = visited || [];
		if(from == to) return visited.concat(from);
		for(var i in this.graph[from]){
			var anotherFrom = this.graph[from][i];
			if(visited.indexOf(anotherFrom) == -1){
				var path = this.pathBetween(anotherFrom,to,visited.concat(from));
				if(path[path.length - 1]==to) return path
			}
		}
		return [];
	},
	farthestVertex:function(vertex){
		
		// console.log(vertex,'vertex');
	}
};
