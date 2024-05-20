import { Helmet, HelmetProvider } from 'react-helmet-async';

function Admin() {
  return (
    <div>
          <HelmetProvider>
   
   <Helmet>
     <title>Admin</title>
   </Helmet>
   

</HelmetProvider>
    </div>
  )
}

export default Admin