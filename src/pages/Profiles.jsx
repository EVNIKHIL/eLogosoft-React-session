import { Link } from "react-router-dom";

const Profiles = () => {
  const profiles = [1, 2, 3];
  return (
    <div>
      <h1>Profiles</h1>

      <div className="profile-list">
        {profiles.map((id) => (
          <Link key={id} to={`/profiles/${id}`}>
            Profile {id}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Profiles;
