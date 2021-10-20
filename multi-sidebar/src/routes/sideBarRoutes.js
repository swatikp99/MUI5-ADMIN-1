// * Pages
import A1 from "../pages/A/A1";
import A2 from "../pages/A/A2";
import A3 from "../pages/A/A3";
import A4 from "../pages/A/A4";

import B1 from "../pages/B/B1";
import B2 from "../pages/B/B2";
import B3 from "../pages/B/B3";
import B4 from "../pages/B/B4";

import C1 from "../pages/C/C1";
import C2 from "../pages/C/C2";
import C3 from "../pages/C/C3";
import C4 from "../pages/C/C4";

import Test from '../pages/Test'

var SidebarRoutes = [
  {
    path: "/a/a1",
    name: "A",
    component: A1,
    sub_list: [
      { path: "/a/a1", name: "A 1", component: A1 },
      { path: "/a/a2", name: "A 2", component: A2 },
      { path: "/a/a3", name: "A 3", component: A3 },
      { path: "/a/a4", name: "A 4", component: A4 },
    ],
  },
  {
    path: "/b/b1",
    name: "B",
    component: B1,
    sub_list: [
      { path: "/b/b1", name: "B 1", component: B1 },
      { path: "/b/b2", name: "B 2", component: B2 },
      { path: "/b/b3", name: "B 3", component: B3 },
      { path: "/b/b4", name: "B 4", component: B4 },
    ],
  },
  {
    path: "/c/c1",
    name: "C",
    component: C1,
    sub_list: [
      { path: "/c/c1", name: "C 1", component: C1 },
      { path: "/c/c2", name: "C 2", component: C2 },
      { path: "/c/c3", name: "C 3", component: C3 },
      { path: "/c/c4", name: "C 4", component: C4 },
    ],
  },
  {
    path: "/d/test",
    name: "D",
    component: Test,
    sub_list: [
      { path: "/d/test", name: "Test", component: Test }
    ],
  },
  // { path: "/", pathTo: "/", name: "", redirect: true },
];

export default SidebarRoutes;
