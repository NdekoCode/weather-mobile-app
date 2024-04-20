export async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    title: "Info Meteo",
    body: "Hello, we hope the weather's fine",
    sound: "default",
    data: {
      infos: "We help you stay informed about your weather situation !",
    },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}
export function handleRegistrationError(errorMessage) {
  alert(errorMessage);
  throw new Error(errorMessage);
}
