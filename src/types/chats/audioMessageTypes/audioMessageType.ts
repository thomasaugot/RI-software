import { MessageDataType } from '../chatTypes';

export type AudioLevelProps = {
  height: number;
}
export type ChatAudioRecorderProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement> |  null) => void,
  isRecording: boolean,
  handleRecording: (isRec: boolean) => void,
  handleAddAudioBlob: (audioBlob: Blob | null, audioLength: string | null) => void,
}
export type AudioPlayerProps = {
  audioBlobUrl: Blob,
  setPlayingAudioTime?:(time: number) => void
}
export type ChatMessagesTypeAudioMessageProps = {
  message: MessageDataType,
  needToDisplayMiniPopupWithoutFile: () => JSX.Element | null,
  needToDisplayForwardMessage: () => JSX.Element | null,
  needToDisplayEdditedMessage: () => JSX.Element | null,
  handleRightClick: (e: React.MouseEvent<HTMLDivElement>) => void
}
export type ChatMessagesTypeFileMessageProps = {
  message: MessageDataType,
  needToDisplayMiniPopup: () => JSX.Element | null,
  needToDisplayForwardMessage: () => JSX.Element | null,
  needToDisplayEdditedMessage: () => JSX.Element | null,
  handleRightClick: (e: React.MouseEvent<HTMLDivElement>) => void
}
export type ChatTimerProps = {
  timer: number,
  isRec: boolean,
  blob: Blob
}
export type ChatInputMessageProps = {
  chatInputValue: string,
  setChatInputValue: (value: string) => void,
  handleRecording: (value: boolean) => void
}
export type ChatMessagesTypeTextMessageProps = {
  message: MessageDataType,
  needToDisplayMiniPopupWithoutFile: () => JSX.Element | null,
  needToDisplayForwardMessage: () => JSX.Element | null,
  needToDisplayEdditedMessage: () => JSX.Element | null,
  handleRightClick: (e: React.MouseEvent<HTMLDivElement>) => void
}
