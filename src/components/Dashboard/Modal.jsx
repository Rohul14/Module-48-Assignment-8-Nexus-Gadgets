import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-center">
          <p className="flex justify-center text-center my-4">
            <IoMdCheckmarkCircleOutline className="text-green-400 text-7xl" />
          </p>
          <h3 className="font-bold text-lg">Payment Successfully!</h3>
          <p className="pt-4">Thanks for purchasing.</p>
          <div className="mt-5 mb-2">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button 
                onClick={goToHome}
                className="btn border w-full bg-[#9538E2] text-[#FFF] hover:bg-white hover:text-[#9538E2] rounded-3xl">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
