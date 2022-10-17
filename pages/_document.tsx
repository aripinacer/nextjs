import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }


    render() {
        return (
            <Html>
                <Head>
                   <title>MISIRD - RMUTI - ADMINLTE</title>
            <meta name="description" content="Monev" />
            <meta charSet="utf-8" />
            <link rel="icon" href={'/assets/images/logo/irdrmuti_thmb.gif'} />

            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
           
            <link rel="stylesheet" href={'/assets/template/plugins/fontawesome-free/css/all.min.css'} />
            <link rel="stylesheet" href={'/assets/template/dist/css/adminlte.min.css'} />

            <script src={'/assets/template/plugins/jquery/jquery.min.js'} />
            <script async src={'/assets/template/plugins/bootstrap/js/bootstrap.bundle.min.js'} />
            
                </Head>
                <body style={{ fontFamily: "'Mitr', sans-serif" }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument