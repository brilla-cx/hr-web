import Script from "next/script";

const Juno = () => {
    return (
        <>
            <Script
                src="https://libraria-prod.s3.us-west-1.amazonaws.com/public/embed-inline-v0.0.02.js"
                defer
            />
            <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Juno AI
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Juno is the AI assistant for Hey Rebekah's tech stack.
                    </p>
                </div>
            </div>
            <div className="min-h-screen bg-gray-100 flex items-start justify-center">
                <div
                    id="libraria-widget"
                    data-librariaslug="brilla"
                    data-compact="true"
                    className="w-full max-w-4xl p-8 bg-white shadow-md rounded-md"
                />
            </div>
        </>
    );
};

export default Juno;