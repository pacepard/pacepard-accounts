import { BellIcon, HelpCircleIcon } from 'lucide-react';
import TopNav from './TopNav';
import Trigger from './Trigger';
import UserAvatar from './UserAvatar';

/** Troott-style top chrome — sibling above main, never inside scrolling content. */
const NavBar = () => {
    return (
        <nav className="flex h-14 w-full shrink-0 items-center justify-between border-b border-border bg-background px-4 top-0 z-50">
            <div className="flex items-center gap-2">
                <Trigger />
                <TopNav />
            </div>
            <div className="flex items-center justify-end gap-2">
                <BellIcon className="size-5" aria-hidden="true" />
                <HelpCircleIcon className="size-5" aria-hidden="true" />
                <UserAvatar />
            </div>
        </nav>
    );
};

export default NavBar;
