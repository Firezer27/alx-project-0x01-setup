import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<UserProps[]>(posts);

  const handleAddUser = (newUser: UserProps) => {
    const savedUser = { ...newUser, id: users.length + 1 };
    setUsers([...users, savedUser]);
  };

  return (
    <div>
      <Header />
      <main className="p-6">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Users</h1>

          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-full"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
            />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
