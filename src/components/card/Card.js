import styled from 'styled-components';

export const Card = ({ name, fullname, link }) => {
    return (
        <Wrapper>
            <Name>{name}</Name>
            <Content>
                <Fullname>Fullname:</Fullname>
                <Link href={link} target='_blank' rel='noreferrer'>{fullname}</Link>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border-radius: 16px;
    border: 1px solid #ccc;
    margin: 16px 16px;
    width: 350px;
    height: 150px;
    padding: 8px;
    align-content: center;
    background: #0C162D;
    box-shadow: 3px 2px 13px rgba(255, 255, 255, 0.5);
`;

const Name = styled.h2`
    font-size: 18px;
    margin: 8px 0;
    color: #34C337;
`;

const Fullname = styled.h4`
    font-size: 14px;
    margin: 8px 3px;
`;

const Link = styled.a`
    font-size: 14px;
    font-weight: bold;
    margin: 8px 3px;
    color: #FFAC78;
`;

const Content = styled.div`
    display: flex;
`;