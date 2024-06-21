// create an array with nodes
import { nodes } from './nodes.js';
import { edges } from './edges.js';

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};

var options = {
  // edges
  edges:{
     arrows: {
       to: {
         enabled: true,
         imageHeight: undefined,
         imageWidth: undefined,
         scaleFactor: 1,
         src: undefined,
         type: "arrow"
       },
       middle: {
         enabled: false,
         imageHeight: 32,
         imageWidth: 32,
         scaleFactor: 1,
         src: undefined,
         type: "crow"
       },
       from: {
         enabled: false,
         imageHeight: undefined,
         imageWidth: undefined,
         scaleFactor: 1,
         src: undefined,
         type: "arrow"
       }
     },
     endPointOffset: {
       from: 0,
       to: 0
     },
     arrowStrikethrough: false,
     chosen: true,
     color: {
       color:'#79d1cd',
       highlight:'red',
       hover: '#57a9c2',
       inherit: 'from',
       opacity:1.0
     },
     dashes: false,
     font: {
       color: '#343434',
       size: 14, // px
       face: 'arial',
       background: 'none',
       strokeWidth: 2, // px
       strokeColor: '#ffffff',
       align: 'horizontal',
       multi: false,
       vadjust: 0,
       bold: {
         color: '#343434',
         size: 14, // px
         face: 'arial',
         vadjust: 0,
         mod: 'bold'
       },
       ital: {
         color: '#343434',
         size: 14, // px
         face: 'arial',
         vadjust: 0,
         mod: 'italic',
       },
       boldital: {
         color: '#343434',
         size: 14, // px
         face: 'arial',
         vadjust: 0,
         mod: 'bold italic'
       },
       mono: {
         color: '#343434',
         size: 15, // px
         face: 'courier new',
         vadjust: 2,
         mod: ''
       }
     },
     hidden: false,
     hoverWidth: 2,
     label: undefined,
     labelHighlightBold: true,
     length: undefined,
     physics: true,
     scaling:{
       min: 1,
       max: 15,
       label: {
         enabled: true,
         min: 14,
         max: 30,
         maxVisible: 30,
         drawThreshold: 5
       },
       customScalingFunction: function (min,max,total,value) {
         if (max === min) {
           return 0.5;
         }
         else {
           var scale = 1 / (max - min);
           return Math.max(0,(value - min)*scale);
         }
       }
     },
     selectionWidth: 2,
     selfReferenceSize: 20,
     selfReference:{
         size: 20,
         angle: Math.PI / 4,
         renderBehindTheNode: true
     },
     shadow:{
       enabled: false,
       color: 'rgba(0,0,0,0.5)',
       size:10,
       x:5,
       y:5
     },
     smooth: {
       enabled: true,
       type: "dynamic",
       roundness: 0.5
     },
     title:undefined,
     value: undefined,
     width: 2,
     widthConstraint: false
   },
// Nodes
    nodes:{
        borderWidth: 1,
        borderWidthSelected: 2,
        brokenImage:undefined,
        chosen: true,
        color: {
          border: '#57a9c2',
          background: '#84cbe0',
          highlight: {
            border: 'red',
            background: '#e83838'
          },
          hover: {
            border: '#57a9c2',
            background: '#cce2e8'
          }
        },
        opacity: 1,
        fixed: {
          x:false,
          y:false
        },
        font: {
          color: '#343434',
          size: 14, // px
          face: 'arial',
          background: 'none',
          strokeWidth: 0, // px
          strokeColor: '#ffffff',
          align: 'center',
          multi: false,
          vadjust: 0,
          bold: {
            color: '#343434',
            size: 14, // px
            face: 'arial',
            vadjust: 0,
            mod: 'bold'
          },
          ital: {
            color: '#343434',
            size: 14, // px
            face: 'arial',
            vadjust: 0,
            mod: 'italic',
          },
          boldital: {
            color: '#343434',
            size: 14, // px
            face: 'arial',
            vadjust: 0,
            mod: 'bold italic'
          },
          mono: {
            color: '#343434',
            size: 15, // px
            face: 'courier new',
            vadjust: 2,
            mod: ''
          }
        },
        group: undefined,
        heightConstraint: false,
        hidden: false,
        icon: {
          face: 'FontAwesome',
          code: undefined,
          weight: undefined,
          size: 50,  //50,
          color:'#57a9c2'
        },
        image: undefined,
        imagePadding: {
          left: 0,
          top: 0,
          bottom: 0,
          right: 0
        },
        label: undefined,
        labelHighlightBold: true,
        level: undefined,
        mass: 1,
        physics: true,
        scaling: {
          min: 10,
          max: 30,
          label: {
            enabled: false,
            min: 14,
            max: 30,
            maxVisible: 30,
            drawThreshold: 5
          },
          customScalingFunction: function (min,max,total,value) {
            if (max === min) {
              return 0.5;
            }
            else {
              let scale = 1 / (max - min);
              return Math.max(0,(value - min)*scale);
            }
          }
        },
        shadow:{
          enabled: false,
          color: 'rgba(0,0,0,0.5)',
          size:10,
          x:5,
          y:5
        },
        shape: 'ellipse',
        shapeProperties: {
          borderDashes: false, // only for borders
          borderRadius: 6,     // only for box shape
          interpolation: false,  // only for image and circularImage shapes
          useImageSize: false,  // only for image and circularImage shapes
          useBorderWithImage: false,  // only for image shape
          coordinateOrigin: 'center'  // only for image and circularImage shapes
        },
        size: 25,
        title: undefined,
        value: undefined,
        widthConstraint: false,
        x: undefined,
        y: undefined
      },
// layer
layout: {
    randomSeed: undefined,
    improvedLayout:true,
    clusterThreshold: 150,
    hierarchical: {
      enabled:false,
      levelSeparation: 150,
      nodeSpacing: 100,
      treeSpacing: 200,
      blockShifting: true,
      edgeMinimization: true,
      parentCentralization: true,
      direction: 'UD',        // UD, DU, LR, RL
      sortMethod: 'hubsize',  // hubsize, directed
      shakeTowards: 'leaves'  // roots, leaves
    }
  },
// interaction
interaction:{
    dragNodes:true,
    dragView: true,
    hideEdgesOnDrag: false,
    hideEdgesOnZoom: false,
    hideNodesOnDrag: false,
    hover: true,
    hoverConnectedEdges: true,
    keyboard: {
      enabled: false,
      speed: {x: 10, y: 10, zoom: 0.02},
      bindToWindow: true,
      autoFocus: true,
    },
    multiselect: true,
    navigationButtons: false,
    selectable: true,
    selectConnectedEdges: true,
    tooltipDelay: 300,
    zoomSpeed: 1,
    zoomView: true
  },
//Physics
physics:{
    enabled: true,
    barnesHut: {
      theta: 0.5,
      gravitationalConstant: -2000,
      centralGravity: 0.2,
      springLength: 95,
      springConstant: 0.04,
      damping: 0.09,
      avoidOverlap: 0
    },
    forceAtlas2Based: {
      theta: 0.5,
      gravitationalConstant: -50,
      centralGravity: 0.01,
      springConstant: 0.08,
      springLength: 100,
      damping: 0.4,
      avoidOverlap: 0
    },
    repulsion: {
      centralGravity: 0.1,
      springLength: 200,
      springConstant: 0.05,
      nodeDistance: 100,
      damping: 0.09
    },
    hierarchicalRepulsion: {
      centralGravity: 0.0,
      springLength: 100,
      springConstant: 0.01,
      nodeDistance: 120,
      damping: 0.09,
      avoidOverlap: 0
    },
    maxVelocity: 50,
    minVelocity: 0.1,
    solver: 'barnesHut',
    stabilization: {
      enabled: true,
      iterations: 1000,
      updateInterval: 100,
      onlyDynamicEdges: false,
      fit: true
    },
    timestep: 0.5,
    adaptiveTimestep: true,
    wind: { x: 0, y: 0 }
  },
  // group
  groups: {
      root: {color:{background:'#82d9ab',border:'#7dc9a1'}, borderWidth:4},
      theory: {color:{background:'#badbf5',border:'#a9c6de'}, borderWidth:3},
      method: {color:{background:'#b7ebb8',border:'#a3d1a4'}, borderWidth:3},
      task: {color:{background:'#e3bb7f',border:'#c9a773'}, borderWidth:3},
      feature: {color:{background:'#deebb7',border:'#d1dea9'}, borderWidth:3},
      structure: {color:{background:'#cfccbc',border:'#b5b3a5'}, borderWidth:3},
      app: {color:{background:'#f0b3af',border:'#d19c99'}, borderWidth:3}
    }
}

var searchInput = document.getElementById('searchInput');
var searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', function() {
  var searchTerm = searchInput.value.toLowerCase();

  // 遍历所有节点，将不匹配搜索词的节点隐藏
  nodes.forEach(function(node) {
    if (node.label.toLowerCase().indexOf(searchTerm) === -1) {
      node.hidden = true;
    } else {
      node.hidden = false;
    }
  });

  // 遍历所有边，将不匹配搜索词的边隐藏
  edges.forEach(function(edge) {
    if (edge.label && edge.label.toLowerCase().indexOf(searchTerm) === -1) {
      edge.hidden = true;
    } else {
      edge.hidden = false;
    }
  });

  // 更新图表
  network.setData({nodes: nodes, edges: edges});
});
var resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function() {
  // 将所有节点和边的隐藏状态重置为false
  nodes.forEach(function(node) {
    node.hidden = false;
  });

  edges.forEach(function(edge) {
    edge.hidden = false;
  });

  // 更新图表
  network.setData({nodes: nodes, edges: edges});
});
// initialize your network!
var network = new vis.Network(container, data, options);
