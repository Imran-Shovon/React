import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    //Check if Online Status
    // const [onlineStatus, setOnLineStatus] = useState();

    // useEffect(() => {
    //     window.addEventListener("offline", setOnLineStatus(false));
    //     window.addEventListener("online", setOnLineStatus(true));
    // })


    // //Boolean value to check if online
    // return onlineStatus;
  const [onlineStatus, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return onlineStatus;
}

export default useOnlineStatus;