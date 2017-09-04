import React from "react";
import { createDevTools } from "redux-devtools";
import SliderMonitor from "redux-slider-monitor";
import DockMonitor from "redux-devtools-dock-monitor";

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-m"
    changePositionKey="ctrl-q"
    defaultIsVisible={true}
    defaultPosition="bottom"
    defaultSize={0.15}
  >
    <SliderMonitor />
  </DockMonitor>
);

export default DevTools;
