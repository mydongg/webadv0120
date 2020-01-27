import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

// компоненты
import "./scripts/skills";
import "./scripts/works";
import "./scripts/reviews";

// ванила
import "./scripts/sidemenu";
import "./scripts/parallax";
import "./scripts/scrolldown";