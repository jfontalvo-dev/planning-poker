export interface GuestFormErrors {
  userName?: string;
}

export interface GuestProps {
  roomId: string;
  onJoin: (userName: string) => void;
  isLoading: boolean;
}


export interface GuestFormProps {
  userName: string;
  error: GuestFormErrors;
  isLoading: boolean;
  onUserNameChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export interface GuestInfoBoxProps {
  roomId: string;
}

export interface UseGuestFormProps {
  onJoin: (userName: string) => void;
}
