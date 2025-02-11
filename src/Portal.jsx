import React from "react";
import "./portal.css"
import { Link } from "react-router-dom";

function Portal() {
    return(
        <>
            <div className="dashboard">
        <aside className="sidebar">
            <h2>Dashboard</h2>
            <ul>
                <button><Link to={"/"}>Header</Link></button>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </aside>
        <main className="content">
            {/* <header>
                <h1>Welcome, User</h1>
            </header>
            <section className="widgets">
                <div className="widget">Profile Overview</div>
                <div className="widget">Recent Activity</div>
                <div className="widget">Notifications</div>
            </section> */}
            
        </main>
    </div>

        </>
    )
}
export default Portal;