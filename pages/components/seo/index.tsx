import Head from 'next/head'

function SEO() {

    return (
        <Head>
            <title>MISIRD - RMUTI - ADMINLTE</title>
            <meta name="description" content="MISIRD RMUTI" />
            <meta charSet="utf-8" />
            <link rel="icon" href={`/assets/images/logo/irdrmuti_thmb.gif`} />

            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href={`/assets/template/plugins/fontawesome-free/css/all.min.css`} />
            <link rel="stylesheet" href={`/assets/template/dist/css/adminlte.min.css`} />

            <script src={`/assets/template/plugins/jquery/jquery.min.js`} />
            <script async src={`/assets/template/plugins/bootstrap/js/bootstrap.bundle.min.js`} />
            <script async src={`/assets/template/dist/js/adminlte.min.js`} />
          

        </Head>
    )
}

export default SEO