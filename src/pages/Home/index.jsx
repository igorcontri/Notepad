import { FiPlus } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Notepad</h1>
            </Brand>

            <Header></Header>

            <Menu>
                <ul>
                    <li>
                        <ButtonText title="Todos" isActive />
                    </li>
                    <li>
                        <ButtonText title="Frontend" />
                    </li>
                    <li>
                        <ButtonText title="Node" />
                    </li>
                    <li>
                        <ButtonText title="React" />
                    </li>
                </ul>
            </Menu>

            <Search></Search>

            <Content></Content>

            <NewNote>
                <FiPlus />
                Criar Nota
            </NewNote>
        </Container>
    );
}