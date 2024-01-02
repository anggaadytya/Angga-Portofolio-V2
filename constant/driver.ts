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
];
