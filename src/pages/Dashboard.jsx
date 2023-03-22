import { logout } from "../config/firebase";

const Dashboard = () => {
    const handlerLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={handlerLogout}>LogOut</button>
        </>
    );
};

export default Dashboard;
