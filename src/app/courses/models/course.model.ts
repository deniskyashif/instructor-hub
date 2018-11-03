import { Application } from "./application";

export interface Course {
  id?: number;
  title: string;
  description: string;
  applications?: Application[]
}
