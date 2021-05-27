import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document{
    render(){
        return(
            <Html lang="en">
                <Head>
                    <meta name="Heels Shop E-commerce" content="Camilla Reppen E-commerce website with Next.js"/>
                    <script src="https://kit.fontawesome.com/ee54249b54.js" crossorigin="anonymous"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument