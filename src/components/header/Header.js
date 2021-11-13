import styled from "styled-components";
import { func } from "prop-types";
import { Button } from "..";

export const Header = ({ onChange, onClick }) => {
    return (
        <Content>
            <Wrapper>
                <Input type='text' placeholder='Your username' onChange={ev => onChange(ev.target.value)}/>
                <Button onClick={onClick}>Show my work</Button>
            </Wrapper>
        </Content>
    )
}

Header.propTypes = {
    onChange: func,
    onClick: func
}

const Content = styled.header`
    margin: 5px;
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const Input = styled.input`
    border: 1px solid;
    border-radius: 5px;
    font-size: 1em;
    padding: 8px 13px;
    margin-right: 5px;
    width: 90vw;
`;