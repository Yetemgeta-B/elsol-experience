import{c as m,k as x,e as h,j as e,m as s}from"./index-CQOmokeB.js";import{L as d}from"./Layout-Cm0DcZnn.js";import{B as i}from"./button-CF8blluJ.js";import{M as g}from"./Footer-AWKMVF3B.js";import"./ScrollButtons-v6mOGH49.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=m("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),v=()=>{const{destinations:a}=x(),l=h();return e.jsx(d,{children:e.jsx("div",{className:"pt-24 pb-16",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-center mb-16",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-6 text-elsol-sage",children:"Discover Amazing Destinations"}),e.jsx("p",{className:"text-lg text-gray-300 max-w-2xl mx-auto",children:"Explore our handpicked collection of breathtaking destinations. Each location offers unique experiences and unforgettable memories."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:a.map((t,o)=>e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:o*.1},className:"glass-panel rounded-xl overflow-hidden hover-lift",children:[e.jsxs("div",{className:"relative h-48",children:[e.jsx("img",{src:t.image,alt:t.name,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"}),e.jsx("h3",{className:"absolute bottom-4 left-4 text-xl font-semibold text-white",children:t.name})]}),e.jsxs("div",{className:"p-6",children:[e.jsx("p",{className:"text-gray-300 mb-4 line-clamp-2",children:t.description}),e.jsxs("div",{className:"space-y-2",children:[t.highlights.slice(0,3).map((c,n)=>e.jsxs("div",{className:"flex items-center text-sm text-gray-400",children:[e.jsx(g,{className:"w-4 h-4 mr-2 text-elsol-sage"}),e.jsx("span",{children:c})]},n)),t.highlights.length>3&&e.jsxs("div",{className:"text-sm text-gray-400 pl-6",children:["+",t.highlights.length-3," more highlights"]})]})]}),e.jsx("div",{className:"px-6 pb-6",children:e.jsxs(i,{onClick:()=>l("/contact"),className:"w-full bg-elsol-sage hover:bg-elsol-sage-light text-black group",children:["Book Now",e.jsx(r,{className:"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"})]})})]},t.id))}),a.length===0&&e.jsx("div",{className:"text-center py-12",children:e.jsx("p",{className:"text-gray-400 text-lg",children:"No destinations available at the moment."})}),e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"text-center mt-16",children:[e.jsx("h2",{className:"text-2xl font-semibold text-elsol-sage mb-4",children:"Ready to Start Your Journey?"}),e.jsx("p",{className:"text-gray-300 mb-8 max-w-2xl mx-auto",children:"Contact us to plan your perfect trip. Our travel experts will help you create an unforgettable experience."}),e.jsxs(i,{onClick:()=>l("/contact"),className:"bg-elsol-sage hover:bg-elsol-sage-light text-black group",children:["Contact Us",e.jsx(r,{className:"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"})]})]})]})})})};export{v as default};
