import {AppBar} from "@material-ui/core";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from "../styledComponents";

const NavBar = () => {
    return (
        <AppBar position="fixed">
            <Wrapper>
                <Left>
                    <Logo>COD.ER.SHO.P</Logo>
                </Left>
                <Center>
                    <MenuItem>Categoría 1</MenuItem>
                    <MenuItem>Categoría 2</MenuItem>
                    <MenuItem>Categoría 3</MenuItem>
                    <MenuItem>Categoría 4</MenuItem>
                    <MenuItem>Categoría 5</MenuItem> 
                </Center>
                <Right/>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;