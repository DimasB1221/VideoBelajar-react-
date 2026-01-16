import { useState } from "react";
import { Button } from "@/components/ui/button";
import { type Courses } from "@/types/courses";
import { Loader2 } from "lucide-react";

interface FormProductProps {
  initialData?: Courses;
  onClose?: () => void;
  onSubmit: (data: Courses) => void;
  isLoading?: boolean;
}

const FormProduct = ({
  initialData,
  onClose,
  onSubmit,
  isLoading = false,
}: FormProductProps) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    price: initialData?.price || "",
    category: initialData?.category || "",
    profileName: initialData?.profileName || "",
    profileImg: initialData?.profileImg || "",
    profileDesc: initialData?.profileDesc || "",
    rate: initialData?.rate || "",
    img: initialData?.img || "",
    description: initialData?.description || "",
  });
  const isEdit = !!initialData;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData as Courses);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      )}
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        {isEdit ? "Edit Produk" : "Tambah Produk Baru"}
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Judul Produk <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={initialData?.name}
              placeholder="Contoh: Belajar React JS"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Harga (IDR) <span className="text-red-500">*</span>
            </label>
            <input
              type="text" // changed from number to text to handle "Rp ..." format if needed or cleaner input
              name="price"
              defaultValue={initialData?.price}
              placeholder="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              defaultValue={initialData?.category}
              placeholder="Contoh: Software Engineer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Nama Mentor
            </label>
            <input
              type="text"
              name="profileName"
              defaultValue={initialData?.profileName}
              placeholder="Nama Mentor"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Rate Mentor
            </label>
            <input
              type="text"
              name="rate"
              defaultValue={initialData?.rate}
              placeholder="Contoh: Software Engineer"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              URL Foto
            </label>
            <input
              type="text"
              name="img"
              defaultValue={initialData?.img}
              placeholder="https://..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Deskripsi
          </label>
          <textarea
            rows={4}
            name="description"
            defaultValue={initialData?.description}
            placeholder="Deskripsi lengkap produk..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-end gap-2">
          {isEdit && onClose && (
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Batal
            </Button>
          )}
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isEdit ? "Menyimpan..." : "Menambahkan..."}
              </>
            ) : isEdit ? (
              "Simpan Perubahan"
            ) : (
              "Tambah Produk"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormProduct;
