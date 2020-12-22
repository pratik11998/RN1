import Fingerprint from 'react-native-fingerprint-android';
import { ToastAndroid as Toast } from 'react-native';
 
(async() => {
    const hardware = await Fingerprint.isHardwareDetected();
    const permission = await Fingerprint.hasPermission();
    const enrolled = await Fingerprint.hasEnrolledFingerprints();
 
    if (!hardware || !permission || !enrolled) {
        let message = !enrolled ? 'No fingerprints registered.' : !hardware ? 'This device doesn\'t support fingerprint scanning.' : 'App has no permission.'
        Toast.show(message, Toast.SHORT);
        return;
    }
 
    try {
        await Fingerprint.authenticate(warning => {
            Toast.show(`Try again: ${warning.message}`, Toast.SHORT);
        });
    } catch(error) {
        Toast.show(`Authentication aborted: ${error.message}`, Toast.SHORT);
    }
 
    Toast.show("Auth successful!", Toast.SHORT);
})();