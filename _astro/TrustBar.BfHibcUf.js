import{j as e}from"./jsx-runtime.D_zvdyIk.js";import"./index.D-Pb_x6I.js";import{g as a}from"./assets.bPC6sFat.js";const r=[{name:"Vale",img:a("assets/logos/vale.png")},{name:"Vale Base Metals",img:a("assets/logos/vale_base_metals.png")},{name:"Samarco",img:a("assets/logos/samarco.png")},{name:"Anglo American",img:a("assets/logos/anglo_american.png")},{name:"Mosaic",img:a("assets/logos/mosaic.png")},{name:"Ternium",img:a("assets/logos/ternium.png")},{name:"Usiminas",img:a("assets/logos/usiminas.png")},{name:"MRN",img:a("assets/logos/mrn.png")},{name:"Gerdau",img:a("assets/logos/gerdau.png")},{name:"Nexa",img:a("assets/logos/nexa.png")},{name:"Kinross",img:a("assets/logos/kinross.png")}];function m(){const n=[...r,...r];return e.jsxs("section",{style:{background:"var(--c-gray-00)",borderBottom:"1px solid var(--c-gray-01)",padding:"2.25rem 0",overflow:"hidden"},children:[e.jsx("div",{className:"container",style:{marginBottom:"1.5rem"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("div",{style:{width:"4px",height:"22px",background:"var(--c-blue)",borderRadius:"2px",flexShrink:0}}),e.jsx("span",{style:{fontSize:"0.75rem",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--c-gray-04)"},children:"Tecnologia desenvolvida e homologada com a Vale e o Mining Hub — operações industriais de referência"})]})}),e.jsx("div",{className:"marquee-wrapper",children:e.jsx("div",{className:"marquee-track",children:n.map((s,i)=>e.jsx("div",{className:"logo-card",children:e.jsx("img",{src:s.img,alt:s.name,style:{height:"36px",width:"auto",objectFit:"contain",display:"block"}})},i))})}),e.jsx("style",{children:`
        .marquee-wrapper {
          display: flex;
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 2rem;
          white-space: nowrap;
          animation: logoMarquee 35s linear infinite;
          will-change: transform;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
        .logo-card {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.75rem;
          background: var(--c-white);
          border: 1px solid var(--c-gray-01);
          border-radius: var(--r-lg);
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
          transition: all 0.2s ease;
          flex-shrink: 0;
          height: 64px;
        }
        .logo-card:hover {
          border-color: var(--c-blue);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(21, 87, 212, 0.12);
        }
        @keyframes logoMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `})]})}export{m as default};
