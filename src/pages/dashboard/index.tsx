import React, { useState } from "react";

import { useRouter } from "next/router";
import { api } from "~/utils/api";

const UserInfoDashboard = () => {
  const { data: user } = api.user.me.useQuery();

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">{user?.email}</div>
      </div>
    </div>
  );
};

export default UserInfoDashboard;
