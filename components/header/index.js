import Menu from "../menu";
import { withAuth } from "../with-auth";
import styles from './styles.module.css';
import Link from "next/link";

function Header() {
  return (
    <div className={styles.header}>
      {/* <Menu /> */}
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/users/detail">Users Detail</Link></li>
        <li><Link href="/notes">Notes</Link></li>
      </ul>
    </div>
  );
}

export default withAuth(Header);

// import styles from './styles.module.css';

// export default function Header() {
//   return <div className={styles.header}>
//     Header
//   </div>;
// }