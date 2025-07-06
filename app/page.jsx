import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
The platform below is running in **\`process.env.CONTEXT\`** mode — ideal for flexible deployment during training and assessments.
(See [Netlify Docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata) for more)
`;

const preDynamicContentExplainer = `
Every time you load this page, you'll see a **motivational quote**, fetched dynamically from \`/quotes/random\`.
This simulates how iLearn Nexus can load new questions or instructions each time, just like real coding assessments.
`;

const postDynamicContentExplainer = `
The random content is powered by **Next.js Route Handlers** as **Serverless Functions** on Netlify.

This is exactly how we’ll power **question generation**, **timers**, and **code evaluation APIs** in iLearn Nexus.
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <ContextAlert className="mb-6" />
                <h1 className="mb-4 text-3xl font-bold text-blue-700">Welcome to iLearn Nexus Platform</h1>
                <p className="mb-6 text-lg text-gray-700">
                    A smarter, Telugu-friendly EdTech platform for coding assessments, internship-style training, and career growth.
                </p>
                <div className="flex gap-4 flex-wrap">
                    <Link href="/login" className="btn btn-lg bg-blue-600 text-white hover:bg-blue-700">
                        Student Login
                    </Link>
                    <Link href="/admin" className="btn btn-lg border border-blue-600 text-blue-600 hover:bg-blue-50">
                        Admin Panel
                    </Link>
                    <Link href="https://ilearnnexus.in" target="_blank" className="btn btn-lg">
                        Visit Official Site
                    </Link>
                </div>
            </section>

            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <RuntimeContextCard />
                </section>
            )}

            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
        </div>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>This is a development preview. Edits are immediately reflected. Use for local testing.</p>
            </Card>
        );
    } else {
        return (
            <Card title={title}>
                <p>This is a production version. The platform is fully live and ready for students.</p>
            </Card>
        );
    }
}

