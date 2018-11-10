export enum ApplicationStatus {
  Pending = 'Pending',
  Accepted = 'Accepted',
  Rejected = 'Rejected'
}

export interface Application {
  instructor: string,
  offeredRate: number,
  status: ApplicationStatus;
}
