import { get_car_news_list } from "../services/carFamily";

export default {
  namespace: "products",
  state: {
    list: []
    // products: [],
    // user: {}
  },
  subscriptions: {
    setup({ history, dispatch }) {
      // 监听 history 变化，当进入 `/` 时触发 `load` action
      return history.listen(({ pathname }) => {
        if (pathname === "/") {
          dispatch({ type: "getList" });
        }
      });
    }
  },
  effects: {
    *getList({ payload }, { put, call, select }) {
      // const { page } = payload;
      const ids = yield call(get_car_news_list);
      if (ids.success === true) {
        yield put({
          type: "listData",
          payload: ids.data
          // data: ids.data
        });
      }
      // console.log(ids, "====>ids");
      // debugger;
      // const itemsPerPage = yield select(state => state.item.itemsPerPage);
      // const items = yield call(
      //   fetchItems,
      //   ids.slice(itemsPerPage * (page - 1), itemsPerPage * page)
      // );
      // yield put({ type: "saveList", payload: { ids, type } });
      // yield put({ type: "saveItems", payload: items });
    }
  },

  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    toggleStar(state, { payload: id }) {
      return state.map(item => {
        if (item.id === id) {
          item.isStar = !item.isStar;
          // item.label=== '关注'? '已关注':'关注'
        }
        return item;
      });
      // return state.filter(item => item.id !== id);
      // return state.
    },
    listData(state, { payload: data }) {
      return {...state, list: [...data.list]};
    }
  }
};
