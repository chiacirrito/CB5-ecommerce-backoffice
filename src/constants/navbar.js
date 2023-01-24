import {
  GrHomeRounded,
  GrList,
  GrOverview,
  GrCart,
  GrUserAdmin,
} from "react-icons/gr";

export const navBarLinks = [
  {
    id: 1,
    label: "Home",
    route: "home",
    icon: <GrHomeRounded />,
  },
  {
    id: 2,
    label: "Categories",
    route: "categories",
    icon: <GrList />,
  },
  {
    id: 3,
    label: "Products",
    route: "products",
    icon: <GrOverview />,
  },
  {
    id: 4,
    label: "User",
    route: "users",
    icon: <GrUserAdmin />,
  },
  {
    id: 5,
    label: "Orders",
    route: "orders",
    icon: <GrCart />,
  },
];
