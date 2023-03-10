import { useQuery } from "@tanstack/react-query";
import React from "react";

const Dashbord = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(
        "https://genesys-softwares-server-ismilearefin.vercel.app/users"
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen grid justify-center items-center">
        <h1 className="text-4xl text-center">Loading...</h1>
      </div>
    );
  }

  console.log(data);
  return (
    <div className="bg-white p-[100px]">
      <div className="w-[1718px]">
        <h1 className="text-[28px] leading-[38px] text-[#2D2929]">User list</h1>
        <table className="table-fixed w-full">
          <thead>
            <tr className="border-b-2 text-left h-[75px] text-[17px] leading-6">
              <th>First Name</th>
              <th className="text-center">Last Name</th>
              <th className="text-center">Email</th>
              <th className="text-right">Password</th>
            </tr>
          </thead>
          <tbody className="text-[20px] leading-7">
            {data?.map((user) => (
              <tr key={user._id} className="border-b-2 h-[75px]">
                <td>{user.firstName}</td>
                <td className="text-center">{user.lastName}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-right pr-4">{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full border-b-2 h-[75px] grid items-center text-2xl">
          <h1>{data?.length} User</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
