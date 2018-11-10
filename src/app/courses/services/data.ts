import { Course } from "../models/course.model";
import { ApplicationStatus } from "../models/application";

export let allCourses: Course[] = [
  {
    id: 1,
    title: 'Mongo DB for Administrators',
    description: `We have a client in the UK who is looking for an experienced Mongo DB instructor who can teach a course before Christmas 2018. They request a delivery based on the two 2-day courses "Mongo DB for Administrators"and "Mongo DB for Analysts". Currently this is planned to run over the full 4 days, but it is up for discussion. Also, feel free to include your availability when applying as the dates are not yet fixed.`,
    applications: [
      { instructor: 'John Moss', offeredRate: 100, status: ApplicationStatus.Pending },
      { instructor: 'Mike Dean', offeredRate: 65, status: ApplicationStatus.Rejected },
      { instructor: 'Amy Fearn', offeredRate: 300, status: ApplicationStatus.Pending },
      { instructor: 'Micheal Oliver', offeredRate: 200, status: ApplicationStatus.Pending }
    ]
  },
  {
    id: 2,
    title: 'Neural Networks for Pattern Recognition',
    description: 'Location: Sofia BG',
    applications: [
      { instructor: 'Sian Massey-Ellis', offeredRate: 120, status: ApplicationStatus.Pending },
    ]
  },
  {
    id: 3,
    title: 'MS Dynamics 365',
    description: `A course on Dynamics 365 requested for Ireland. There is no fixed time frame yet, so the date could depend on the instructor's availability. The course covers provisioning, managing and creating a portal; Liquid operatiors; Web forms. The full course outline is attached to this job and can be downloaded from the link below.`,
    applications: [
      { instructor: 'Phil Dowd', offeredRate: 250, status: ApplicationStatus.Rejected },
      { instructor: 'Mark Clattenburg', offeredRate: 165, status: ApplicationStatus.Accepted }
    ]
  }
];
