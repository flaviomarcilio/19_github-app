import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getUser } from './GitHubService';

const username = 'flaviomarcilio';
const userResponse = { user: 'username' };

const server = setupServer(
    rest.get(process.env.REACT_APP_GITHUBAPI + 'users/:username', async (req, res, ctx) => {
        return res(ctx.json(userResponse));
    })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('transform json response of getUser into object', async () => {
    const user = await getUser(username);

    expect(user).toStrictEqual(userResponse);
})