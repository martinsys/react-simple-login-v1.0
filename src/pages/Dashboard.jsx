import { logout } from "../config/firebase";

const Dashboard = () => {
    const handleLogout = async () => {
        try {
            await logout();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <h1>Dashboard (ruta protegida)</h1>
            <button onClick={handleLogout}>LogOut</button>
        </>
    );
};

export default Dashboard;
