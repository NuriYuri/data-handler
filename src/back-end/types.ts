export type ChannelNames = {
  successChannelName: string;
  failureChannelName: string;
  progressChannelName: string;
};

/**
 * Type to use when defining a mainProcess service task
 * @example
 * const doStuff = async (event: IpcMainEvent, { channels, payload }: BackendTaskFunctionInput<{ path: string }>) => {
 *   event.sender.send(channels.successChannelName, payload.path);
 * }
 */
export type BackendTaskFunctionInput<TaskInputPayloadType extends Record<string, unknown>> = {
  channels: ChannelNames;
  payload: TaskInputPayloadType;
};

export type GenericBackendProgress = { step: number; total: number; stepText: string };
export type GenericBackendError = { errorMessage: string };

/**
 * Type to use when defining a rendererProcess api method
 * @example
 * declare global {
 *   interface Window {
 *     yourAPI: { yourFunction: BackendTask<{ input: number }, { output: number }, GenericBackendError, GenericBackendProgress> }
 *   }
 * }
 * // in another file
 * useEffect(() => {
 *   return window.yourAPI.yourFunction({ input: 5 }, ({ output }) => setState(output), ({ errorMessage }) => setError(errorMessage));
 * }, [])
 */
export type BackendTask<
  TaskInputPayloadType extends {},
  TaskOutputPayloadType extends {},
  ErrorType extends GenericBackendError,
  ProgressPayloadType extends GenericBackendProgress
> = (
  taskPayload: TaskInputPayloadType,
  onSuccess: (payload: TaskOutputPayloadType) => void,
  onFailure: (error: ErrorType) => void,
  onProgress?: (payload: ProgressPayloadType) => void
) => () => void;

/**
 * Type to use when defining a rendererProcess api method without having to defined error type
 * @example
 * declare global {
 *   interface Window {
 *     yourAPI: { yourFunction: BackendTaskWithGenericError<{ input: number }, { output: number }, GenericBackendProgress> }
 *   }
 * }
 * // in another file
 * useEffect(() => {
 *   return window.yourAPI.yourFunction({ input: 5 }, ({ output }) => setState(output), ({ errorMessage }) => setError(errorMessage));
 * }, [])
 */
export type BackendTaskWithGenericError<
  TaskInputPayloadType extends {},
  TaskOutputPayloadType extends {},
  ProgressPayloadType extends GenericBackendProgress
> = BackendTask<TaskInputPayloadType, TaskOutputPayloadType, { errorMessage: string }, ProgressPayloadType>;

/**
 * Type to use when defining a rendererProcess api method with no progress
 * @example
 * declare global {
 *   interface Window {
 *     yourAPI: { yourFunction: BackendTaskWithNoProgress<{ input: number }, { output: number }, GenericBackendError> }
 *   }
 * }
 * // in another file
 * useEffect(() => {
 *   return window.yourAPI.yourFunction({ input: 5 }, ({ output }) => setState(output), ({ errorMessage }) => setError(errorMessage));
 * }, [])
 */
export type BackendTaskWithNoProgress<
  TaskInputPayloadType extends {},
  TaskOutputPayloadType extends {},
  ErrorType extends { errorMessage: string }
> = (taskPayload: TaskInputPayloadType, onSuccess: (payload: TaskOutputPayloadType) => void, onFailure: (error: ErrorType) => void) => void;

/**
 * Type to use when defining a rendererProcess api method with generic error & no progress
 * @example
 * declare global {
 *   interface Window {
 *     yourAPI: { yourFunction: BackendTaskWithGenericErrorAndNoProgress<{ input: number }, { output: number }> }
 *   }
 * }
 * // in another file
 * useEffect(() => {
 *   return window.yourAPI.yourFunction({ input: 5 }, ({ output }) => setState(output), ({ errorMessage }) => setError(errorMessage));
 * }, [])
 */
export type BackendTaskWithGenericErrorAndNoProgress<TaskInputPayloadType extends {}, TaskOutputPayloadType extends {}> = BackendTaskWithNoProgress<
  TaskInputPayloadType,
  TaskOutputPayloadType,
  { errorMessage: string }
>;
