import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

function Dashboard() {
  return (
    <div className="relative flex items-start gap-[12px] p-3 h-[100vh] w-[100vw]">

      <div className="fixed rounded-[20px] left-3 top-3 w-[260px] h-[calc(100vh-24px)] bg-main-color z-10">
        <Sidebar />
      </div>

      <div className="relative overflow-x-hidden flex-1 ml-[272px] h-full rounded-[20px] border-[2px] border-red-500">
        <Navbar title={'DashBoard'} />

        <div className="mt-[1rem] p-3">
          {/**TOP */}
          <div className="grid grid-cols-3 gap-8">
            <div className="card shadow-md hover:shadow-lg flex flex-col">
              <h2 className={`text-[21px] font-medium text-error`}>Wallet:</h2>
              <p className="text-[19px]">$</p>
              <h1 className="text-[24px] font-semibold">1000</h1>
            </div>
            <div className="card shadow-md hover:shadow-lg flex flex-col">
              <h2 className={`text-[21px] font-medium text-color-1`}>Donations:</h2>
              <p className="text-[19px]">$</p>
              <h1 className="text-[24px] font-semibold">1000</h1>
            </div>
            <div className="card shadow-md hover:shadow-lg flex flex-col">
              <h2 className={`text-[21px] font-medium text-main-color`}>Purchases:</h2>
              <p className="text-[19px]">$</p>
              <h1 className="text-[24px] font-semibold">1000</h1>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-8">
            <Link to={`/admin/events`} className="card flex items-center justify-center bg-color-1">
              <p className="font-semibold text-[20px] text-white">Ministry Events</p>
            </Link>
            <Link to={`/admin/prayer-request`} className="card flex items-center justify-center bg-main-color">
              <p className="font-semibold text-[20px] text-white">Prayer Requests</p>
            </Link>
            <Link to={`/admin/consultation`} className="card flex items-center justify-center bg-error">
              <p className="font-semibold text-[20px] text-white">Consultations Request</p>
            </Link>
          </div>

          <div className="mt-8 border-t-[2px] border-b-[2px] border-error flex items-center justify-between px-12 gap-5">

            <div className="my-3 flex flex-col items-center justify-center">
              <h2 className="font-semibold text-main-color text-[18px]">Bookmark</h2>
              <p>20</p>
            </div>

            <div className="my-3 flex flex-col items-center justify-center">
              <h2 className="font-semibold text-main-color text-[18px]">Prayer</h2>
              <p>5</p>
            </div>

            <div className="my-3 flex flex-col items-center justify-center">
              <h2 className="font-semibold text-main-color text-[18px]">Member ID</h2>
              <p>HGFPMIXXX</p>
            </div>

            <div className="my-3 flex flex-col items-center justify-center">
              <h2 className="font-semibold text-main-color text-[18px]">Testimonies</h2>
              <p>4</p>
            </div>


          </div>

          {/**BOTTOM */}
          <div className="mt-8">
            consulation table
            <br />            
            prayer request table
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
