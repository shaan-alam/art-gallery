import { Avatar } from "@material-ui/core";

const Art = ({ art }) => {
  return (
    <div className="border border-2 border-gray-200 shadow-md rounded-md mt-8">
      <div className="art-img">
        <img
          src={art.url}
          alt="An Art"
          className="w-full rounded-tl-md rounded-tr-md"
        />
      </div>
      <div className="flex items-center">
        <Avatar
          className="rounded-full w-8 h-8 mx-4 my-4"
          src={art.uploadedBy.photoURL}
          alt={art.uploadedBy.displayName}
          title={art.uploadedBy.displayName}
        />
        <p>
          {art.uploadedBy.displayName} 
        </p>
      </div>
    </div>
  );
};

export default Art;
