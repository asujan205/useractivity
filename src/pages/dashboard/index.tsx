import React, { useState } from "react";

import { useRouter } from "next/router";
import { api } from "~/utils/api";

const UserInfoDashboard = () => {
  const { data: user } = api.user.me.useQuery();
};
