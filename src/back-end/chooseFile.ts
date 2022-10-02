import { BrowserWindow, dialog, IpcMain, IpcMainEvent } from 'electron';
import { sendFailure, sendSuccess } from './rendererFeedback';
import { BackendTaskFunctionInput } from './types';

export type ChooseFileInputPayload = {
  title?: string;
  defaultPath?: string;
  filters?: { name: string; extensions: string[] }[];
  fileOrDirectory: 'openFile' | 'openDirectory';
  withMultiSelection?: boolean;
  withHiddenFiles?: boolean;
};

const chooseFile = async (event: IpcMainEvent, { channels, payload }: BackendTaskFunctionInput<ChooseFileInputPayload>) => {
  try {
    const result = await dialog.showOpenDialog(BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0], {
      title: payload.title,
      defaultPath: payload.defaultPath,
      filters: payload.filters,
      properties: [
        payload.fileOrDirectory,
        ...(payload.withMultiSelection ? ['multiSelections' as const] : []),
        ...(payload.withHiddenFiles ? ['showHiddenFiles' as const] : []),
      ],
    });

    if (result.canceled) return sendFailure(event, channels, 'userCancelled');
    sendSuccess(event, channels, { paths: result.filePaths });
  } catch (error) {
    sendFailure(event, channels, error instanceof Error ? error.message : JSON.stringify(error));
  }
};

export const registerChooseFile = (ipcMain: IpcMain) => {
  ipcMain.on('chooseFile', chooseFile);
};
