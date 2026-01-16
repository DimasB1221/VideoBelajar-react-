import api from "../lib/api";
import { type Courses, type CreateCoursesDTO } from "@/types/courses";
import { type AxiosResponse } from "axios";

const ENDPOINT = "/courses";

export const productService = {
  // Ambil semua data dengan dukungan filter
  getAll: async (category?: string, page: number = 1, limit?: number) => {
    const params: any = { category, select: "*", order: "id.asc" };

    // Convert page/limit to PostgREST offset/limit
    if (limit) {
      params.limit = limit;
      params.offset = (page - 1) * limit;
    }

    const response = await api.get<Courses[]>(ENDPOINT, { params });
    console.log(response.data);
    return response.data;
  },

  // Create data baru
  create: async (data: Partial<CreateCoursesDTO>) => {
    const response = await api.post(ENDPOINT, data);
    return response.data;
  },

  // Update data (PUT mengganti seluruh objek, PATCH hanya sebagian)
  update: async (id: number, data: Partial<CreateCoursesDTO>) => {
    const response: AxiosResponse<Courses> = await api.patch(
      `${ENDPOINT}?id=eq.${id}`,
      data
    );

    return response.status;
  },

  // Delete data
  delete: async (id: number) => {
    await api.delete(`${ENDPOINT}?id=eq.${id}`);
  },
};
