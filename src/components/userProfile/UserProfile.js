import { shape, string, number } from "prop-types";
import styled from "styled-components";

export const UserProfile = ({ user }) => {
    return (
        <Wrapper>
            <Avatar src={user.avatar} alt="User avatar"></Avatar>
            <Info>
                <div>
                    <h1>{user.name}</h1>
                    <InfoUser>
                        <h3>Username:</h3>
                        <a href={user.publicUrl}>{user.login}</a>
                    </InfoUser>
                    <InfoUser>
                        <h3>Company:</h3>
                        <span>{user.company}</span>
                    </InfoUser>
                    <InfoUser>
                        <h3>Location:</h3>
                        <span>{user.location}</span>
                    </InfoUser>
                    <InfoUser>
                        <h3>Blog:</h3>
                        <a href={user.blog}>{user.blog}</a>
                    </InfoUser>
                </div>
                <Stats>
                    <div>
                        <h4>Followers</h4>
                        <span>{user.followers}</span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span>{user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repositories</h4>
                        <span>{user.public_repos}</span>
                    </div>
                </Stats>
            </Info>
        </Wrapper>
    )
}

UserProfile.propTypes = {
    user: shape({
        avatar: string,
        login: string,
        name: string,
        publicUrl: string,
        blog: string,
        company: string,
        location: string,
        followers: number,
        following: number,
        public_gists: number,
        public_repos: number
    })
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Avatar = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    h1 {
        font-size: 24px;
        font-weight: bold;
    }

    h3 {
        font-size: 16px;
        font-weight: bold;
    }

    h4 {
        font-size: 14px;
        font-weight: bold;
    }
`;

const InfoUser = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;

    h3 {
        margin: 1px;
        margin-right: 8px;
    }

    a {
        font-size: 16px;
        font-weight: bold;
        color: #FFAC78;
    }
`;

const Stats = styled.div`
    display: flex;
    align-items: center;

    div {
        margin: 8px;
        text-align: center;
        padding: 0;
    }
`;
