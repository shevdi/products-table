import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{I as u}from"./Icon-DQ-tARWa.js";import{B as m,a as g,b as n}from"./Button-DHCS4zdB.js";import"./iframe-DGcxGepY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-LhYNraeY.js";import"./clsx-B-dksMZM.js";const P={component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:g},size:{control:"select",options:m},iconLeft:{control:"select",options:u},iconRight:{control:"select",options:u}}},t={args:{children:"Button",variant:"primary",size:"md"}},s={args:{children:"Button",size:"md"},render:e=>r.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:g.map(a=>r.jsx(n,{...e,variant:a,children:a},a))})},i={args:{children:"Button",variant:"primary"},render:e=>r.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:m.map(a=>r.jsx(n,{...e,size:a,children:a},a))})},o={args:{children:"Add",variant:"primary",size:"md",iconLeft:"plus-circle"},render:e=>r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(n,{...e,iconLeft:"plus-circle",children:"Add"}),r.jsx(n,{...e,iconRight:"reload",iconLeft:void 0,children:"Refresh"}),r.jsx(n,{...e,iconLeft:"dots",iconRight:void 0,children:"More"})]})},d={args:{children:"Disabled",variant:"primary",size:"md",disabled:!0},render:e=>r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(n,{...e,variant:"primary",children:"Primary disabled"}),r.jsx(n,{...e,variant:"secondary",children:"Secondary disabled"})]})},l={args:{children:"Button"},render:e=>r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px",padding:"24px"},children:g.map(a=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx("h4",{style:{margin:0,fontSize:"14px",textTransform:"capitalize"},children:a}),m.map(p=>r.jsx(n,{...e,variant:a,size:p,children:p},p))]},a))})},w=`
  .login-button-custom button {
    border-radius: 12px !important;
    border: 1px solid #367AFF !important;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 100%), #2430DB !important;
    box-shadow: inset 0 -2px 0 1px rgba(0,0,0,0.08), 0 8px 8px 0 rgba(54,122,255,0.03) !important;
  }
  .login-button-custom button:hover:not(:disabled) {
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 100%), color-mix(in srgb, #2430DB 85%, black) !important;
  }
`,c={args:{children:"Войти",variant:"primary",size:"md"},decorators:[e=>r.jsxs(r.Fragment,{children:[r.jsx("style",{children:w}),r.jsx("div",{className:"login-button-custom",children:r.jsx(e,{})})]})]};var x,y,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md'
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,f,B;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    size: 'md'
  },
  render: args => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>\r
      {BUTTON_VARIANTS.map(variant => <Button key={variant} {...args} variant={variant}>\r
          {variant}\r
        </Button>)}\r
    </div>
}`,...(B=(f=s.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var b,S,z;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary'
  },
  render: args => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      {BUTTON_SIZES.map(size => <Button key={size} {...args} size={size}>\r
          {size}\r
        </Button>)}\r
    </div>
}`,...(z=(S=i.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var j,T,A;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Add',
    variant: 'primary',
    size: 'md',
    iconLeft: 'plus-circle'
  },
  render: args => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>\r
      <Button {...args} iconLeft="plus-circle">\r
        Add\r
      </Button>\r
      <Button {...args} iconRight="reload" iconLeft={undefined}>\r
        Refresh\r
      </Button>\r
      <Button {...args} iconLeft="dots" iconRight={undefined}>\r
        More\r
      </Button>\r
    </div>
}`,...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var N,I,L;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    variant: 'primary',
    size: 'md',
    disabled: true
  },
  render: args => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>\r
      <Button {...args} variant="primary">\r
        Primary disabled\r
      </Button>\r
      <Button {...args} variant="secondary">\r
        Secondary disabled\r
      </Button>\r
    </div>
}`,...(L=(I=d.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var R,D,_;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    padding: '24px'
  }}>\r
      {BUTTON_VARIANTS.map(variant => <div key={variant} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>\r
          <h4 style={{
        margin: 0,
        fontSize: '14px',
        textTransform: 'capitalize'
      }}>\r
            {variant}\r
          </h4>\r
          {BUTTON_SIZES.map(size => <Button key={size} {...args} variant={variant} size={size}>\r
              {size}\r
            </Button>)}\r
        </div>)}\r
    </div>
}`,...(_=(D=l.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var O,W,k;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Войти',
    variant: 'primary',
    size: 'md'
  },
  decorators: [Story => <>\r
        <style>{loginButtonStyles}</style>\r
        <div className="login-button-custom">\r
          <Story />\r
        </div>\r
      </>]
}`,...(k=(W=c.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};const q=["Default","Variants","Sizes","WithIcons","Disabled","AllCombinations","Login"];export{l as AllCombinations,t as Default,d as Disabled,c as Login,i as Sizes,s as Variants,o as WithIcons,q as __namedExportsOrder,P as default};
