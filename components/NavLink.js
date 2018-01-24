import { withRouter } from 'next/router';
import Link from 'next/link';

import { cls } from '../utils';

const NavLink = ({ children, router, href }) => {
  const classes = { 'nav-item': true, active: router.pathname === href };

  return (
    <li className={cls(classes)}>
      <Link href={href}>
        {children}
      </Link>
    </li>
  );
};

export default withRouter(NavLink);
