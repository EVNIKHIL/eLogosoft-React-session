import { useState } from "react";
import {
  useGetAlbumsQuery,
  useDeleteAlbumMutation,
  useUpdateAlbumMutation,
} from "../services/jsonServerApi";
import { useNavigate, Link } from "react-router-dom";

export default function Albums() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [editItem, setEditItem] = useState();
  const { data: albums = [], isLoading, isFetching } = useGetAlbumsQuery(page);
  const [deleteAlbum] = useDeleteAlbumMutation();
  const [updateAlbum] = useUpdateAlbumMutation();
  const [editName, setEditName] = useState("");
  const deleteItemHander = (album) => {
    deleteAlbum(album.id).then(() => {
      navigate("/");
    });
  };

  if (isLoading || isFetching) {
    return <h3>Loading...</h3>;
  }

  const submitEditHandler = () => {
    updateAlbum({ id: editItem.id, title: editName }).then(() => {
      setEditItem(undefined);
    });
  };

  return (
    <>
      <h4>Album list</h4>
      <Link to="/add-album">Add New </Link>
      <ul>
        {albums?.map((album) => (
          <li key={album.id}>
            {album.id === editItem?.id ? (
              <input
                value={editName}
                onChange={(e) => {
                  setEditName(e.target.value);
                }}
                name="edit"
              />
            ) : (
              `${album.id} ${album.title}`
            )}
            {album.id === editItem?.id ? (
              <>
                <button onClick={submitEditHandler}>Save</button>
                <button
                  onClick={() => {
                    setEditItem(undefined);
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setEditItem(album);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteItemHander(album);
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <button disabled={page <= 1} onClick={() => setPage((prev) => prev - 1)}>
        Prev
      </button>
      <button
        disabled={albums.length < 10}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>
    </>
  );
}
