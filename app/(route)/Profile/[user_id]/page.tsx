import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Settings from "@/components/Profile/Settings";
import ProfileInfo from "@/components/Profile/ProfileInfo";
import Activity from "@/components/Profile/Activity";
import Assets from "@/components/Profile/Assets";

const tabs = [
  { name: "پروفایل من", path: "profile-info" },
  { name: "تنظیمات", path: "settings" },
  { name: "تاریخچه معاملات", path: "activity" },
  { name: "دارایی ها", path: "assets" },
];

interface UserProfileProps {
  params: { user_id: string };
  searchParams: { activetab?: string };
}

const UserProfile = ({ params, searchParams }: UserProfileProps) => {
  const { user_id } = params;
  const activetab = searchParams.activetab || "profile-info";

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div dir="rtl"  className="flex flex-col md:flex-row justify-center mt-16 mb-8 md:mt-24">
        <div className="flex flex-col w-full md:w-1/4 p-4 space-y-4">
          {tabs.map((tab) => (
            <Link key={tab.path} href={`/Profile/${user_id}?activetab=${tab.path}`} prefetch={false}>
              <div className={`block p-3 rounded-lg text-center transition-colors ${activetab === tab.path ? "bg-orange-500 text-white" : "bg-white text-black hover:bg-gray-200"}`}>
                {tab.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full md:w-3/4 p-6 bg-white rounded-lg shadow-md mt-4 md:mt-0 md:ml-6">
          <div className="p-4">
            {activetab === "settings" && <Settings />}
            {activetab === "profile-info" && <ProfileInfo />}
            {activetab === "activity" && <Activity />}
            {activetab === "assets" && <Assets />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { activetab?: string };
}) {
  const activetab = searchParams.activetab || "profile-info";
  const tabName = tabs.find((tab) => tab.path === activetab)?.name || "Profile Info";

  return {
    title: `User Profile - ${tabName}`,
  };
}

export async function generateStaticParams() {
  return [{ user_id: "default" }];
}

export default UserProfile;
