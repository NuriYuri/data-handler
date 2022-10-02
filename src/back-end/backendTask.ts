import type { IpcRenderer } from 'electron/renderer';

export const defineBackendTask = <
  TaskInputPayloadType extends Record<string, unknown>,
  TaskOutputPayloadType extends Record<string, unknown>,
  ErrorType extends { errorMessage: string },
  ProgressPayloadType extends { step: number; total: number; stepText: string }
>(
  ipcRenderer: IpcRenderer,
  serviceName: string
) => {
  return (
    taskPayload: TaskInputPayloadType,
    onSuccess: (payload: TaskOutputPayloadType) => void,
    onFailure: (error: ErrorType) => void,
    onProgress?: (payload: ProgressPayloadType) => void
  ) => {
    const now = Date.now();
    const successChannelName = `${serviceName}/success-${now}`;
    const failureChannelName = `${serviceName}/failure-${now}`;
    const progressChannelName = `${serviceName}/progress-${now}`;
    const cleanup = () => {
      ipcRenderer.removeAllListeners(successChannelName);
      ipcRenderer.removeAllListeners(failureChannelName);
      ipcRenderer.removeAllListeners(progressChannelName);
    };
    // Register success event
    ipcRenderer.once(successChannelName, (_, payload) => {
      cleanup();
      onSuccess(payload);
    });
    // Register failure event
    ipcRenderer.once(failureChannelName, (_, error) => {
      cleanup();
      onFailure(error);
    });
    // Register progress event
    if (onProgress) ipcRenderer.once(progressChannelName, (_, payload) => onProgress(payload));
    // Call service
    ipcRenderer.send(serviceName, { channels: { successChannelName, failureChannelName, progressChannelName }, payload: taskPayload });

    return cleanup;
  };
};
