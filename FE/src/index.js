import dva from "dva";
import "./index.css";

// 1. Initialize
// const app = dva();
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

    // products: [
    //   {
    //     name: "antd",
    //     id: 2,
    //     isStar: false
    //   }
    // ]
  }
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require("./models/user").default);
app.model(require("./models/products").default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
