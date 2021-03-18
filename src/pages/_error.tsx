import ErrorContainer from '@/client/components/error/ErrorContainer';

const Error = ({ statusCode }) => <ErrorContainer status={statusCode} />;

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
