(function(r,t,n){"use strict";function o({attributes:e,setAttributes:s,isSelected:B}){const l=t.useBlockProps(),i=p=>{s({text:p})};return[React.createElement(React.Fragment,null,React.createElement("div",{key:"render",...l},React.createElement("div",{className:"but star-but"},React.createElement("span",null,e.text))),React.createElement(t.InspectorControls,null,React.createElement(n.PanelBody,{title:"Réglages"},React.createElement(n.TextControl,{help:"",label:"Texte du bouton",onChange:i,value:e.text}))))]}function a({attributes:e}){const s=t.useBlockProps.save();return React.createElement("div",{...s,key:"render","data-attributes":JSON.stringify(e)},React.createElement("div",{className:"but star-but"},React.createElement("span",null,e.text)))}const c={$schema:"https://schemas.wp.org/trunk/block.json",apiVersion:3,name:"entrepreneurs/starbutton",version:"0.1.0",title:"StarButton",category:"text",keywords:[],description:"",supports:{html:!1},attributes:{text:{type:"string",default:"Réserver un appel"}},example:{},textdomain:"entrepreneurs",editorScript:"file:./index.js",editorStyle:"file:./editor-style.css",style:"file:./style.css"};r.registerBlockType("entrepreneurs/starbutton",{edit:o,save:a,attributes:{},...c})})(wp.blocks,wp.blockEditor,wp.components);
