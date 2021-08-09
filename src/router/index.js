import React from "react";
import { Redirect } from 'react-router-dom';
import loadable from '@loadable/component'

const HYDiscover = loadable(() => import("@/pages/discover"));
const HYRecommend = loadable(() => import("@/pages/discover/sub-pages/recommend"));
const HYTopList = loadable(() => import("@/pages/discover/sub-pages/toplist"));
const HYPlayList = loadable(() => import("@/pages/discover/sub-pages/playlist"));
const HYDjRadio = loadable(() => import("@/pages/discover/sub-pages/djradio"));
const HYArtist = loadable(() => import("@/pages/discover/sub-pages/artist"));
const HYAlbum = loadable(() => import("@/pages/discover/sub-pages/album"));
const HYMine = loadable(() => import("@/pages/mine"));
const HYFriend = loadable(() => import("@/pages/friend"));
const HYDownload = loadable(() => import("@/pages/download"));
const HYSongPanel = loadable(() => import("@/pages/music-player/songPanel"));

const routes = [
  {
    path: "/",
    exact:true,
    render: () => (
      <Redirect to="/discover" />
    )
  },{
    path: "/discover",
    component: HYDiscover,
    routes:[
      {
        path: "/discover",
        exact: true,
        render:() => (
          <Redirect to="/discover/recommend" />
        )
      },{
        path: "/discover/recommend",
        component: HYRecommend
      },{
        path: "/discover/toplist",
        component: HYTopList
      },{
        path: "/discover/playlist",
        component: HYPlayList
      },{
        path: "/discover/djradio",
        component: HYDjRadio
      },{
        path: "/discover/artist",
        component: HYArtist
      },{
        path: "/discover/album",
        component: HYAlbum
      },{
        path: "/discover/song",
        component: HYSongPanel
      }
    ]
  },{
    path: "/mine",
    component: HYMine
  },{
    path: "/friend",
    component: HYFriend
  },{
    path: "/download",
    component: HYDownload
  }
];

export default routes;