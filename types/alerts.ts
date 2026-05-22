export type AlertType = 'success' | 'error' | 'warning' | 'info';
export type AlertDuration = 'short' | 'medium' | 'long' | 'persistent';

export interface Alert {
  id: string;
  type: AlertType;
  title: string;
  message: string;
  duration: AlertDuration;
  timestamp: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface AlertContextType {
  alerts: Alert[];
  addAlert: (alert: Omit<Alert, 'id' | 'timestamp'>) => string;
  removeAlert: (id: string) => void;
  clearAlerts: () => void;
}
