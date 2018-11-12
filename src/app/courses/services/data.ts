import { Course } from '../models/course.model';
import { ApplicationStatus } from '../models/application';

export const allCourses: Course[] = [
  {
    id: 1,
    title: 'Introduction to Reactive Programming with RxJS',
    description: `We have a client in the UK who is looking for an experienced RxJS instructor who can teach a course before Christmas
    2018. They request a delivery based on the two 2-day courses "Beginner RxJS"and "Advanced RxJS". Currently this is planned to
    run over the full 4 days, but it is up for discussion. Also, feel free to include your availability when applying as the dates
    are not yet fixed.`,
    applications: [
      { id: 1, instructor: 'John Moss', offeredRate: 100, status: ApplicationStatus.Pending },
      { id: 2, instructor: 'Mike Dean', offeredRate: 65, status: ApplicationStatus.Rejected },
      { id: 3, instructor: 'Amy Fearn', offeredRate: 300, status: ApplicationStatus.Pending },
      { id: 4, instructor: 'Micheal Oliver', offeredRate: 200, status: ApplicationStatus.Pending }
    ]
  },
  {
    id: 2,
    title: 'Neural Networks for Pattern Recognition',
    description: 'Location: Sofia BG',
    applications: [
      { id: 5, instructor: 'Sian Massey-Ellis', offeredRate: 120, status: ApplicationStatus.Pending },
    ]
  },
  {
    id: 3,
    title: 'MS Dynamics 365',
    description: `A course on Dynamics 365 requested for Ireland. There is no fixed time frame yet, so the date could depend on
    the instructor's availability. The course covers provisioning, managing and creating a portal; Liquid operatiors; Web forms.
    The full course outline is attached to this job and can be downloaded from the link below.`,
    applications: [
      { id: 6, instructor: 'Phil Dowd', offeredRate: 250, status: ApplicationStatus.Rejected },
      { id: 7, instructor: 'Mark Clattenburg', offeredRate: 165, status: ApplicationStatus.Accepted }
    ]
  },
  {
    id: 4,
    title: 'Understanding the Java Spring Framework',
    description: `This is a request for a 3-day course covering Java and Spring. Course is scheduled for Manchester in November
    14 - 16. Course outline is available on the link below (in the Instructor Hub)`,
    applications: [
      { id: 8, instructor: 'Amy Lawrence', offeredRate: 120, status: ApplicationStatus.Pending },
    ]
  },
  {
    id: 5,
    title: 'Google Cloud Courses',
    description: `Need a trainer for Google courses: - GO5975 Oct, 29-30 (Workshop) - GO5973 Nov, 12-14 - GO5973 Nov, 21-23 -
    GO5974 Nov, 26-27 - GO5974 Nov, 28-29 Location- Barcelona; training language - English`,
    applications: [
      { id: 9, instructor: 'Sian Massey-Ellis', offeredRate: 120, status: ApplicationStatus.Pending },
    ]
  },
  {
    id: 6,
    title: 'VMware Cloud Automation: Design and Deploy',
    description: 'I need a trainer to deliver VMware Cloud Automation: Design and Deploy [V7.1] - Live Online - 12 November',
    applications: [
      { id: 10, instructor: 'Phil Rudd', offeredRate: 120, status: ApplicationStatus.Pending },
    ]
  },
  {
    id: 7,
    title: 'Data Analysis Fundamentals using Excel ',
    description: 'We are looking for an instructor to teach the above course.',
    applications: []
  },
];
