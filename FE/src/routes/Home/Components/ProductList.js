import React from "react";
import PropTypes from "prop-types";
import { Table, Icon, Button, List, Avatar } from "antd";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const ProductList = ({ onDelete, data, onToggleStar }) => {
  // debugger
  return (
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <a href={item.Url && item.Url.substring(2)}>{item.Title}</a>
        </List.Item>
      )}
    />
  );
};

export default ProductList;
