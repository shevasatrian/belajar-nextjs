import { withAuth } from "../with-auth";
import styles from './styles.module.css';
import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useQueries } from "@/hooks/useQueries";
import Cookies from "js-cookie";
import { useMutation } from "@/hooks/useMutation";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter()
  const { mutate } = useMutation()
  const { data } = useQueries({prefixUrl: 'https://paace-f178cafcae7b.nevacloud.io/api/user/me',
  headers:  {
    'Authorization': `Bearer ${Cookies.get('user_token')}`,
  }})

  const HandleLogout = async () => {
    const response = await mutate({
      url: "https://paace-f178cafcae7b.nevacloud.io/api/logout",
      method: "GET",
      headers: {
        'Authorization': `Bearer ${Cookies.get('user_token')}`,
      }
    })
    console.log("res => ", response)
    if (!response?.success) {
      console.log("gagal logout")
    } else {
      Cookies.remove("user_token")
      router.push("/login")
    }
  }

  return (
    <div className={styles.header}>
      {/* <Menu /> */}
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/users/detail">Users Detail</Link></li>
        <li><Link href="/notes">Notes</Link></li>
        <li>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {data?.data?.name}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => HandleLogout()}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </li>
      </ul>
    </div>
  );
}

// export default withAuth(Header);

// import styles from './styles.module.css';

// export default function Header() {
//   return <div className={styles.header}>
//     Header
//   </div>;
// }