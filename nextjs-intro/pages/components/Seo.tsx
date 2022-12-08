import Head from "next/head";

export default function Seo({ title } ) {
return (
        <Head>
            <title> Yongjun's blog | { title } </title>
        </Head>
    )
}