import { Link, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

const Navbar = () => {
    const { auth } = usePuterStore();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signOut();        // log the user out
        await auth.signIn();         // optional: trigger login again
        navigate("/");               // back to home/dashboard
    };

    return (
        <nav className="navbar flex justify-between items-center px-8 py-4">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUME FIT</p>
            </Link>

            <div className="flex items-center gap-4">
                <Link to="/upload" className="primary-button w-fit">
                    Upload Resume
                </Link>

                <button
                    onClick={handleLogout}
                    className="
                        px-5 py-2 rounded-full 
                        bg-red-500 text-white text-sm font-semibold 
                        hover:bg-red-600 active:scale-95 transition-all shadow-lg
                    "
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
