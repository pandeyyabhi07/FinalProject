import {lazy} from 'react'
import ProtectedRoute from '../ProtectedRoute'
import MemberLayout from '../../layouts/member/Index'

const MemberLanding = lazy(()=>import('../../views/member/index'))

const MemberRoute = {
    path : '/member',
    element : <ProtectedRoute role="member" layout={<MemberLayout/> } 
    redirectTo="/401" />,
    children : [
        {
            path : '/member',
            element : <MemberLanding />
        }
    ]
}

export default MemberRoute