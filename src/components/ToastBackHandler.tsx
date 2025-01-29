import { BackHandler } from "react-native";
import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

const ToastBackHandler = () => {
  const [exitApp, setExitApp] = useState<boolean>(false);

  useEffect(() => {
    const backAction = () => {
      if (exitApp) {
        BackHandler.exitApp();
      } else {
        setExitApp(true);
        Toast.show({
          type: "info",
          text1: "Presiona 'atrás' nuevamente para salir",
          position: "bottom",
        });

        setTimeout(() => {
          setExitApp(false);
          Toast.hide();
        }, 2000);
        return true;
      }
    };

    const backHandlerListener = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => {
      backHandlerListener.remove();
    };
  }, [exitApp]);

  return <Toast />;
};

export default ToastBackHandler;
