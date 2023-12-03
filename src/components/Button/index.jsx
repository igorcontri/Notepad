import { Container } from './styled'

export function Button({ title, loading = false, ...rest }) {
    return (
        <Container 
            type="button"
            disabled={loading}
            {...rest}
        >
            {/* Loading = true //'Loading...', Loading = false //title */}
            { loading ? 'Loading...' : title}
        </Container>
    )
}