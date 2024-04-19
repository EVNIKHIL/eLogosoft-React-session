import { useCreateAlbumMutation } from "../services/jsonServerApi";
import { useNavigate, Link } from "react-router-dom";

export default function CreateAlbum() {
  const navigate = useNavigate();
  const [createAlbum, { isLoading }] = useCreateAlbumMutation();

  function submitAlbum(event) {
    event.preventDefault();
    createAlbum(event.target["title"].value).then(() => {
      navigate("/");
    });
    event.target.reset();
  }

  return (
    <form onSubmit={(e) => submitAlbum(e)}>
      <h3>New Album</h3>
      <Link to="/">Go to list</Link>
      <div>
        <label htmlFor="title">Title:</label> <input type="text" id="title" />
      </div>

      <br />

      <div>
        <input disabled={isLoading} type="submit" value="Add New Album" />
      </div>
    </form>
  );
}
