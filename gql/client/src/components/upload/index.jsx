import React, { useState } from 'react';
import { Upload, Button } from 'antd';

const UploadBasic = ({ value, onChange }) => {
  const [fileList, setFileList] = useState([{ fileUrl: value }] || []);
  // const isUrlPath = typeof file === 'string';

  const onRemove = () => {
    setFileList(undefined);
    onChange(undefined);
  };

  const beforeUpload = (file) => {
    setFileList([file]);
    onChange(file);
    return false;
  };

  return (
    <Upload fileList={fileList} onRemove={onRemove} beforeUpload={beforeUpload}>
      <Button>Select File</Button>
    </Upload>
  );
};

export default UploadBasic;
