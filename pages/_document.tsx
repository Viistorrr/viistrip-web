import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>viisTrip App</title>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,300"
            rel="stylesheet"
            type="text/css"
          />

          <link rel="stylesheet" href="assets/template/css/animate.css" />

          <link rel="stylesheet" href="assets/template/css/icomoon.css" />

          <link rel="stylesheet" href="assets/template/css/bootstrap.css" />

          <link rel="stylesheet" href="assets/template/css/superfish.css" />

          <link
            rel="stylesheet"
            href="assets/template/css/magnific-popup.css"
          />

          <link
            rel="stylesheet"
            href="assets/template/css/bootstrap-datepicker.min.css"
          />

          <link rel="stylesheet" href="assets/template/css/cs-select.css" />
          <link
            rel="stylesheet"
            href="assets/template/css/cs-skin-border.css"
          />
          <link rel="stylesheet" href="assets/template/css/style.css" />

          <script src="assets/template/js/modernizr-2.6.2.min.js"></script>

          <script src="assets/template/js/jquery.min.js"></script>

          <script src="assets/template/js/jquery.easing.1.3.js"></script>

          <script src="assets/template/js/bootstrap.min.js"></script>

          <script src="assets/template/js/jquery.waypoints.min.js"></script>
          <script src="assets/template/js/sticky.js"></script>

          <script src="assets/template/js/jquery.stellar.min.js"></script>

          <script src="assets/template/js/hoverIntent.js"></script>
          <script src="assets/template/js/superfish.js"></script>

          <script src="assets/template/js/jquery.magnific-popup.min.js"></script>
          <script src="assets/template/js/magnific-popup-options.js"></script>

          <script src="assets/template/js/bootstrap-datepicker.min.js"></script>

          <script src="assets/template/js/classie.js"></script>
          <script src="assets/template/js/selectFx.js"></script>

          <script src="assets/template/js/main.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
