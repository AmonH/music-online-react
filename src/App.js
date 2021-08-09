import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import routes from "./router";
import store from "./store";

import MYAppHeader from "@/components/app-header";
import MYAppFooter from "@/components/app-footer";
import HYPlaybar from "@/pages/music-player/playbar";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        {/* header部分 */}
        <MYAppHeader />
        {/* 中间内容部分 */}
        {renderRoutes(routes)}
        {/* footer部分 */}
        <MYAppFooter />
        {/* 底部固定音乐播放条 */}
        <HYPlaybar />
      </HashRouter>
    </Provider>
  );
});
