import { useParams } from "react-router-dom";
const Profile = () => {
  const router = useParams();
  console.log(router);
  return <div>Profile id {router.id}</div>;
};

export default Profile;
