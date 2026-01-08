import api from "../lib/api";
import { type Courses, type CreateCoursesDTO } from "@/types/courses";

export const productService = {
  // Ambil semua data dengan dukungan filter
  getAll: async (category?: string, page?: number, limit?: number) => {
    const response = await api.get<Courses[]>("/courses", {
      params: { category, _page: page, _limit: limit }, // akan menjadi /posts?author=Budi
    });
    return response.data;
  },

  // Create data baru
  create: async (data: CreateCoursesDTO) => {
    const response = await api.post<Courses>("/courses", data);
    return response.data;
  },

  // Update data (PUT mengganti seluruh objek, PATCH hanya sebagian)
  update: async (id: string, data: Partial<CreateCoursesDTO>) => {
    const response = await api.patch<Courses>(`/courses/${id}`, data);
    return response.data;
  },

  // Delete data
  delete: async (id: string) => {
    await api.delete(`/courses/${id}`);
  },
};
