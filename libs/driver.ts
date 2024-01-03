import { DriveStep, driver } from "driver.js";
import "driver.js/dist/driver.css";

interface CreateDriversProps {
  steps: DriveStep[];
}

export default function createDrivers({ steps }: CreateDriversProps) {
  let isProductTour = false;
  const driverObj = driver({
    showButtons: ["next", "previous"],
    showProgress: true,
    animate: true,
    steps,
  });

  if (typeof window !== "undefined") {
    isProductTour = !(window.localStorage.getItem("tour-guide") !== null);
  }

  function runDriver() {
    driverObj?.drive();
    window.localStorage.setItem("tour-guide", "true");
  }

  return { runDriver, isProductTour };
}
