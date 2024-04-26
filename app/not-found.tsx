import Footer from "@/components/Footer";
import NotFoundBox from "@/components/NotFoundBox";
export default function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <NotFoundBox />
      <div className="fixed bottom-0 m-4">
        <Footer />
      </div>
    </div>
  );
}
