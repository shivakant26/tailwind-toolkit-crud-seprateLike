import Header from "./Header";

const Layout = ({children}) =>{
    return(
        <>
        <Header />
        <div className="main">
            {children}
        </div>
        </>
    )
}

export default Layout;