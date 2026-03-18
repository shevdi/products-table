import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{I as e}from"./index-BTMgydgk.js";import{a as n}from"./Icon-DQ-tARWa.js";import"./clsx-B-dksMZM.js";import"./iframe-DGcxGepY.js";import"./preload-helper-Dp1pzeXC.js";const G={component:e.Root,tags:["autodocs"],decorators:[v=>r.jsx("div",{style:{width:"400px",padding:"24px"},children:r.jsx(v,{})})]},o={render:()=>r.jsx(e.Root,{children:r.jsx(e.Box,{children:r.jsx(e.Field,{placeholder:"Enter text..."})})})},s={render:()=>r.jsx(e.Root,{children:r.jsxs(e.Box,{children:[r.jsx(e.Slot,{children:r.jsx(n,{name:"search",size:24})}),r.jsx(e.Field,{placeholder:"Найти"})]})})},t={render:()=>r.jsx(e.Root,{children:r.jsxs(e.Box,{children:[r.jsx(e.Slot,{children:r.jsx(n,{name:"user",size:24})}),r.jsx(e.Field,{placeholder:"Username"}),r.jsx(e.Slot,{children:r.jsx(e.Clear,{})})]})})},a={render:()=>r.jsx(e.Root,{type:"password",children:r.jsxs(e.Box,{children:[r.jsx(e.Slot,{children:r.jsx(n,{name:"lock",size:24})}),r.jsx(e.Field,{type:"password",placeholder:"Password"}),r.jsx(e.Slot,{children:r.jsx(e.PasswordToggle,{})})]})})},l={render:()=>r.jsxs(e.Root,{children:[r.jsx(e.Label,{children:"Логин"}),r.jsxs(e.Box,{children:[r.jsx(e.Slot,{children:r.jsx(n,{name:"user",size:24})}),r.jsx(e.Field,{placeholder:"Username"}),r.jsx(e.Slot,{children:r.jsx(e.Clear,{})})]})]})},p={render:()=>r.jsxs(e.Root,{error:"Обязательное поле",children:[r.jsx(e.Label,{children:"Логин"}),r.jsxs(e.Box,{children:[r.jsx(e.Slot,{children:r.jsx(n,{name:"user",size:24})}),r.jsx(e.Field,{placeholder:"Username"}),r.jsx(e.Slot,{children:r.jsx(e.Clear,{})})]}),r.jsx(e.Error,{})]})},d={render:()=>r.jsx(e.Root,{disabled:!0,children:r.jsxs(e.Box,{children:[r.jsx(e.Slot,{children:r.jsx(n,{name:"search",size:24})}),r.jsx(e.Field,{placeholder:"Disabled",disabled:!0})]})})},c={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsxs(e.Root,{size:"sm",children:[r.jsx(e.Label,{children:"Search (sm)"}),r.jsxs(e.Box,{children:[r.jsx(e.Slot,{children:r.jsx(n,{name:"search",size:24})}),r.jsx(e.Field,{placeholder:"48px height, 8px radius"})]})]}),r.jsxs(e.Root,{size:"md",children:[r.jsx(e.Label,{children:"Login (md)"}),r.jsxs(e.Box,{children:[r.jsx(e.Slot,{children:r.jsx(n,{name:"user",size:24})}),r.jsx(e.Field,{placeholder:"55px height, 12px radius"})]})]})]})};var i,u,x;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Input.Root>\r
      <Input.Box>\r
        <Input.Field placeholder="Enter text..." />\r
      </Input.Box>\r
    </Input.Root>
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var I,h,m;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Input.Root>\r
      <Input.Box>\r
        <Input.Slot>\r
          <Icon name="search" size={24} />\r
        </Input.Slot>\r
        <Input.Field placeholder="Найти" />\r
      </Input.Box>\r
    </Input.Root>
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var j,S,R;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Input.Root>\r
      <Input.Box>\r
        <Input.Slot>\r
          <Icon name="user" size={24} />\r
        </Input.Slot>\r
        <Input.Field placeholder="Username" />\r
        <Input.Slot>\r
          <Input.Clear />\r
        </Input.Slot>\r
      </Input.Box>\r
    </Input.Root>
}`,...(R=(S=t.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var B,b,g;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Input.Root type="password">\r
      <Input.Box>\r
        <Input.Slot>\r
          <Icon name="lock" size={24} />\r
        </Input.Slot>\r
        <Input.Field type="password" placeholder="Password" />\r
        <Input.Slot>\r
          <Input.PasswordToggle />\r
        </Input.Slot>\r
      </Input.Box>\r
    </Input.Root>
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var z,F,L;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Input.Root>\r
      <Input.Label>Логин</Input.Label>\r
      <Input.Box>\r
        <Input.Slot>\r
          <Icon name="user" size={24} />\r
        </Input.Slot>\r
        <Input.Field placeholder="Username" />\r
        <Input.Slot>\r
          <Input.Clear />\r
        </Input.Slot>\r
      </Input.Box>\r
    </Input.Root>
}`,...(L=(F=l.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var w,f,y;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Input.Root error="Обязательное поле">\r
      <Input.Label>Логин</Input.Label>\r
      <Input.Box>\r
        <Input.Slot>\r
          <Icon name="user" size={24} />\r
        </Input.Slot>\r
        <Input.Field placeholder="Username" />\r
        <Input.Slot>\r
          <Input.Clear />\r
        </Input.Slot>\r
      </Input.Box>\r
      <Input.Error />\r
    </Input.Root>
}`,...(y=(f=p.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var C,D,E;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Input.Root disabled>\r
      <Input.Box>\r
        <Input.Slot>\r
          <Icon name="search" size={24} />\r
        </Input.Slot>\r
        <Input.Field placeholder="Disabled" disabled />\r
      </Input.Box>\r
    </Input.Root>
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var U,P,W;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Input.Root size="sm">\r
        <Input.Label>Search (sm)</Input.Label>\r
        <Input.Box>\r
          <Input.Slot>\r
            <Icon name="search" size={24} />\r
          </Input.Slot>\r
          <Input.Field placeholder="48px height, 8px radius" />\r
        </Input.Box>\r
      </Input.Root>\r
      <Input.Root size="md">\r
        <Input.Label>Login (md)</Input.Label>\r
        <Input.Box>\r
          <Input.Slot>\r
            <Icon name="user" size={24} />\r
          </Input.Slot>\r
          <Input.Field placeholder="55px height, 12px radius" />\r
        </Input.Box>\r
      </Input.Root>\r
    </div>
}`,...(W=(P=c.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};const H=["Default","Search","UsernameWithClear","Password","WithLabel","WithError","Disabled","Sizes"];export{o as Default,d as Disabled,a as Password,s as Search,c as Sizes,t as UsernameWithClear,p as WithError,l as WithLabel,H as __namedExportsOrder,G as default};
