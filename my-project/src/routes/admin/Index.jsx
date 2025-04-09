import {lazy} from 'react'
import ProtectedRoute from '../ProtectedRoute'
import AdminLayout from '../../layout/admin'

const AdminLanding = lazy(()=>import('../../views/admin/index'))

const AdminRoute = {
    path : '/admin',
    element : <ProtectedRoute role="admin" layout={<AdminLayout />} 
    redirectTo="/401" />,
    children : [
        {
            path : '/admin',
            element : <AdminLanding />
        }
    ]
}

export default AdminRoute