import { useContextApi } from "../component/contextapi";

function UserTable() {
  const { amount } = useContextApi();
  const data = Array.isArray(amount) ? amount : [];
  const localStoragedata = JSON.stringify(data);
  localStorage.setItem("data", localStoragedata);
  return (
    <section className="flex justify-start items-start p-4 w-340">
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{user.Name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.LastName}
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.Email}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.Password}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default UserTable;
