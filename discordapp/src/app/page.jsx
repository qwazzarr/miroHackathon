import React from 'react';

import initMiroAPI from '../utils/initMiroAPI';
import '../assets/style.css';

const getBoards = async () => {
  const {miro, userId} = initMiroAPI();

  // redirect to auth url if user has not authorized the app
  if (!userId || !(await miro.isAuthorized(userId))) {
    return {
      authUrl: miro.getAuthUrl(),
    };
  }

  const api = miro.as(userId);

  const boards = [];
  for await (const board of api.getAllBoards()) {
    boards.push(board);
  }

  return {
    boards,
  };
};


export default async function Page() {
  const {boards, authUrl} = await getBoards();

  return (
    <div>
      {authUrl ? (
        <a className="button button-primary" href={authUrl}>
          Login
        </a>
      ) : (
        <>
          <p>This is a list of all the boards that your user has access to:</p>

          <ul>
            {boards?.map((board) => (
              <li key={board.name}>{board.name}</li>
            ))}
          </ul>
        </>
      )
      }
      <button className={"button button-primary"} type="button">Click me for some shit</button>
    </div>
  );
}
