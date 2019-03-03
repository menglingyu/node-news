export default {
  namespace: "user",
  state: {
    user: {}
  },
  listRouterGetData({ dispatch, history }) {
    let page = null;
    function fetchList(type, _page = 1) {
      page = _page;
      dispatch({ type: "saveActiveType", payload: type });
      dispatch({ type: "fetchList", payload: { type, page } });
    }
    return history.listen(({ pathname }) => {
      if (pathname) {
      }
      // for (const type of ITEM_TYPES) {
      //   const match = pathToRegexp(`/${type}/:page?`).exec(pathname);
      //   if (match) {
      //     const page = match[1];

      //     // fetch
      //     fetchList(type, page);

      //     // watch
      //     if (activeType !== type) {
      //       activeType = type;
      //       if (unwatchList) unwatchList();
      //       unwatchList = doWatchList(type);
      //     }
      //   }
      // }
    });
  },
  reducers: {
    // delete(state, { payload: id }) {
    //   debugger;
    //   return state.filter(item => item.id !== id);
    // },
    // addStar(state, { payload: id }) {
    //   debugger;
    //   // return state.filter(item => item.id !== id);
    //   // return state.
    // }
  }
};
