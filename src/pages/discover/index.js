import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { DiscoverWrapper } from "./style";

import { discoverMenus } from "@/common/local-data";

export default memo(function MYDiscover(props) {
  return (
    <DiscoverWrapper>
      <div className="top-wrapper">
        <div className="top-menu">
          {discoverMenus.map(item => (
            <NavLink to={item.link} key={item.title} className="menu-item">
              <span>{item.title}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  );
});
