import dva from "dva";
import "./index.css";

const app = dva({
  initialState: {
    user: { name: "孟令禹" },
    products: {
      list: [
        "Racing car sprays burning fuel into crowd.",
        "Japanese princess to wed commoner.",
        "Australian walks 100km after outback crash.",
        "Man charged over missing wedding girl.",
        "Los Angeles battles huge wildfires."
      ]
    }
  }
});

// app.model(require("./models/common").default);
app.model(require("./models/user").default);
app.model(require("./models/products").default);


// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
