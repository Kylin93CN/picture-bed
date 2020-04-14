import React, { ReactNode } from 'react';
import { Form, Input, Button, Select } from 'antd';
import styles from './ConfigPage.scss';

const { Option } = Select;

export default function ConfigPage() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

  const selectBefore = (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );

  const handleConfig = () => {

  }

  return (
    <div className={styles.formContainer}>
      <header>又拍云设置</header>
      <Form
        name="upyun-config"
        onFinish={onFinish}
        {...formItemLayout}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Bucket"
          name="bucket"
          rules={[
            {
              required: true,
              message: 'bucket不能为空！',
            },
          ]}
        >
          <Input className={styles.input} placeholder= "请输入bucket，例如：imgage-upyun"/>
        </Form.Item>
        <Form.Item
          label="操作员"
          name="operator"
          rules={[
            {
              required: true,
              message: 'operator不能为空！',
            },
          ]}
        >
          <Input className={styles.input} placeholder= "请输入操作员，例如：lvxiang"/>
        </Form.Item>
        <Form.Item
          label="操作员密码"
          name="password"
          rules={[
            {
              required: true,
              message: '操作员密码不能为空！',
            },
          ]}
        >
          <Input.Password className={styles.input} placeholder= "请输入操作员密码" />
        </Form.Item>
        <Form.Item
          label="加速域名"
          name="fastDomain"
          rules={[
            {
              required: true,
              message: '加速域名不能为空！',
            },
          ]}
        >
          <Input addonBefore={selectBefore} placeholder= "请输入加速域名" />
        </Form.Item>
        <Form.Item
          label='存储路径'
          name="path"
        >
          <Input className={styles.input} placeholder= "例如：img/aa/bb"/>
        </Form.Item>
      </Form>
      <Button type="primary" className={styles.btn} onClick={handleConfig}>确定</Button>
    </div>

  )
}
