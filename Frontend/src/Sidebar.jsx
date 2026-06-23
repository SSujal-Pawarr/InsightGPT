import "./Sidebar.css";

function Sidebar() {
    return (
        <section className="sidebar">
            <button onClick={createNewChat}>
                <img src="src/assets/blacklogo.png" alt="gpt logo" className="logo" />
                <span><i className="fa-solid fa-pen-to-square"></i></span>
            </button>


            <ul className="history">
               <li>history1</li>
                <li>history2</li>
                 <li>History3</li>
            </ul>
 
              <div className="sign">
                <p>By ApnaCollege &hearts;</p>
            </div>
        </section>
    );
}

export default Sidebar;