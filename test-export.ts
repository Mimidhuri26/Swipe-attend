import { Filesystem, Directory } from '@capacitor/filesystem';

export const trySave = async () => {
    try {
        await Filesystem.mkdir({
            path: 'Download/SwipeAttend',
            directory: Directory.ExternalStorage,
            recursive: true
        });
        console.log("Success");
    } catch(e) {
        console.error(e);
    }
}
