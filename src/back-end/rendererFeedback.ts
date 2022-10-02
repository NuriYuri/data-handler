import { IpcMainEvent } from 'electron/main';
import { ChannelNames, GenericBackendProgress } from './types';

export const sendFailure = (event: IpcMainEvent, channels: ChannelNames, errorMessage: string) => {
  event.sender.send(channels.failureChannelName, { errorMessage });
};

export const sendSuccess = <OutputPayload extends Record<string, unknown>>(event: IpcMainEvent, channels: ChannelNames, payload: OutputPayload) => {
  event.sender.send(channels.successChannelName, payload);
};

export const sendProgress = (event: IpcMainEvent, channels: ChannelNames, progress: GenericBackendProgress) => {
  event.sender.send(channels.progressChannelName, progress);
};
