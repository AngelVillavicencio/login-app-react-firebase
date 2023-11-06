import Navbar from "./Navbar"


const LayoutMain = ({ children }) => {


    return (
        <div className="container m-auto ">
            <Navbar></Navbar>
            <div className="container m-auto max-w-screen-xl">
                {children}
            </div>
        </div>
    )
}

export default LayoutMain