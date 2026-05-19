import React from "react";
import UserHeaderNav from "./UserHeaderNav.jsx";
import styles from "./UserHeader.module.css";

const UserHeader = () => {
    const [title, setTitle] = React.useState('');
    useLocation = useLocation();

    React.useEffect(() => {
        const {pathname} = location;
        switch(pathname) {
            case '/conta/estatisticas':
                setTitle('Estatísticas');
                break;
            case '/conta/postar':
                setTitle('Poste Sua Foto');
                break;
            default:
                setTitle('Minha Conta');
        }
    }, [location]);



    return (
       <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <UserHeaderNav></UserHeaderNav>
        </header>
    );
}

export default UserHeader;