import { UserButton } from "@clerk/nextjs";
import Image from 'next/image';
import { FaBookmark, FaGift, FaHome, FaMoneyBillWave, FaRegNewspaper, FaRobot } from 'react-icons/fa';

const navigation = [
    { name: 'Dashboard', href: '#', icon: FaHome, count: '5', current: true },
    { name: 'Newsletter Preferences', href: '#', icon: FaRegNewspaper, current: false },
    { name: 'Juno AI', href: '#', icon: FaRobot, count: '12', current: false },
    { name: 'Discounts', href: '#', icon: FaMoneyBillWave, count: '20+', current: false },
    { name: 'Bookmarks', href: '#', icon: FaBookmark, current: false },
    { name: 'Rewards', href: '#', icon: FaGift, current: false },
];
const links = [
    { name: 'Community', href: '#', icon: FaMoneyBillWave, count: '20+', current: false },
    { name: 'Support', href: '#', icon: FaBookmark, current: false },
    { name: 'Refer', href: '#', icon: FaGift, current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
    return (
        <div className="bg-midnight">
            <div className="flex max-w-screen-xl mx-auto">
                <div className="w-1/4 flex flex-col gap-y-5 overflow-y-auto bg-midnight px-6 py-36">
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-gray-800 text-white'
                                                        : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                    'group flex gap-x-3 rounded p-2 text-sm leading-4 font-semibold'
                                                )}
                                            >
                                                <item.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                                                {item.name}
                                                {item.count ? (
                                                    <span
                                                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700"
                                                        aria-hidden="true"
                                                    >
                                                        {item.count}
                                                    </span>
                                                ) : null}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <div className="text-xs font-semibold leading-6 text-gray-400">Need help?</div>
                                <ul role="list" className="-mx-2 mt-2 space-y-1">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className={classNames(
                                                    link.current
                                                        ? 'bg-gray-800 text-white'
                                                        : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                )}
                                            >
                                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                                    <link.icon className="h-4 w-4" />
                                                </span>
                                                <span className="truncate">{link.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="-mx-6 mt-auto flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800">
                                <span className="sr-only">Your profile</span>
                                <UserButton
                                    afterSignOutUrl="/gists" />
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="w-3/4 flex flex-col items-center justify-center gap-y-5 overflow-y-auto bg-white px-6 py-5">
                    {/* Add your main content here */}
                    <Image className="flex justify-center"
                        src="https://i.giphy.com/media/3o7abxtmPxanzaESGY/giphy.webp"
                        alt="GIF of a baby dancing after waking up abruptly"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    );
}
