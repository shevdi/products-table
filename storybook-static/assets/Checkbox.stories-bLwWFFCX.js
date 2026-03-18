import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as U}from"./iframe-DGcxGepY.js";import{C as r}from"./index-DfPplr2l.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";const O={component:r.Root,tags:["autodocs"],decorators:[d=>e.jsx("div",{style:{padding:"24px"},children:e.jsx(d,{})})]},o={render:()=>e.jsx(r.Root,{children:e.jsx(r.Box,{})})},s={render:()=>e.jsxs(r.Root,{children:[e.jsx(r.Box,{}),e.jsx(r.Label,{children:"Наименование"})]})},a={render:()=>e.jsxs(r.Root,{checked:!0,onChange:()=>{},children:[e.jsx(r.Box,{}),e.jsx(r.Label,{children:"Наименование"})]})},t={render:()=>e.jsxs(r.Root,{disabled:!0,children:[e.jsx(r.Box,{}),e.jsx(r.Label,{children:"Disabled"})]})},n={render:()=>e.jsxs(r.Root,{error:"Обязательное поле",children:[e.jsx(r.Box,{}),e.jsx(r.Label,{children:"Согласие с условиями"})]})},c={render:function(){const[x,E]=U.useState(!1);return e.jsxs("form",{onSubmit:F=>{F.preventDefault(),alert(`Submitted: agreed=${x}`)},style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(r.Root,{checked:x,onChange:E,children:[e.jsx(r.Box,{}),e.jsx(r.Label,{children:"Я согласен с условиями"})]}),e.jsx("button",{type:"submit",children:"Отправить"})]})}};var l,b,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Checkbox.Root>\r
      <Checkbox.Box />\r
    </Checkbox.Root>
}`,...(i=(b=o.parameters)==null?void 0:b.docs)==null?void 0:i.source}}};var h,m,p;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Checkbox.Root>\r
      <Checkbox.Box />\r
      <Checkbox.Label>Наименование</Checkbox.Label>\r
    </Checkbox.Root>
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,C,k;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Checkbox.Root checked onChange={() => {}}>\r
      <Checkbox.Box />\r
      <Checkbox.Label>Наименование</Checkbox.Label>\r
    </Checkbox.Root>
}`,...(k=(C=a.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var g,j,R;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Checkbox.Root disabled>\r
      <Checkbox.Box />\r
      <Checkbox.Label>Disabled</Checkbox.Label>\r
    </Checkbox.Root>
}`,...(R=(j=t.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var f,L,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Checkbox.Root error="Обязательное поле">\r
      <Checkbox.Box />\r
      <Checkbox.Label>Согласие с условиями</Checkbox.Label>\r
    </Checkbox.Root>
}`,...(S=(L=n.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var B,D,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: function FormUsageStory() {
    const [agreed, setAgreed] = useState(false);
    return <form onSubmit={e => {
      e.preventDefault();
      alert(\`Submitted: agreed=\${agreed}\`);
    }} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>\r
        <Checkbox.Root checked={agreed} onChange={setAgreed}>\r
          <Checkbox.Box />\r
          <Checkbox.Label>Я согласен с условиями</Checkbox.Label>\r
        </Checkbox.Root>\r
        <button type="submit">Отправить</button>\r
      </form>;
  }
}`,...(y=(D=c.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};const q=["Default","WithLabel","Checked","Disabled","Error","FormUsage"];export{a as Checked,o as Default,t as Disabled,n as Error,c as FormUsage,s as WithLabel,q as __namedExportsOrder,O as default};
