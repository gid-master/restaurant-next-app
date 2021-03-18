import React from 'react';
import { useRouter } from 'next/router';
import Wrapper from '@/client/components/shared/layouts/Wrapper';
import Container from '@/client/components/shared/layouts/Container';
import ButtonStandard from '@/client/components/shared/buttons/ButtonStandard';
import ErrorNotFound from './presentational/ErrorNotFound';
import ErrorServer from './presentational/ErrorServer';
import ErrorUnexpected from './presentational/ErrorUnexpected';

type ErrorProps = {
    status?: number;
};

const ErrorContainer: React.FC<ErrorProps> = (props: ErrorProps) => {
    const navigation = useRouter();

    const onGoBackClicked = () => {
        navigation.push('/');
    };

    return (
        <Wrapper>
            <Container>
                {props.status === 404 && <ErrorNotFound />}
                {props.status === 500 && <ErrorServer />}
                {props.status !== 404 && props.status !== 500 && <ErrorUnexpected />}
            </Container>
            <Container>
                <ButtonStandard icon="store" name="Go back to home" center={true} clicked={onGoBackClicked} />
            </Container>
        </Wrapper>
    );
};

export default ErrorContainer;
