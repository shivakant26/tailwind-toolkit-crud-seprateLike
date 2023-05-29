import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWish, updateWish } from "../Redux/dataSlice";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { editData } = useSelector((state) => state?.dataSlice);
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({
    title: id ? editData?.title || "" : "",
    discription: id ? editData?.discription || "" : "",
  });

  const addNewWish = () => {
    let object = state;
    if (id) {
      dispatch(updateWish({ object, id }));
      navigate("/list");
    } else {
      dispatch(addWish(object));
    }
    setState({
      title: "",
      discription: "",
    });
  };

  return (
    <div className="form_section">
      <div className="form_inner">
        <div className="form">
          <div className="form-field">
            <input
              type="text"
              placeholder="title"
              className="border-2 border-solid border-slate-300 mb-4 p-2 w-full	focus:outline-none"
              value={state.title}
              onChange={(e) => setState({ ...state, title: e.target.value })}
            />
          </div>
          <div className="form-field">
            <input
              type="text"
              placeholder="discription"
              className="border-2 border-solid border-slate-300 mb-4 p-2 w-full focus:outline-none"
              value={state.discription}
              onChange={(e) =>
                setState({ ...state, discription: e.target.value })
              }
            />
          </div>
          <div className="form-field text-center">
            <button
              onClick={addNewWish}
              className="bg-lime-600 p-2 w-40 rounded text-white hover:bg-sky-700"
            >
              {id ? "Update" : "submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
