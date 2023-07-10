import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { customCursor } from "./constants";
const Cursor = () => {
  const router = useRouter();

  useEffect(() => {
    customCursor();
  }, []);

  useEffect(() => {
    customCursor();
  }, [router]);

  return (
    <div id="custom-cursor" className="custom-cursor">
      <div className="colorOne"></div>
    </div>
  );
};

export default Cursor;
