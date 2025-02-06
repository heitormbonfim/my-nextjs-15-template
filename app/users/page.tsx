import User from "../api/models/user";

export default async function Users() {
  const users = await User.findAll();

  return (
    <div>
      <h1 className="text-lg font-bold">Users</h1>
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}
