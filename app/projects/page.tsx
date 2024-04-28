import DeviceList from "@/components/DeviceList";
import Footer from "@/components/Footer";
import MobileList from "@/components/MobileList";
import CardGenerator from "@/components/CardGenerator";
import NavProjects from "@/components/NavProjects";

export default function Projects() {
  return (
    <div className="bg-black">
      <NavProjects />
      <div className="flex flex-col justify-center align-middle">
        <div className="hidden xl:block">
          <DeviceList />
        </div>
        <div className="xl:hidden block">
          <MobileList />
        </div>
        <CardGenerator />
      </div>
      <div className="text-center m-4">
        <Footer />
      </div>
    </div>
  );
}
