import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
      <p className="text-gray-500">@{user.username}</p>

      <div className="mt-4">
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Website:</span> {user.website}
        </p>
      </div>

      <div className="mt-4">
        <p className="text-gray-700">
          <span className="font-semibold">Company:</span> {user.company.name}
        </p>
        <p className="text-gray-500 italic">{user.company.catchPhrase}</p>
      </div>

      <div className="mt-4">
        <p className="text-gray-700 font-semibold">Address:</p>
        <p className="text-gray-600">
          {user.address.street}, {user.address.suite}, {user.address.city}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
