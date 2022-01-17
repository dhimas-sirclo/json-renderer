import { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import {
  ApplicationShortcut,
  InstalledApplication,
  useExecuteActionMutation,
  useGetAppShortcutsLazyQuery,
  useGetInstalledAppsLazyQuery,
} from "../../../graphql";
import { OPEN_APP_DIALOG, useAppDialogCtx } from "../dialogs";

const defaultMenuItems = [
  <MenuItem key="not-found" disabled>
    Not Found
  </MenuItem>,
];

export default function AppMenu() {
  const { dispatch } = useAppDialogCtx();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [menuItems, setMenuItems] = useState<JSX.Element[]>(defaultMenuItems);

  const [selectedApp, setSelectedApp] = useState<
    InstalledApplication | null | undefined
  >();
  // TODO: remove it in real implementation. For POC only.
  const [installedApps, setInstalledApps] = useState<InstalledApplication[]>(
    []
  );
  const [appShortcuts, setAppShortcuts] = useState<ApplicationShortcut[]>([]);

  const [getInstalledApps, { data: getInstalledAppsData, refetch }] =
    useGetInstalledAppsLazyQuery({
      variables: {
        filter: {
          brandIds: ["chat"],
          channels: ["channel"],
          roomIds: ["room"],
          tenantIds: ["chat"],
        },
      },
    });

  useEffect(() => {
    const installedAppsTemp = (
      getInstalledAppsData?.installedApplications ?? []
    ).reduce((result, app) => {
      if (!app) return result;
      return result.concat({
        id: app.id,
        title: app.title,
        description: app.description,
      });
    }, [] as InstalledApplication[]);
    setInstalledApps(installedAppsTemp);
    setMenuItems(
      installedAppsTemp.map((app) => (
        <MenuItem
          key={app.id}
          onClick={() => {
            setMenuItems([
              <MenuItem
                key={app.id}
                onClick={() => {
                  setSelectedApp(null);
                }}
              >
                {`< ${app.title}`}
              </MenuItem>,
            ]);
            setSelectedApp(app);
          }}
        >
          {app.title}
        </MenuItem>
      ))
    );
  }, [getInstalledAppsData]);

  const [getAppShortcuts, { data: getAppShortcutsData }] =
    useGetAppShortcutsLazyQuery();

  const [executeAction] = useExecuteActionMutation({
    onCompleted: (data) => {
      console.log(data);
      dispatch({
        type: OPEN_APP_DIALOG,
        payload: {
          data: data.executeAction ?? undefined,
        },
      });
    },
  });

  useEffect(() => {
    const appShortcutsTemp = (
      getAppShortcutsData?.applicationShortcuts ?? []
    ).reduce((result, shortcut) => {
      if (!shortcut) return result;
      return result.concat({
        id: shortcut.id,
        actionId: shortcut.actionId,
        description: shortcut.description,
        title: shortcut.title,
      });
    }, [] as ApplicationShortcut[]);
    setAppShortcuts(appShortcutsTemp);
    setMenuItems((prev) => {
      return prev.concat(
        appShortcutsTemp.map((appShortcut) => {
          return (
            <MenuItem
              key={appShortcut?.id}
              onClick={() => {
                executeAction({
                  variables: {
                    input: {
                      action: appShortcut.actionId,
                      appId: selectedApp?.id ?? "",
                      brandId: "chat",
                      channel: "channel",
                      roomId: "room",
                      tenantId: "chat",
                    },
                  },
                });
              }}
            >
              {appShortcut?.title}
            </MenuItem>
          );
        })
      );
    });
  }, [getAppShortcutsData, dispatch, executeAction, selectedApp]);

  useEffect(() => {
    if (!selectedApp) {
      if (installedApps.length > 0) {
        setMenuItems(
          installedApps.map((app) => (
            <MenuItem
              key={app.id}
              onClick={() => {
                setMenuItems([
                  <MenuItem
                    key={app.id}
                    onClick={() => {
                      setSelectedApp(null);
                    }}
                  >
                    {`< ${app.title}`}
                  </MenuItem>,
                ]);
                setSelectedApp(app);
              }}
            >
              {app.title}
            </MenuItem>
          ))
        );
      }
      return;
    }
    // TODO: remove it on real implementation. For POC only.
    if (appShortcuts.length > 0) {
      setMenuItems(
        [
          <MenuItem
            key={selectedApp.id}
            onClick={() => {
              setSelectedApp(null);
            }}
          >
            {`< ${selectedApp.title}`}
          </MenuItem>,
        ].concat(
          appShortcuts.map((appShortcut) => {
            return (
              <MenuItem
                key={appShortcut?.id}
                onClick={() => {
                  executeAction({
                    variables: {
                      input: {
                        action: appShortcut.actionId,
                        appId: selectedApp?.id ?? "",
                        brandId: "chat",
                        channel: "channel",
                        roomId: "room",
                        tenantId: "chat",
                      },
                    },
                  });
                }}
              >
                {appShortcut?.title}
              </MenuItem>
            );
          })
        )
      );
      return;
    }
    getAppShortcuts({
      variables: {
        filter: {
          appId: selectedApp.id,
          brandIds: ["chat"],
          channels: ["channel"],
          roomIds: ["room"],
          tenantIds: ["chat"],
        },
      },
    });
  }, [
    selectedApp,
    getInstalledApps,
    getAppShortcuts,
    installedApps,
    appShortcuts,
    dispatch,
    executeAction,
  ]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    getInstalledApps();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="app-button"
        aria-controls={open ? "app-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="app-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "app-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {menuItems}
      </Menu>
    </div>
  );
}
