import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import AdminNav from "./components/AdminNav";

function CertificateManagement() {
  return (
    <div className="hover:cursor-default mb-16">
      <TopBar />
      <Header />
      <AdminNav />
    </div>
  );
}

export default CertificateManagement;
