'use client';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const { data: session, status } = useSession();
    console.log(session);
    const links = (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/allEvents">Events</Link>
            </li>
            <li>
                <Link href="/event/add">Add Events</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
            <li>
                <Link href="/about">About us</Link>
            </li>
        </>
    );
    return (
        <div className="navbar shadow-sm bg-gray-900 text-white top-0 z-30 sticky">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {' '}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{' '}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        className="border-2 rounded-full border-indigo-600"
                        src="/logo.jpg"
                        alt="Eventry"
                        width={50}
                        height={50}
                    />
                    <h3 className="text-2xl font-bold">Haque Tech</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
                {status == 'authenticated' ? (
                    <>
                        <span className="">Hello, {session?.user?.name}</span>
                        <span className="mx-2">|</span>
                        <a
                            onClick={() => signOut()}
                            className="btn btn-outline border border-blue-600"
                        >
                            Logout
                        </a>
                    </>
                ) : (
                    <>
                        <Link href="/register" className="btn button btn-primary mr-4">
                            Sign Up
                        </Link>
                        <Link href="/login" className="btn button btn-primary">
                            Login
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
