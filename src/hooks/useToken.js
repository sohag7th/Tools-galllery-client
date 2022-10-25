
import  { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(()=>{
        const email = user?.user?.email;
        const currentUser = {email: email};
        if(email){
            fetch(`https://vercel-deploy-tools-server-dmeivwp9y-sohag-9065.vercel.app/user/${email}`,{
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken)
                setToken(accessToken)
                // console.log('Data iinside useToken', data);
            })
        }
    },[user]);

    return [token];
};

export default useToken;