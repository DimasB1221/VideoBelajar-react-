export interface Courses {
  id: number;
  img: string;
  name: string;
  category: string;
  description: string;
  profileImg: string;
  profileName: string;
  profileDesc: string;
  rate: string;
  price: string;
}

export type CreateCoursesDTO = Omit<Courses, "id">;
