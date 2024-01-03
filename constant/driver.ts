import { DriveStep } from "driver.js";

export const tourGuideWEB: DriveStep[] = [
  {
    element: "#dark-mode-switcher",
    popover: {
      title: "Dark Mode Switcher",
      description:
        "Use this switch to toggle between dark and light mode for a comfortable viewing experience.",
      side: "right",
      align: "center",
    },
  },
  {
    element: "#command-button",
    popover: {
      title: "Command Button",
      description: "Click this button to open the command menu.",
      side: "bottom",
      align: "center",
    },
  },
  {
    element: "#download-resume",
    popover: {
      title: "Download Resume",
      description: "Click this button to download my resume.",
      side: "bottom",
      align: "center",
    },
  },
  {
    element: "#feature-show",
    popover: {
      title: "Features in",
      description: "select the features to see the features.",
      side: "left",
      align: "start",
    },
  },
];
