import logo from "../pic/Untitled-2.png";

const LogoStore = () => {
  return (
    <div className="row mt-4">
      <div style={{ height: 30 + "vh" }} className="d-flex justify-content-center">
        <img className="img-fluid" src={logo} />
      </div>
    </div>
  );
};

export default LogoStore;
