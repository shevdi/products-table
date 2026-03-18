import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{I as u,a as l}from"./Icon-DQ-tARWa.js";import"./iframe-DGcxGepY.js";import"./preload-helper-Dp1pzeXC.js";const S={component:l,tags:["autodocs"],argTypes:{name:{control:"select",options:u},size:{control:{type:"number",min:16,max:48,step:4}},color:{control:"color",description:"Цвет иконки"}}},f=["var(--color-text-primary)","#e74c3c","#3498db","#2ecc71","#9b59b6"],a={args:{name:"search",size:24,color:"var(--color-text-primary)"},render:e=>n.jsx(l,{name:e.name,size:e.size,style:e.color?{color:e.color}:void 0})},s={args:{size:24},argTypes:{name:{table:{disable:!0}},color:{table:{disable:!0}}},render:e=>n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px",padding:"24px"},children:u.map(r=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[n.jsx(l,{name:r,size:e.size}),n.jsx("span",{style:{fontSize:"12px",color:"var(--color-text-secondary)"},children:r})]},r))})},o={args:{name:"search",size:32},argTypes:{color:{table:{disable:!0}}},render:e=>n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"24px",padding:"24px",alignItems:"center"},children:f.map(r=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[n.jsx(l,{name:e.name,size:e.size,style:{color:r}}),n.jsx("span",{style:{fontSize:"12px",color:"var(--color-text-secondary)"},children:r})]},r))})};var t,i,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: 'search',
    size: 24,
    color: 'var(--color-text-primary)'
  },
  render: args => <Icon name={args.name} size={args.size} style={args.color ? {
    color: args.color
  } : undefined} />
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,d,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 24
  },
  argTypes: {
    name: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    }
  },
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px',
    padding: '24px'
  }}>\r
      {ICON_NAMES.map(name => <div key={name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>\r
          <Icon name={name} size={args.size} />\r
          <span style={{
        fontSize: '12px',
        color: 'var(--color-text-secondary)'
      }}>{name}</span>\r
        </div>)}\r
    </div>
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var x,g,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'search',
    size: 32
  },
  argTypes: {
    color: {
      table: {
        disable: true
      }
    }
  },
  render: args => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    padding: '24px',
    alignItems: 'center'
  }}>\r
      {COLOR_SAMPLES.map(color => <div key={color} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>\r
          <Icon name={args.name} size={args.size} style={{
        color
      }} />\r
          <span style={{
        fontSize: '12px',
        color: 'var(--color-text-secondary)'
      }}>{color}</span>\r
        </div>)}\r
    </div>
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const j=["Default","AllIcons","Colors"];export{s as AllIcons,o as Colors,a as Default,j as __namedExportsOrder,S as default};
