import { AuthProvider } from "./contexts/AuthContext";
import { RoutesMain } from "./routes";
import { StyledGlobal } from "./styles/global";

const App = () => {
  return (
    <>
      <StyledGlobal />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
};

export default App;
