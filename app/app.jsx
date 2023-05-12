const ReactDom = require("react-dom/client");
const React =require("react");

const Header = require("./components/header.jsx");
const Article = require("./components/article.jsx");
const Footer = require("./components/footer.jsx");

const headerText="Язык программирования С++";
const description = "компилируемый, статически типизированный язык программирования общего назначения";



ReactDom.createRoot(
    document.getElementById("app")
)
.render(
    <div>
        <Header text={headerText} />
        <Article content={description}/>
        <Footer />
    </div>
);