'use client';

import Link from 'next/link';

export default function GlobalError({ error, reset }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-4">
                😵 Oops! Something went wrong.
            </h1>
            <p className="mb-6">{error.message}</p>
            <button
                className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-800"
                onClick={() => reset()}
            >
                Retry
            </button>
            <Link href="/" className="mt-4 text-indigo-400 underline">
                Back to Home
            </Link>
        </div>
    );
}
