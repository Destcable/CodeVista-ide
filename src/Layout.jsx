import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const Layout = () => {
    return (
        <>
            <header
                className="p-3"
                style={{ backgroundColor: '#151518' }}
            >
                <div className="d-flex gap-3" style={{ color: '#42424B' }}>
                    <span>File</span>
                    <span>Edit</span>
                    <span>Selection</span>
                    <span>View</span>
                    <span>Go</span>
                    <span>Terminal</span>
                    <span>Run</span>
                    <span>Help</span>
                </div>
            </header>
            <div className="border-bottom border-secondary"></div>
            <div
                className="p-3"
                style={{ backgroundColor: '#151518', color: '#42424B' }}
            >
                <span className="text-white">
                    <MdOutlineChevronLeft size='20px'/>
                </span>
                <span className="ps-2">
                    <MdOutlineChevronRight size='20px'/>
                </span>
                <span className="ps-4 pe-4">|</span>
            </div>
            <div
                className="d-flex"
                style={{ backgroundColor: '#151518' }}
            >
                <div 
                    className="p-3 rounded-3"
                    style={{ backgroundColor: '#1E1E23', color: '#333237'}}
                >
                    Search code / files
                </div>
            </div>
        </>
    )
};

export default Layout;