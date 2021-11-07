import styled from "styled-components";
import gitHubImg from "../../images/GitHub-logoW.png";

export const Home = () => {
    return (
        <Content>
            <Sentence>Are you in GitHub? Yes, then show me your work!</Sentence>
            <GitHubImg src={gitHubImg} alt='GitHub Logo' />
        </Content>
    )
}

const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GitHubImg = styled.img`
    max-width: 50vw;
`;

const Sentence = styled.p`
    color: #fff;
    font-size: 4em;
    font-weight: 900;
    margin-bottom: 50px;
`;