import { LogRocketSdk } from "@mgmresorts/client-log-rocket";
import { ICaptureOptions, ICaptureProperties, IUserTraits } from "./types";

// const LR_APP_ID = process.env.NEXT_PUBLIC_LOGROCKET_APP_ID;
const LR_APP_ID = "mgmri-non-prod/dbx-room-booking-non-prod";
const LR_APP_VERSION = "v1.0.0";

export const initializeLogrocket = () => {
  LogRocketSdk.init({
    appId: LR_APP_ID,
    options: {
      sanitizers: {
        sanitizers: {
          name: () => "**** ****",
        },
        networkInclusions: ["api"],
      },
      debug: true,
      overrides: {
        release: LR_APP_VERSION,
      },
    },
  });
  console.log("LogRocket initialized");
};

export const createLogRocketMiddleware = () => LogRocketSdk.reduxMiddleware();

export const createLogRocketIdentify = (uid: string, traits?: IUserTraits) =>
  LogRocketSdk.identify(uid, traits);

export const captureException = (error: Error, options: ICaptureOptions) =>
  LogRocketSdk.captureException(error, options);

export const captureEvent = (name: string, properties: ICaptureProperties) =>
  LogRocketSdk.captureEvent(name, properties);
