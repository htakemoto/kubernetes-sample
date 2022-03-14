import React, { useState, useEffect } from 'react'

interface IUser {
  id: number
  username: string
  email: string
}

interface State {
  isLoading: boolean
  users: IUser[]
  backendVersion: string
}

const Users: React.FC = () => {
  const [values, setState] = useState<State>({
    isLoading: true,
    users: [],
    backendVersion: ''
  })

  useEffect(() => {
    const backendUrl = `${process.env.REACT_APP_API_URI ?? ''}`;
    (async function() {
      try {
        const info = await fetch(
          `${backendUrl}/info`
        );
        const users = await fetch(
          `${backendUrl}/users`
        );
        setState({
          isLoading: false,
          users: await users.json(),
          backendVersion: (await info.json()).version
        });
      } catch (e) {
        console.error(e);
        setState({
          isLoading: false,
          users: [],
          backendVersion: ''
        });
      }
    })();
  }, [])

  return (
    <React.Fragment>
      {values.isLoading ? (
        <>loading...</>
      ) : (
        <>
          <>
            {values.users.map((row) => (
              <div key={row.email}>
                {row.id} - {row.username} - {row.email}
              </div>
            ))}
          </>
          <>
            Backend Version: {values.backendVersion}
          </>
        </>
      )}
    </React.Fragment>
  )
}

export default Users