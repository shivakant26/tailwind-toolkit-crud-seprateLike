import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteWish, editWish } from "../Redux/dataSlice";

const List = () => {
  const list = useSelector((state) => state?.dataSlice?.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const edit = (index) =>{
    navigate(`/${index}`)
    dispatch(editWish(index))
  }
  const trash = (id) =>{
    dispatch(deleteWish(id))
  }
  return (
    <>
      <table className="table-auto border-2 w-full">
        <thead>
          <tr>
            <th className="border-2">ID</th>
            <th className="border-2">Title</th>
            <th className="border-2">Discription</th>
            <th className="border-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {list?.length > 0 ? (
            <>
              {list?.map((wishItem, index) => {
                return (
                  <tr className="border-2 text-center" key={index}>
                    <td className="border-2 text-center">{index}</td>
                    <td className="border-2 text-center">{wishItem.title}</td>
                    <td className="border-2 text-center">
                      {wishItem.discription}
                    </td>
                    <td>
                      <button className="bg-lime-800 text-white pt-1 pb-1 pl-2 pr-2 w-20 rounded transition delay-150  hover:bg-lime-700"
                      onClick={()=>edit(index)}
                      >
                        Edit
                      </button>
                      <button className="bg-rose-900 ml-3 text-white pt-1 pb-1 pl-2 pr-2 w-20 rounded transition delay-150  hover:bg-rose-400"
                        onClick={()=>trash(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <>
              <p className="text-red-500">No Item Found</p>
            </>
          )}
        </tbody>
      </table>
    </>
  );
};

export default List;
