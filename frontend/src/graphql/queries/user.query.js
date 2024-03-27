import { gql } from '@apollo/client';

const GET_AUTHENTICATED_USER = gql`
    query GetAuthenticatedUser{
        authUser {
            _id
            username
            name
            profilePicture
        }
    }
`

export default GET_AUTHENTICATED_USER;