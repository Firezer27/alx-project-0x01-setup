import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="border rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-500">@{username}</p>

      <div className="mt-4">
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Website:</span> {website}
        </p>
      </div>

      <div className="mt-4">
        <p className="text-gray-700">
          <span className="font-semibold">Company:</span> {company.name}
        </p>
        <p className="text-gray-500 italic">{company.catchPhrase}</p>
      </div>

      <div className="mt-4">
        <p className="text-gray-700 font-semibold">Address:</p>
        <p className="text-gray-600">
          {address.street}, {address.suite}, {address.city}, {address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
