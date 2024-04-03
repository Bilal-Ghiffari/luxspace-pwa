// function untuk mengirimkan web notifikasi => (googleDeveloper)
function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}


export default async function Subscribe(){
    const keys = "BE4XHWNnA_pltwWJmQab3zrw131lnhyni_yY4alrsfamsIVtvfd9MYcrw_84CFFSPbi7SW759vpqxyeZBlGchgg";
    // handleErrors
    try {
        await global.registration.pushManager.subscribe({
            userVisibleOnly: true,
            // applicationServerKey untuk memodifikasi key
            applicationServerKey: urlB64ToUint8Array(keys)
        });
        console.log("Subscribe");
    } catch (error) {
        console.error("Cannot subscribe")
    }
}