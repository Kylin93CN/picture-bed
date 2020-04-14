import React from 'react';
import { Switch, Route, Link, } from 'react-router-dom';
import {
  CloudUploadOutlined,
  PictureOutlined,
  SettingOutlined,

} from '@ant-design/icons';
import App from './containers/App';
import UploadCpt from './containers/UploadCpt';
import ConfigPage from './components/ConfigPage';

export default function Routes() {
  return (
    <App>
      <div className="container">
        <div className="left-nav">
          <ul>
            <li className="nav">
              <CloudUploadOutlined />
              <Link to="/upload">上传区</Link>
            </li>
            <li className="nav">
              <PictureOutlined />
              <Link to="/album">相册</Link>
            </li>
            <li className="nav">
              <SettingOutlined />
              <Link to="/setup">图床设置</Link>
            </li>
          </ul>
        </div>
        <div className="right-content" >
          <Switch>
            <Route exact path="/" component={UploadCpt} />
            <Route exact path="/upload" component={UploadCpt} />
            <Route exact path="/album" render={() => <div>相册</div>} />
            <Route exact path="/setup" component={ConfigPage} />
          </Switch>
        </div>
      </div>
    </App>
  );
}
