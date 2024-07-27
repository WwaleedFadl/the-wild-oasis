import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
const FullPage = styled.div`
  height: 100vh;
  background-color: car(--color-grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1 >> load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2 >>  it there is no authenticated user ,redirect to the /login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // 3 >> while happening show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  // 4 >> if there is a user render the app
  if (isAuthenticated) return children;
}
