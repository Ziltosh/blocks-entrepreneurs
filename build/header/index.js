(function(B,c,d){"use strict";var s=document.createElement("style");s.textContent=`#header{width:auto;display:flex;justify-content:space-between;margin:.5rem 3rem;height:60px;align-items:center;z-index:3;position:absolute;top:25px;left:0;right:0}#header .mobile-menu-icon{display:none}#header nav{height:100%}#header nav ul{display:flex;gap:2rem;height:100%;align-items:center}#header nav ul>li{display:flex;align-items:center;gap:.25rem;cursor:pointer;height:100%}#header nav ul>li a{color:#fff;text-align:center;font-size:1rem;font-style:normal;font-weight:300;line-height:1rem;opacity:.5;transition:.3s ease-in-out all}#header nav ul>li:hover a{opacity:1}#header nav ul>li.sub-nav-wrapper{position:relative}#header nav ul>li.sub-nav-wrapper ul{display:none;position:absolute;top:100%;left:0;width:21.4375rem;padding:1.5rem;flex-direction:column;align-items:flex-start;gap:1rem;border-radius:1rem;border:1px solid rgba(255,255,255,.2117647059);background:#ffffff1a;-webkit-backdrop-filter:blur(32px);-moz-backdrop-filter:blur(32px);-o-backdrop-filter:blur(32px);backdrop-filter:blur(32px);height:-moz-max-content;height:max-content;z-index:3}#header nav ul>li.sub-nav-wrapper ul li{display:flex;justify-content:space-between;align-items:center;align-self:stretch;transition:opacity .3s ease-in-out}#header nav ul>li.sub-nav-wrapper ul li a{font-size:1.5rem;font-style:normal;font-weight:500;line-height:100%;letter-spacing:-.03rem;opacity:.5;background:linear-gradient(180deg,#ffe6e6 26.6%,#c8aeae);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}#header nav ul>li.sub-nav-wrapper ul li svg{transition:fill .3s ease-in-out}#header nav ul>li.sub-nav-wrapper ul li svg g{transition:opacity .3s ease-in-out}#header nav ul>li.sub-nav-wrapper ul li:hover a{opacity:1}#header nav ul>li.sub-nav-wrapper ul li:hover svg{fill:#ffffff1a}#header nav ul>li.sub-nav-wrapper ul li:hover svg g{opacity:1}#header nav ul>li.sub-nav-wrapper>svg{fill:#ffffff1a;transition:fill .3s ease-in-out}#header nav ul>li.sub-nav-wrapper>svg path{stroke:#ffffff1a;transition:stroke .3s ease-in-out,transform .3s ease-in-out;transform-origin:center}#header nav ul>li.sub-nav-wrapper:hover svg path{stroke:#fff}#header nav ul>li.sub-nav-wrapper.active a{opacity:1}#header nav ul>li.sub-nav-wrapper.active>svg path{stroke:#fff;transform:rotate(-180deg)}#header nav ul>li.sub-nav-wrapper.active ul{display:flex}#header .but{padding:.75rem 1.5rem}#header .but span{font-size:.875rem;font-style:normal;font-weight:400;line-height:110%;letter-spacing:-.0175rem;background:linear-gradient(180deg,#fff,#ffffffe6);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}#header .mobile-nav{display:none}
`,document.head.appendChild(s);const g="data:image/png;base64,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",o="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.17092%205.00831C7.17092%206.21671%206.19132%207.19631%204.98292%207.19631C3.77452%207.19631%202.79492%206.21671%202.79492%205.00831C2.79492%203.79991%203.77452%202.82031%204.98292%202.82031C6.19132%202.82031%207.17092%203.79991%207.17092%205.00831ZM9.23697%2020.9937V8.85469H12.855V10.5147H12.906C13.409%209.56169%2014.639%208.55469%2016.474%208.55469C20.296%208.55469%2021%2011.0677%2021%2014.3377V20.9947H17.229V15.0907C17.229%2013.6837%2017.205%2011.8727%2015.268%2011.8727C13.304%2011.8727%2013.006%2013.4067%2013.006%2014.9907V20.9937H9.23697ZM6.86997%208.85469H3.09497V20.9937H6.86997V8.85469Z'%20fill='url(%23paint0_linear_178_3914)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_178_3914'%20x1='11.8974'%20y1='2.82031'%20x2='11.8974'%20y2='20.9947'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.7'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",A="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M19.4943%204.51694C19.9477%204.97017%2020.3015%205.51306%2020.533%206.11088C20.7999%206.82013%2020.9423%207.57016%2020.954%208.32788C21.01%209.28488%2021.01%209.59488%2021.01%2012.0379C21.01%2014.4809%2020.997%2014.7859%2020.954%2015.7479C20.939%2016.4959%2020.798%2017.2339%2020.535%2017.9339C20.3031%2018.5316%2019.9493%2019.0745%2019.4959%2019.5279C19.0426%2019.9812%2018.4997%2020.3351%2017.902%2020.5669C17.2022%2020.829%2016.4631%2020.9707%2015.716%2020.9859C14.761%2021.0409%2014.448%2021.0409%2012.006%2021.0409C9.56395%2021.0409%209.25895%2021.0279%208.29595%2020.9859C7.54732%2020.9613%206.80839%2020.8091%206.11095%2020.5359C5.51302%2020.3045%204.96993%2019.9509%204.51639%2019.4977C4.06285%2019.0445%203.70883%2018.5016%203.47695%2017.9039C3.21395%2017.2029%203.07295%2016.4649%203.05795%2015.7169C3.00195%2014.7599%203.00195%2014.4489%203.00195%2012.0069C3.00195%209.56388%203.01495%209.25888%203.05795%208.29688C3.07257%207.54972%203.21426%206.8105%203.47695%206.11088C3.70818%205.51291%204.06186%204.96987%204.51529%204.51661C4.96872%204.06335%205.51189%203.70988%206.10995%203.47888C6.80871%203.21548%207.54734%203.07344%208.29395%203.05888C9.24895%203.00488%209.56195%203.00488%2012.004%203.00488C14.446%203.00488%2014.751%203.01688%2015.714%203.05888C16.4611%203.07422%2017.2003%203.21624%2017.9%203.47888C18.4979%203.71015%2019.0409%204.06372%2019.4943%204.51694ZM19.004%2017.3309C19.2033%2016.7901%2019.3085%2016.2192%2019.315%2015.6429V15.6439H19.326C19.369%2014.6879%2019.369%2014.4259%2019.369%2011.9899C19.369%209.55288%2019.358%209.28588%2019.315%208.33488C19.3056%207.76504%2019.2005%207.20083%2019.004%206.66588C18.8537%206.27695%2018.6238%205.92374%2018.3289%205.62891C18.0341%205.33408%2017.6809%205.10416%2017.292%204.95388C16.7573%204.75495%2016.1924%204.64974%2015.622%204.64288C14.655%204.58788%2014.405%204.58788%2011.968%204.58788C9.53095%204.58788%209.26395%204.59988%208.31295%204.64288C7.74298%204.65085%207.17854%204.75602%206.64395%204.95388C5.85495%205.25588%205.22995%205.87688%204.92495%206.66588C4.72561%207.2063%204.62042%207.77691%204.61395%208.35288C4.56095%209.32188%204.56095%209.57088%204.56095%2012.0079C4.56095%2014.4439%204.57095%2014.7119%204.61395%2015.6619C4.62326%2016.2317%204.7284%2016.7959%204.92495%2017.3309C5.07579%2017.7205%205.30673%2018.0741%205.60284%2018.3688C5.89895%2018.6636%206.25364%2018.8929%206.64395%2019.0419C7.17828%2019.2407%207.74288%2019.3459%208.31295%2019.3529C9.28095%2019.4079%209.52995%2019.4079%2011.968%2019.4079C14.404%2019.4079%2014.672%2019.3969%2015.622%2019.3529C16.1923%2019.3455%2016.7572%2019.2403%2017.292%2019.0419C17.6809%2018.8919%2018.0342%2018.6622%2018.329%2018.3676C18.6239%2018.0729%2018.8538%2017.7198%2019.004%2017.3309ZM16.806%208.28491C17.4014%208.28491%2017.884%207.80227%2017.884%207.20691C17.884%206.61154%2017.4014%206.12891%2016.806%206.12891C16.2107%206.12891%2015.728%206.61154%2015.728%207.20691C15.728%207.80227%2016.2107%208.28491%2016.806%208.28491ZM11.999%207.37695C10.7726%207.37695%209.59651%207.86412%208.72934%208.73129C7.86217%209.59846%207.375%2010.7746%207.375%2012.001C7.375%2013.2273%207.86217%2014.4034%208.72934%2015.2706C9.59651%2016.1378%2010.7726%2016.625%2011.999%2016.625C13.2254%2016.625%2014.4015%2016.1378%2015.2687%2015.2706C16.1358%2014.4034%2016.623%2013.2273%2016.623%2012.001C16.623%2010.7746%2016.1358%209.59846%2015.2687%208.73129C14.4015%207.86412%2013.2254%207.37695%2011.999%207.37695ZM11.999%2015.004C11.2023%2015.004%2010.4382%2014.6875%209.87485%2014.1241C9.31149%2013.5607%208.995%2012.7967%208.995%2012C8.995%2011.2032%209.31149%2010.4392%209.87485%209.8758C10.4382%209.31245%2011.2023%208.99595%2011.999%208.99595C12.7957%208.99595%2013.5598%209.31245%2014.1231%209.8758C14.6865%2010.4392%2015.003%2011.2032%2015.003%2012C15.003%2012.7967%2014.6865%2013.5607%2014.1231%2014.1241C13.5598%2014.6875%2012.7957%2015.004%2011.999%2015.004Z'%20fill='url(%23paint0_linear_178_3919)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_178_3919'%20x1='12.006'%20y1='3.00488'%20x2='12.006'%20y2='21.0409'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.7'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",C="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.5931%207.20301C21.4792%206.78041%2021.2566%206.39501%2020.9475%206.08518C20.6383%205.77534%2020.2534%205.55187%2019.8311%205.43701C18.2651%205.00701%2012.0001%205.00001%2012.0001%205.00001C12.0001%205.00001%205.73609%204.99301%204.16909%205.40401C3.74701%205.52415%203.36291%205.75078%203.05365%206.06214C2.7444%206.3735%202.52037%206.75913%202.40309%207.18201C1.99009%208.74801%201.98609%2011.996%201.98609%2011.996C1.98609%2011.996%201.98209%2015.26%202.39209%2016.81C2.62209%2017.667%203.29709%2018.344%204.15509%2018.575C5.73709%2019.005%2011.9851%2019.012%2011.9851%2019.012C11.9851%2019.012%2018.2501%2019.019%2019.8161%2018.609C20.2386%2018.4943%2020.6238%2018.2714%2020.9337%2017.9622C21.2436%2017.653%2021.4675%2017.2682%2021.5831%2016.846C21.9971%2015.281%2022.0001%2012.034%2022.0001%2012.034C22.0001%2012.034%2022.0201%208.76901%2021.5931%207.20301ZM9.99609%2015.005L10.0011%209.00501L15.2081%2012.01L9.99609%2015.005Z'%20fill='url(%23paint0_linear_178_3925)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_178_3925'%20x1='11.9932'%20y1='5'%20x2='11.9932'%20y2='19.012'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.7'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",E="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.9574%206.13315C17.0436%205.93221%2016.217%205.44697%2015.5961%204.74705C14.9753%204.04714%2014.5921%203.16853%2014.5016%202.23732V1.83398H11.3391V14.3648C11.3397%2014.9208%2011.1654%2015.463%2010.8408%2015.9144C10.5162%2016.3658%2010.0578%2016.7037%209.53053%2016.8801C9.00325%2017.0566%208.43382%2017.0626%207.90291%2016.8975C7.372%2016.7323%206.90651%2016.4042%206.57239%2015.9598C6.27305%2015.5664%206.08975%2015.0971%206.04322%2014.605C5.9967%2014.1128%206.08879%2013.6175%206.3091%2013.175C6.52941%2012.7325%206.86914%2012.3604%207.28988%2012.1009C7.71061%2011.8414%208.19556%2011.7048%208.68989%2011.7065C8.96328%2011.7049%209.2353%2011.7451%209.49656%2011.8257V8.61732C9.19253%208.57967%208.88615%208.56435%208.57989%208.57149C7.45176%208.60163%206.3569%208.96009%205.42938%209.60298C4.50187%2010.2459%203.78195%2011.1453%203.3578%2012.1911C2.93365%2013.2369%202.82366%2014.3837%203.04131%2015.491C3.25896%2016.5983%203.79481%2017.6182%204.58322%2018.4257C5.39125%2019.2472%206.42526%2019.8099%207.55386%2020.0425C8.68246%2020.275%209.85471%2020.1668%2010.9217%2019.7315C11.9886%2019.2963%2012.9021%2018.5537%2013.546%2017.5981C14.19%2016.6426%2014.5354%2015.5171%2014.5382%2014.3648V7.94815C15.8137%208.85927%2017.3432%209.34666%2018.9107%209.34148V6.22482C18.6028%206.22609%2018.2956%206.19537%2017.9941%206.13315H17.9574Z'%20fill='url(%23paint0_linear_178_3928)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_178_3928'%20x1='10.9215'%20y1='1.83398'%20x2='10.9215'%20y2='20.162'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.7'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",u="data:image/svg+xml,%3csvg%20width='34'%20height='34'%20viewBox='0%200%2034%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame'%20clip-path='url(%23clip0_177_2517)'%3e%3cpath%20id='Vector'%20d='M27.8875%2033.9141H19.9223L31.1667%2024.7561L27.8875%2033.9141Z'%20fill='%23EE0000'/%3e%3cpath%20id='Vector_2'%20d='M27.8875%200H19.9223L31.1667%209.15797L27.8875%200Z'%20fill='%23EE0000'/%3e%3cpath%20id='Union'%20d='M0%2033.3534V33.8224H16.4511V33.3534C15.1365%2033.2574%2013.028%2032.6481%2012.2783%2031.6178C11.8093%2030.9642%2011.8093%2028.948%2011.8093%2027.2124V16.9459C12.2675%2016.9457%2012.5984%2016.943%2012.8622%2016.9407C13.7011%2016.9337%2013.8615%2016.9324%2015.2768%2017.0382C17.1048%2017.1786%2018.3713%2017.6956%2019.5419%2018.7258C20.8528%2019.8964%2022.2598%2023.1313%2022.7768%2025.0995H23.3381V8.69641H22.7768C22.3078%2011.7909%2021.3698%2014.8854%2016.8721%2015.8197C15.1422%2016.1846%2012.3555%2016.1961%2011.8093%2016.1963C11.8094%2012.6143%2011.8111%209.93675%2011.8574%206.8691C11.866%206.61476%2011.8701%206.34666%2011.8743%206.07172C11.8934%204.82578%2011.9146%203.43933%2012.3744%202.55598C13.172%201.05674%2015.0959%200.728078%2016.4068%200.539743V0.0707703H0.140324V0.539743C1.7799%200.728078%203.23484%201.14905%204.12478%202.18302C4.82641%203.02495%204.82641%205.51016%204.82641%207.66671V16.8063C4.82641%2020.2774%204.78209%2024.7752%204.73408%2026.5107C4.73036%2026.667%204.72693%2026.8249%204.72348%2026.9837C4.68242%2028.8734%204.63886%2030.8782%204.07678%2031.5255C3.14251%2032.6037%201.54726%2033.1207%200%2033.3534Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_177_2517'%3e%3crect%20width='162'%20height='34'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";function h({attributes:w,setAttributes:Q,className:l}){const r=c.useBlockProps(),i=c.useInnerBlocksProps(r,{template:[["entrepreneurs/starbutton"]],templateLock:"all"}),e=d.useRef(null),t=[{name:"Accueil",href:"/",id:0},{name:"Nos Strategies",href:"/about",id:1},{name:"Études de cas",href:"/contact",id:2},{name:"Ressources",href:"#",id:3,subNav:[{name:"La Communauté",href:"/",id:0},{name:"Le Déclic",href:"/",id:1},{name:"Actualités",href:"/",id:2}]}];return React.createElement("header",{key:"render",...r,id:"header"},React.createElement("svg",{className:"mobile-menu-icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},React.createElement("path",{d:"M3 12H15M3 6H21M3 18H21",stroke:"#CDCDCD",strokeLinecap:"round",strokeLinejoin:"round"})),React.createElement("img",{src:u,alt:"logo",className:"logo"}),React.createElement("nav",null,React.createElement("ul",null,t.map(a=>React.createElement("li",{key:a.id,className:a.subNav&&"sub-nav-wrapper",onClick:n=>a.subNav&&n.currentTarget.classList.toggle("active"),onBlur:n=>a.subNav&&n.currentTarget.classList.remove("active")},React.createElement("a",{href:a.href},a.name),a.subNav&&React.createElement(React.Fragment,null,React.createElement("svg",{width:"17",height:"16",viewBox:"0 0 17 16"},React.createElement("rect",{x:"0.5",width:"16",height:"16",rx:"8"}),React.createElement("path",{d:"M6 7L8.5 9.5L11 7",strokeLinecap:"round",strokeLinejoin:"round"})),React.createElement("ul",{className:"sub-nav"},a.subNav.map(n=>React.createElement("li",{key:n.id},React.createElement("a",{href:n.href},n.name),React.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},React.createElement("rect",{x:"0.5",y:"0.5",width:"23",height:"23",rx:"11.5",stroke:"white",strokeOpacity:"0.1"}),React.createElement("g",{opacity:"0.2"},React.createElement("path",{d:"M7.19971 12H16.7997M16.7997 12L13.1997 8.40001M16.7997 12L13.1997 15.6",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}))))))))))),React.createElement("div",{ref:e,className:"mobile-nav"},React.createElement("div",{className:"grid"},React.createElement("img",{src:g,alt:""})),React.createElement("ul",{className:"nav-list"},t.map(a=>React.createElement("li",{key:a.id,className:a.subNav&&"sub-nav-wrapper"},React.createElement("a",{onClick:n=>a.subNav&&n.currentTarget.parentElement.classList.toggle("active"),href:a.href},a.name),a.subNav&&React.createElement(React.Fragment,null,React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},React.createElement("rect",{width:"16",height:"16",rx:"8",fill:"white",fillOpacity:"0.1"}),React.createElement("path",{d:"M5.5 7L8 9.5L10.5 7",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})),React.createElement("ul",{className:"sub-nav"},a.subNav.map(n=>React.createElement("li",{key:n.id},React.createElement("a",{href:n.href},n.name)))))))),React.createElement("div",{className:"footer"},React.createElement("span",null,"Follow us"),React.createElement("ul",{className:"social-icons"},React.createElement("li",null,React.createElement("img",{src:o,alt:"LinkedIn"})),React.createElement("li",null,React.createElement("img",{src:A,alt:"Instagram"})),React.createElement("li",null,React.createElement("img",{src:C,alt:"Youtube"})),React.createElement("li",null,React.createElement("img",{src:E,alt:"Tiktok"}))))),i.children)}function p({attributes:w,className:Q}){const l=c.useBlockProps.save(),r=c.useInnerBlocksProps.save(l),i=[{name:"Accueil",href:"/",id:0},{name:"Nos Strategies",href:"/about",id:1},{name:"Études de cas",href:"/contact",id:2},{name:"Ressources",href:"#",id:3,subNav:[{name:"La Communauté",href:"/",id:0},{name:"Le Déclic",href:"/",id:1},{name:"Actualités",href:"/",id:2}]}];return React.createElement("header",{key:"render",...l,id:"header"},React.createElement("svg",{className:"mobile-menu-icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},React.createElement("path",{d:"M3 12H15M3 6H21M3 18H21",stroke:"#CDCDCD",strokeLinecap:"round",strokeLinejoin:"round"})),React.createElement("img",{src:u,alt:"logo",className:"logo"}),React.createElement("nav",null,React.createElement("ul",null,i.map(e=>React.createElement("li",{key:e.id,className:e.subNav&&"sub-nav-wrapper",onClick:t=>e.subNav&&t.currentTarget.classList.toggle("active"),onBlur:t=>e.subNav&&t.currentTarget.classList.remove("active")},React.createElement("a",{href:e.href},e.name),e.subNav&&React.createElement(React.Fragment,null,React.createElement("svg",{width:"17",height:"16",viewBox:"0 0 17 16"},React.createElement("rect",{x:"0.5",width:"16",height:"16",rx:"8"}),React.createElement("path",{d:"M6 7L8.5 9.5L11 7",strokeLinecap:"round",strokeLinejoin:"round"})),React.createElement("ul",{className:"sub-nav"},e.subNav.map(t=>React.createElement("li",{key:t.id},React.createElement("a",{href:t.href},t.name),React.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},React.createElement("rect",{x:"0.5",y:"0.5",width:"23",height:"23",rx:"11.5",stroke:"white",strokeOpacity:"0.1"}),React.createElement("g",{opacity:"0.2"},React.createElement("path",{d:"M7.19971 12H16.7997M16.7997 12L13.1997 8.40001M16.7997 12L13.1997 15.6",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}))))))))))),React.createElement("div",{ref:null,className:"mobile-nav"},React.createElement("div",{className:"grid"},React.createElement("img",{src:g,alt:""})),React.createElement("ul",{className:"nav-list"},i.map(e=>React.createElement("li",{key:e.id,className:e.subNav&&"sub-nav-wrapper"},React.createElement("a",{onClick:t=>e.subNav&&t.currentTarget.parentElement.classList.toggle("active"),href:e.href},e.name),e.subNav&&React.createElement(React.Fragment,null,React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},React.createElement("rect",{width:"16",height:"16",rx:"8",fill:"white",fillOpacity:"0.1"}),React.createElement("path",{d:"M5.5 7L8 9.5L10.5 7",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})),React.createElement("ul",{className:"sub-nav"},e.subNav.map(t=>React.createElement("li",{key:t.id},React.createElement("a",{href:t.href},t.name)))))))),React.createElement("div",{className:"footer"},React.createElement("span",null,"Follow us"),React.createElement("ul",{className:"social-icons"},React.createElement("li",null,React.createElement("img",{src:o,alt:"LinkedIn"})),React.createElement("li",null,React.createElement("img",{src:A,alt:"Instagram"})),React.createElement("li",null,React.createElement("img",{src:C,alt:"Youtube"})),React.createElement("li",null,React.createElement("img",{src:E,alt:"Tiktok"}))))),r.children)}const m={$schema:"https://schemas.wp.org/trunk/block.json",apiVersion:3,name:"entrepreneurs/header",version:"0.1.0",title:"Header",category:"text",keywords:[],description:"",supports:{html:!0},attributes:{},example:{},textdomain:"entrepreneurs",editorScript:"file:./index.js",editorStyle:"file:./editor-style.css",style:"file:./style.css"};B.registerBlockType("entrepreneurs/header",{edit:h,save:p,attributes:{},...m})})(wp.blocks,wp.blockEditor,wp.element);
