(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),i=a(11),r=a.n(i),c=(a(16),a(7)),l=a(1),o=a(3),p=a(4),u=a(8),h=a(6),d=a(5),j=a(9),b=a.n(j),v=(a(18),a(19),a(0)),m=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"Display",children:[Object(v.jsxs)("div",{className:"general",children:[Object(v.jsx)("h1",{children:this.props.cvData.general.name.value}),Object(v.jsxs)("p",{children:[Object(v.jsx)("strong",{children:"Location:"})," ",this.props.cvData.general.location.value,"|",Object(v.jsx)("strong",{children:"Mobile:"}),"  ",this.props.cvData.general.mobile.value,"|",Object(v.jsx)("strong",{children:"Email:"})," ",this.props.cvData.general.email.value]})]}),Object(v.jsxs)("div",{className:"profile",children:[Object(v.jsx)("h2",{children:"Personal Profile"}),Object(v.jsx)("p",{children:this.props.cvData.profile.statement.value})]}),Object(v.jsxs)("div",{className:"experience",children:[Object(v.jsx)("h2",{children:"Work Experience"}),Object(v.jsx)("ul",{children:this.props.cvData.experience.map((function(e){return Object(v.jsxs)("li",{children:[Object(v.jsx)("h4",{children:e.name.value}),Object(v.jsxs)("h5",{children:[e.position.value," (",e.dateFrom.value," to ",e.dateTo.value,")"]}),Object(v.jsx)("p",{children:e.jobTasks.value})]},e.id)}))})]}),Object(v.jsxs)("div",{className:"education",children:[Object(v.jsx)("h2",{children:"Education"}),Object(v.jsx)("ul",{children:this.props.cvData.education.map((function(e){return Object(v.jsxs)("li",{children:[Object(v.jsx)("h4",{children:e.schoolName.value}),Object(v.jsxs)("h5",{children:[e.subject.value," (",e.dateFrom.value," to ",e.dateTo.value,")"]}),Object(v.jsx)("p",{children:e.summary.value})]},e.id)}))})]}),Object(v.jsxs)("div",{className:"about",children:[Object(v.jsx)("h2",{children:"Skills and Languages"}),Object(v.jsx)("p",{children:this.props.cvData.skills.skill.value})]})]})}}]),a}(n.Component),O=m,x=(a(21),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"InputLong",children:Object(v.jsxs)("form",{onSubmit:this.props.handleSubmit,"data-category":this.props.propertyCategory,"data-value":this.props.propertyValue,children:[Object(v.jsx)("textarea",{"data-category":this.props.propertyCategory,"data-value":this.props.propertyValue,value:this.props.inputData[this.props.propertyCategory][this.props.propertyValue].value,onChange:this.props.handleChange}),Object(v.jsx)("input",{className:"button",type:"submit",value:"Update"})]})})}}]),a}(n.Component)),g=x,y=(a(22),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"InputShort",children:Object(v.jsxs)("form",{className:"input-form",onSubmit:this.props.handleSubmit,"data-category":this.props.propertyCategory,"data-value":this.props.propertyValue,children:[Object(v.jsx)("input",{type:"text","data-category":this.props.propertyCategory,"data-value":this.props.propertyValue,value:this.props.inputData[this.props.propertyCategory][this.props.propertyValue].value,onChange:this.props.handleChange}),Object(v.jsx)("input",{className:"button",type:"submit",value:"Update"})]})})}}]),a}(n.Component)),D=y,C=(a(23),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:"InputEducation",children:[Object(v.jsxs)("form",{onSubmit:this.props.multiSubmit,"data-category":"education",children:[Object(v.jsxs)("div",{className:"school-subject",children:[Object(v.jsx)("input",{type:"text","data-category":"education","data-value":"schoolName",value:this.props.inputData.education.schoolName.value,onChange:this.props.handleChange}),Object(v.jsx)("input",{type:"text","data-category":"education","data-value":"subject",value:this.props.inputData.education.subject.value,onChange:this.props.handleChange})]}),Object(v.jsxs)("div",{className:"dates",children:[Object(v.jsxs)("label",{children:["From:",Object(v.jsx)("input",{"data-category":"education","data-value":"dateFrom",type:"date",value:this.props.inputData.education.dateFrom.value,onChange:this.props.handleChange})]}),Object(v.jsxs)("label",{children:["To:",Object(v.jsx)("input",{"data-category":"education","data-value":"dateTo",type:"date",value:this.props.inputData.education.dateTo.value,onChange:this.props.handleChange})]})]}),Object(v.jsx)("textarea",{"data-category":"education","data-value":"summary",value:this.props.inputData.education.summary.value,onChange:this.props.handleChange}),Object(v.jsx)("input",{type:"submit",value:"Add",className:"add button"})]}),Object(v.jsx)("ul",{children:this.props.educationArray.map((function(t){return Object(v.jsxs)("li",{children:[t.schoolName.value,Object(v.jsx)("button",{className:"button","data-category":"education","data-id":t.id,onClick:e.props.handleDelete,children:"Delete"})]},t.id)}))})]})}}]),a}(n.Component)),f=C,S=(a(24),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:"InputWork",children:[Object(v.jsxs)("form",{onSubmit:this.props.multiSubmit,"data-category":"experience",children:[Object(v.jsxs)("div",{className:"company-details",children:[Object(v.jsx)("input",{type:"text","data-category":"experience","data-value":"name",value:this.props.inputData.experience.name.value,onChange:this.props.handleChange}),Object(v.jsx)("input",{type:"text","data-category":"experience","data-value":"position",value:this.props.inputData.experience.position.value,onChange:this.props.handleChange})]}),Object(v.jsxs)("div",{className:"dates",children:[Object(v.jsxs)("label",{children:["From:",Object(v.jsx)("input",{"data-category":"experience","data-value":"dateFrom",type:"date",value:this.props.inputData.experience.dateFrom.value,onChange:this.props.handleChange})]}),Object(v.jsxs)("label",{children:["To:",Object(v.jsx)("input",{"data-category":"experience","data-value":"dateTo",type:"date",value:this.props.inputData.experience.dateTo.value,onChange:this.props.handleChange})]})]}),Object(v.jsx)("textarea",{"data-category":"experience","data-value":"jobTasks",value:this.props.inputData.experience.jobTasks.value,onChange:this.props.handleChange}),Object(v.jsx)("input",{type:"submit",value:"Add",className:"add button"})]}),Object(v.jsx)("ul",{children:this.props.experienceArray.map((function(t){return Object(v.jsxs)("li",{children:[t.name.value,Object(v.jsx)("button",{className:"button","data-category":"experience","data-id":t.id,onClick:e.props.handleDelete,children:"Delete"})]},t.id)}))})]})}}]),a}(n.Component)),N=S,k=(a(25),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"Input",children:[Object(v.jsxs)("div",{className:"general-info",children:[Object(v.jsx)(D,{handleChange:this.props.handleChange,handleSubmit:this.props.handleSubmit,inputData:this.props.inputData,propertyCategory:"general",propertyValue:"name"}),Object(v.jsx)(D,{handleChange:this.props.handleChange,handleSubmit:this.props.handleSubmit,inputData:this.props.inputData,propertyCategory:"general",propertyValue:"location"}),Object(v.jsx)(D,{handleChange:this.props.handleChange,handleSubmit:this.props.handleSubmit,inputData:this.props.inputData,propertyCategory:"general",propertyValue:"mobile"}),Object(v.jsx)(D,{handleChange:this.props.handleChange,handleSubmit:this.props.handleSubmit,inputData:this.props.inputData,propertyCategory:"general",propertyValue:"email"})]}),Object(v.jsx)(g,{handleChange:this.props.handleChange,handleSubmit:this.props.handleSubmit,inputData:this.props.inputData,propertyCategory:"profile",propertyValue:"statement"}),Object(v.jsx)(g,{handleChange:this.props.handleChange,handleSubmit:this.props.handleSubmit,inputData:this.props.inputData,propertyCategory:"skills",propertyValue:"skill"}),Object(v.jsx)(f,{handleChange:this.props.handleChange,multiSubmit:this.props.multiSubmit,handleDelete:this.props.handleDelete,inputData:this.props.inputData,educationArray:this.props.educationArray}),Object(v.jsx)(N,{handleChange:this.props.handleChange,multiSubmit:this.props.multiSubmit,handleDelete:this.props.handleDelete,inputData:this.props.inputData,experienceArray:this.props.experienceArray})]})}}]),a}(n.Component)),T=k,F=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({inputs:Object(l.a)(Object(l.a)({},n.state.inputs),{},Object(c.a)({},e.target.dataset.category,Object(l.a)(Object(l.a)({},n.state.inputs[e.target.dataset.category]),{},Object(c.a)({},e.target.dataset.value,{value:e.target.value}))))})},n.handleSubmit=function(e){e.preventDefault(),n.setState({cvData:Object(l.a)(Object(l.a)({},n.state.cvData),{},Object(c.a)({},e.target.dataset.category,Object(l.a)(Object(l.a)({},n.state.cvData[e.target.dataset.category]),{},Object(c.a)({},e.target.dataset.value,{value:n.state.inputs[e.target.dataset.category][e.target.dataset.value].value}))))})},n.handleDelete=function(e){n.setState({cvData:Object(l.a)(Object(l.a)({},n.state.cvData),{},Object(c.a)({},e.target.dataset.category,n.state.cvData[e.target.dataset.category].filter((function(t){return t.id!==e.target.dataset.id}))))})},n.multiSubmit=function(e){e.preventDefault(),"education"===e.target.dataset.category?n.setState({cvData:Object(l.a)(Object(l.a)({},n.state.cvData),{},{education:n.state.cvData.education.concat(n.state.inputs.education)}),inputs:Object(l.a)(Object(l.a)({},n.state.inputs),{},{education:{id:b()(),schoolName:{value:"School Name"},subject:{value:"Subject"},dateFrom:{value:""},dateTo:{value:""},summary:{value:"Summary"}}})}):"experience"===e.target.dataset.category&&n.setState({cvData:Object(l.a)(Object(l.a)({},n.state.cvData),{},{experience:n.state.cvData.experience.concat(n.state.inputs.experience)}),inputs:Object(l.a)(Object(l.a)({},n.state.inputs),{},{experience:{id:b()(),name:{value:"Company Name"},position:{value:"Job Title"},dateFrom:{value:""},dateTo:{value:""},jobTasks:{value:"Job Description"}}})})},n.handlePrint=function(){window.print()},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.multiSubmit=n.multiSubmit.bind(Object(u.a)(n)),n.handleDelete=n.handleDelete.bind(Object(u.a)(n)),n.state={inputs:{general:{name:{value:"Name"},location:{value:"Location"},mobile:{value:"Mobile Number"},email:{value:"Email Address"}},profile:{statement:{value:"Write your personal statement here."}},experience:{id:b()(),name:{value:"Company Name"},position:{value:"Job Title"},jobTasks:{value:"Job Description"},dateFrom:{value:""},dateTo:{value:""}},education:{id:b()(),schoolName:{value:"School Name"},subject:{value:"Subject"},dateFrom:{value:""},dateTo:{value:""},summary:{value:"Summary"}},skills:{skill:{value:"Write your skills and languages here."}}},cvData:{general:{name:{value:""},location:{value:""},mobile:{value:""},email:{value:""}},profile:{statement:{value:""}},experience:[],education:[],skills:{skill:{value:""}}}},n}return Object(p.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)("header",{children:[Object(v.jsx)("div",{children:"CV-Maker"}),Object(v.jsxs)("button",{onClick:this.handlePrint,className:"button",children:[Object(v.jsx)("h2",{children:"Print CV"}),Object(v.jsx)("p",{children:'For PDF select "Save to PDF"'}),Object(v.jsx)("p",{children:'Set margins to "None"'})]})]}),Object(v.jsxs)("main",{children:[Object(v.jsx)(T,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,multiSubmit:this.multiSubmit,handleDelete:this.handleDelete,inputData:this.state.inputs,educationArray:this.state.cvData.education,experienceArray:this.state.cvData.experience,className:"Input"}),Object(v.jsx)(O,{cvData:this.state.cvData,className:"Display"})]}),Object(v.jsx)("footer",{children:"Made by James Spencer"})]})}}]),a}(n.Component);r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(F,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.7afbc9dc.chunk.js.map