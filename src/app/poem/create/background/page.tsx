"use client";

import AppearanceProvider, {
  AppearanceContext,
} from "./_providers/appearance-provider";
import Sidebar from "./_components/sidebar";
import { useContext } from "react";
import BaseBackground from "../../_components/background";

const BackgroundPage = () => {
  return (
    <main>
      <AppearanceProvider>
        <Background />
        <Sidebar />
      </AppearanceProvider>
    </main>
  );
};
export default BackgroundPage;

const Background = () => {
  const { appearance } = useContext(AppearanceContext);
  return <BaseBackground appearance={appearance.background} />;
};
