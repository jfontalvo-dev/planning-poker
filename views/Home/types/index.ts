export interface FormErrors {
  userName?: string;
  roomId?: string;
}

export interface UseLandingFormProps {
  onCreateRoom: (userName: string) => void;
  onJoinRoom: (roomId: string, userName: string) => void;
  defaultUserName: string;
}

export interface HomeModeProps {
  userName: string;
  errors: FormErrors;
  isLoading: boolean;
  isUserStored?: boolean;
  onUserNameChange: (value: string) => void;
  onCreateRoom: (e: React.FormEvent) => void;
  onSwitchToJoin: () => void;
}

export interface JoinModeProps {
  userName: string;
  roomId: string;
  errors: FormErrors;
  isLoading: boolean;
  isUserStored?: boolean;
  onUserNameChange: (value: string) => void;
  onRoomIdChange: (value: string) => void;
  onJoinRoom: (e: React.FormEvent) => void;
  onBack: () => void;
}

export interface UserNameInputProps {
  value: string;
  error?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export interface RoomResponse {
  id: string;
  [key: string]: unknown;
}
