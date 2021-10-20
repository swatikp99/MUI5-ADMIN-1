// * Pages
import A1 from "../pages/A/A1";
import A2 from "../pages/A/A2";
import A3 from "../pages/A/A3";
import A4 from "../pages/A/A4";

import B1 from "../pages/B/B1";
import B2 from "../pages/B/B2";
import B3 from "../pages/B/B3";
import B4 from "../pages/B/B4";

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
  // {
  //   name: "C",
  //   sub_list: [
  //     { name: "C 1" },
  //     { name: "C 2" },
  //     { name: "C 3" },
  //     { name: "C 4" },
  //     { name: "C 5" },
  //     { name: "C 6" },
  //     { name: "C 7" },
  //     { name: "C 8" },
  //     { name: "C 9" },
  //   ],
  // },
  // {
  //   name: "D",
  //   sub_list: [
  //     { name: "D 1" },
  //     { name: "D 2" },
  //     { name: "D 3" },
  //     { name: "D 4" },
  //     { name: "D 5" },
  //     { name: "D 6" },
  //     { name: "D 7" },
  //     { name: "D 8" },
  //     { name: "D 9" },
  //   ],
  // },
  // {
  //   name: "E",
  //   sub_list: [
  //     { name: "E 1" },
  //     { name: "E 2" },
  //     { name: "E 3" },
  //     { name: "E 4" },
  //     { name: "E 5" },
  //     { name: "E 6" },
  //   ],
  // },
  // {
  //   name: "F",
  //   sub_list: [
  //     { name: "F 1" },
  //     { name: "F 2" },
  //     { name: "F 3" },
  //     { name: "F 4" },
  //     { name: "F 5" },
  //     { name: "F 6" },
  //     { name: "F 7" },
  //     { name: "F 8" },
  //     { name: "F 9" },
  //   ],
  // },
  // {
  //   name: "G",
  //   sub_list: [
  //     { name: "G 1" },
  //     { name: "G 2" },
  //     { name: "G 3" },
  //     { name: "G 4" },
  //     { name: "G 5" },
  //     { name: "G 6" },
  //     { name: "G 7" },
  //     { name: "G 8" },
  //     { name: "G 9" },
  //   ],
  // },
  // {
  //   name: "H",
  //   sub_list: [
  //     { name: "H 1" },
  //     { name: "H 2" },
  //     { name: "H 3" },
  //     { name: "H 4" },
  //     { name: "H 5" },
  //     { name: "H 6" },
  //     { name: "H 7" },
  //     { name: "H 8" },
  //     { name: "H 9" },
  //   ],
  // },
  { path: "/", pathTo: "/", name: "", redirect: true },
];

export default SidebarRoutes;
