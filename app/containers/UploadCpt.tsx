import React from 'react';
import { Upload, message } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
const { Dragger } = Upload;
import styles from './UploadCpt.scss';

export default function UploadCpt() {
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>图片上传 - 又拍云图床</header>
      <div className={styles.dragger}>
        <Dragger {...props}>
          <p><CloudUploadOutlined /></p>
          <p className={styles.dragText}>将文件拖到此处，或<a>点击上传</a></p>
        </Dragger>
      </div>
    </div>

  )
}
