export enum ApplicationStatus {
  Pending = 'Pending',
  Accepted = 'Accepted',
  Rejected = 'Rejected'
}

export interface Application {
  id: number;
  instructor: string;
  offeredRate: number;
  status: ApplicationStatus;
}
