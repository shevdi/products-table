import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./iframe-DGcxGepY.js";import{B as g}from"./BaseTable-Do5zh3nl.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./index-DfPplr2l.js";const c=[{id:1,name:"USB Флэшкарта 16GB",category:"Аксессуары",price:48652},{id:2,name:"Утюг Braun TexStyle 9",category:"Бытовая техника",price:4233},{id:3,name:"Смартфон Apple iPhone 17",category:"Телефоны",price:88652},{id:4,name:"Игровая консоль PlayStation 5 Pro",category:"Игровые консоли",price:56236},{id:5,name:"Фен Dyson Supersonic",category:"Электроника",price:48652}],i=[{accessorKey:"name",header:"Наименование",enableSorting:!0},{accessorKey:"category",header:"Категория",enableSorting:!0},{accessorKey:"price",header:"Цена, Р",enableSorting:!0,cell:({getValue:e})=>e().toLocaleString("ru-RU")}],P={component:g,tags:["autodocs"],decorators:[e=>r.jsx("div",{style:{padding:"24px",maxWidth:800},children:r.jsx(e,{})})]},o={args:{data:c,columns:i,getRowId:e=>String(e.id)}},t={args:{data:[],columns:i,emptyMessage:"Нет данных для отображения"}},n={render:function(){const[l,d]=I.useState([{id:"price",desc:!0}]);return r.jsx(g,{data:c,columns:i,sorting:l,onSortingChange:d,getRowId:m=>String(m.id)})}},a={render:function(){const[l,d]=I.useState({});return r.jsx(g,{data:c,columns:i,rowSelection:l,onRowSelectionChange:d,enableRowSelection:!0,getRowId:m=>String(m.id)})}},s={args:{data:c,columns:[{accessorKey:"name",header:"Наименование",cell:({row:e})=>r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:600},children:e.original.name}),r.jsx("div",{style:{fontSize:12,color:"var(--color-text-secondary)"},children:e.original.category})]}),meta:{truncate:!1}},{accessorKey:"price",header:"Цена",cell:({getValue:e})=>`${e().toLocaleString("ru-RU")} Р`}],getRowId:e=>String(e.id)}};var u,S,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: basicColumns,
    getRowId: row => String(row.id)
  }
}`,...(p=(S=o.parameters)==null?void 0:S.docs)==null?void 0:p.source}}};var y,w,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: basicColumns,
    emptyMessage: 'Нет данных для отображения'
  }
}`,...(h=(w=t.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var R,x,f;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: function WithSortingStory() {
    const [sorting, setSorting] = useState<SortingState>([{
      id: 'price',
      desc: true
    }]);
    return <BaseTable<SampleRow> data={sampleData} columns={basicColumns} sorting={sorting} onSortingChange={setSorting} getRowId={row => String(row.id)} />;
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,C,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: function WithSelectionStory() {
    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
    return <BaseTable<SampleRow> data={sampleData} columns={basicColumns} rowSelection={rowSelection} onRowSelectionChange={setRowSelection} enableRowSelection getRowId={row => String(row.id)} />;
  }
}`,...(v=(C=a.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var W,j,D;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: [{
      accessorKey: 'name',
      header: 'Наименование',
      cell: ({
        row
      }) => <div>\r
            <div style={{
          fontWeight: 600
        }}>{row.original.name}</div>\r
            <div style={{
          fontSize: 12,
          color: 'var(--color-text-secondary)'
        }}>\r
              {row.original.category}\r
            </div>\r
          </div>,
      meta: {
        truncate: false
      }
    }, {
      accessorKey: 'price',
      header: 'Цена',
      cell: ({
        getValue
      }) => \`\${(getValue() as number).toLocaleString('ru-RU')} Р\`
    }],
    getRowId: row => String(row.id)
  }
}`,...(D=(j=s.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};const z=["Default","Empty","WithSorting","WithSelection","CustomCells"];export{s as CustomCells,o as Default,t as Empty,a as WithSelection,n as WithSorting,z as __namedExportsOrder,P as default};
