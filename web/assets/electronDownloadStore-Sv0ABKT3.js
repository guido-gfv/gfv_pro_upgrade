import "./rolldown-runtime-DBfy44LZ.js";
import { At as ref, O as computed, c as defineStore } from "./vendor-vue-core-BZypYDY7.js";
import { f as DownloadStatus } from "./vendor-other-Bwg2XU9O.js";
import { n as isDesktop } from "./types-BqIM6TDt.js";
import { t as electronAPI } from "./envUtil-iYCo4Y6R.js";
//#region src/stores/electronDownloadStore.ts
/** Electron downloads store handler */
var useElectronDownloadStore = defineStore("downloads", () => {
	const downloads = ref([]);
	const DownloadManager = isDesktop ? electronAPI().DownloadManager : void 0;
	const findByUrl = (url) => downloads.value.find((download) => url === download.url);
	const initialize = async () => {
		if (!isDesktop || !DownloadManager) return;
		const allDownloads = await DownloadManager.getAllDownloads();
		for (const download of allDownloads) downloads.value.push(download);
		DownloadManager.onDownloadProgress((data) => {
			if (!findByUrl(data.url)) downloads.value.push(data);
			const download = findByUrl(data.url);
			if (download) {
				download.progress = data.progress;
				download.status = data.status;
				download.filename = data.filename;
				download.savePath = data.savePath;
			}
		});
	};
	initialize();
	const start = ({ url, savePath, filename }) => DownloadManager.startDownload(url, savePath, filename);
	const pause = (url) => DownloadManager.pauseDownload(url);
	const resume = (url) => DownloadManager.resumeDownload(url);
	const cancel = (url) => DownloadManager.cancelDownload(url);
	return {
		downloads,
		start,
		pause,
		resume,
		cancel,
		findByUrl,
		initialize,
		inProgressDownloads: computed(() => downloads.value.filter(({ status }) => status !== DownloadStatus.COMPLETED))
	};
});
//#endregion
export { useElectronDownloadStore as t };

//# sourceMappingURL=electronDownloadStore-Sv0ABKT3.js.map