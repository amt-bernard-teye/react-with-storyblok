import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function IndexPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/blogs");
  }, [navigate]);

  return <p>Loading...</p>
}