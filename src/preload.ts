// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';
import { defineBackendTask } from './back-end/backendTask';
import type { ChooseFileInputPayload } from './back-end/chooseFile';
import { BackendTaskWithGenericErrorAndNoProgress } from './back-end/types';

contextBridge.exposeInMainWorld('api', {
  static: true,
  chooseFile: defineBackendTask(ipcRenderer, 'chooseFile'),
});

declare global {
  interface Window {
    api: {
      static: boolean;
      chooseFile: BackendTaskWithGenericErrorAndNoProgress<ChooseFileInputPayload, { paths: string[] }>;
    };
  }
}
