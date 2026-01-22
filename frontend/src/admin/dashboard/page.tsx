import { Sidebar } from "@/components/ui/sidebar";
import InfoCard from "./infoCard";
import { LayoutDashboard, Users, Package, ShoppingCart } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import logo from "../../../public/logo-videobelajar.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
function DashboardPage() {
  const navigate = useNavigate();
  const sidebarItems = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      title: "Products",
      href: "/admin/products",
      icon: <Package className="w-5 h-5" />,
    },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/homepage");
  };

  return (
    <div className="bg-[#FFFDF3] min-h-screen">
      {/* Sidebar */}
      <header className="bg-background relative border-b border-gray-200 py-2 md:py-0">
        <Sidebar items={sidebarItems} className="" />
        <img
          src={logo}
          alt=""
          className="absolute top-2 left-8 w-38 md:hidden"
        />
      </header>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 md:p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500 mt-1">
              Selamat datang kembali,{" "}
              <span className="text-blue-600 font-semibold">test1!</span>
            </p>
          </div>
          {/* Logout button could go here if needed, consistent with image */}
          <Button
            onClick={handleLogout}
            className="px-4 py-2 bg-white border border-red-200 text-red-500 rounded-lg hover:bg-red-50 font-medium transition-colors"
          >
            Logout
          </Button>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <InfoCard
            label="Total Users"
            value="18"
            icon={Users}
            variant="blue"
          />
          <InfoCard
            label="Total Orders"
            value="567"
            icon={ShoppingCart}
            variant="green"
          />
          <InfoCard
            label="Total Products"
            value="30"
            icon={Package}
            variant="purple"
          />
        </div>

        {/* Recent Activities Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">
              Recent Activities
            </h2>
            <a
              href="#"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Products
            </a>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Product Update",
                type: "Product",
                desc: 'Product "Testing hallo" added to catalog.',
              },
              {
                title: "Product Update",
                type: "Product",
                desc: 'Product "testing" added to catalog.',
              },
              {
                title: "Product Update",
                type: "Product",
                desc: 'Product "Corporate Implementation Producer" added to catalog.',
              },
              {
                title: "New User Registration",
                type: "User",
                desc: "User test1 has registered.",
              },
              {
                title: "New User Registration",
                type: "User",
                desc: "User test1 has registered.",
              },
            ].map((activity, index) => (
              <div key={index} className="flex gap-4">
                <div
                  className={`mt-1 p-2 rounded-full h-fit flex-shrink-0 ${
                    activity.type === "Product" ? "bg-indigo-50" : "bg-blue-50"
                  }`}
                >
                  {activity.type === "Product" ? (
                    <Package className="w-4 h-4 text-indigo-600" />
                  ) : (
                    <Users className="w-4 h-4 text-blue-600" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {activity.title}
                  </h4>
                  <p className="text-xs text-gray-400 mb-1">Recently</p>
                  <p className="text-sm text-gray-600">{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
