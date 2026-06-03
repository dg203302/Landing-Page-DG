import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found — Diego Jose Garcia</title>
        <meta name="description" content="The page you are looking for doesn't exist. Return to Diego Jose Garcia's portfolio home." />
        <meta name="robots" content="noindex" />
        <meta property="og:title" content="Page Not Found — Diego Jose Garcia" />
        <meta property="og:description" content="This page doesn't exist on Diego Jose Garcia's portfolio." />
        <meta name="twitter:title" content="Page Not Found — Diego Jose Garcia" />
        <meta name="twitter:description" content="This page doesn't exist on Diego Jose Garcia's portfolio." />
        <link rel="canonical" href="https://diegogarcia-dev.com.ar/404" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
