import { AppBar, Toolbar } from "@mui/material";

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <h3>Сникер-магазин</h3>
                <div>
                    <a href="/">ГЛАВНАЯ</a>
                    <a href="/cart">КОРЗИНА</a>
                    <a href="/contacts">КОНТАКТЫ</a>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

