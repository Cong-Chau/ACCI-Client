import TopBar from "../../components/TopBar";
import Header from "../../components/Header";

function DashboardAdmin() {
  console.log("Tải trang admin");
  return (
    <div className="hover:cursor-default">
      <TopBar />
      <Header />
    </div>
  );
}

export default DashboardAdmin;
