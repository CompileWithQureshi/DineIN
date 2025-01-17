import React from 'react';

function NavBar() {
    // Get user data from localStorage
    const userName = localStorage.getItem('UserData');
    const data = userName ? JSON.parse(userName) : null; // Check for null

    return (
        <div className="w-96">
            <nav className="flex justify-between items-center max-w-screen-sm border-2 rounded-lg bg-slate-50 h-16 m-2 w-full p-4">
                {/* Display user information if available */}
                <p className="p-2">
                    {data ? data.PhoneNumber : "Guest"}
                </p>

                {/* Placeholder for profile image */}
                <div className="w-12 h-12 rounded-full bg-slate-700 box-border">
                    {/* <img src="" alt="" /> */}
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
