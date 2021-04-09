import { CircularProgress } from "@material-ui/core";

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <CircularProgress />
    </div>
  );
}
