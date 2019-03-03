import React from "react";
import { connect } from "dva";
import ProductList from "./Components/ProductList";
import Layout from "../../Layout/base";
import { Row, Col } from 'antd'

// base;

const HomePage = props => {
  const { dispatch, products, user } = props;
  console.log(products, "!!");
  function handleDelete(id) {
    dispatch({
      type: "products/delete",
      payload: id
    });
  }
  function handelStar(id) {
    dispatch({
      type: "products/toggleStar",
      payload: id
    });
  }

  function onToggleStar(id) {
    dispatch({
      type: "products/toggleStar",
      payload: id
    });
  }

  return (
    <Layout>
      <Row type="flex" justify="start">
        <Col span={16} offset={4}>
          <ProductList data={products.list} />
        </Col>
      </Row>
    </Layout>
  );
};

export default connect(({ products, user }) => ({
  products,
}))(HomePage);
