import { lazy } from "react";
import resourceEntitiesRoutes from "./resourceEntitiesRoutes";
import resourceSettingsRoutes from "./resourceSettingsRoutes";

const resourceRoutes = [
  {
    path: "/:workspace/:project/:resource/entities",
    Component: lazy(() => import("../Resource/EntitiesTile")),
    moduleName: "",
    routeTrackType: "",
    exactPath: true,
    routes: [
      {
        path: "/:workspace/:project/:resource/entities/:entityId",
        moduleName: "",
        routeTrackType: "",
        exactPath: true,
        routes: resourceEntitiesRoutes,
      },
    ],
  },
  {
    path: "/:workspace/:project/:resource/roles",
    Component: lazy(() => import("../Resource/RolesTile")),
    moduleName: "",
    routeTrackType: "",
    exactPath: true,
    routes: [
      {
        path: "/:workspace/:project/:resource/roles/:roleId",
        moduleName: "",
        routeTrackType: "",
        exactPath: true,
        routes: [],
      },
    ],
  },
  {
    path: "/:workspace/:project/:resource/commits",
    Component: lazy(() => import("../VersionControl/Commits")),
    moduleName: "",
    routeTrackType: "",
    exactPath: true,
    routes: [
      {
        path: "/:workspace/:project/:resource/commits/:commitId",
        moduleName: "",
        routeTrackType: "",
        exactPath: true,
        routes: [],
      },
    ],
  },
  {
    path: "/:workspace/:project/:resource/github",
    Component: lazy(() =>
      import("../Resource/git/SyncWithGithubPage")
    ),
    moduleName: "",
    routeTrackType: "",
    exactPath: true,
    routes: [],
  },
  {
    path: "/:workspace/:project/:resource/code-view",
    Component: lazy(() =>
      import("../Resource/code-view/CodeViewPage")
    ),
    moduleName: "",
    routeTrackType: "",
    exactPath: true,
    routes: [],
  },
  {
    path: "/:workspace/:project/:resource/appSettings",
    Component: lazy(() =>
      import("../Resource/serviceSettings/ServiceSettingsPage")
    ),
    moduleName: "",
    routeTrackType: "",
    exactPath: true,
    routes: resourceSettingsRoutes,
  },
]

export default resourceRoutes;