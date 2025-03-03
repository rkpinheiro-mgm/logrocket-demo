import { createLogRocketIdentify } from "@/monitoring/logrocket";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectUsername, setUsername } from "@/store/slices/authSlice";
import { useEffect } from "react";

export const useAuth = () => {
  const username = useAppSelector(selectUsername);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storagedUsername = localStorage.getItem("username") ?? undefined;
    if (storagedUsername) {
      dispatch(setUsername(storagedUsername));
    }
  }, [dispatch]);

  useEffect(() => {
    if (username) {
      createLogRocketIdentify(username, {
        email: `${username}@mailinator.com`,
        customProp: "customValue",
      });
    }
  }, [username]);

  return { username };
};
