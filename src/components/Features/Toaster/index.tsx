import { Toaster } from 'react-hot-toast'; import { BiCheckCircle } from 'react-icons/bi';
;

const ToasterAlert = () => {
    return (
        <Toaster
            position='top-center'
            reverseOrder={false}
            gutter={8}
            containerStyle={{
                zIndex: 99999,
                top: '100px'
            }}
            toastOptions={{
                duration: 4500,
                style: {
                    background: '#363636',
                    color: '#fff',
                    zIndex: 99999,
                    maxWidth: '90%',
                    boxShadow: '2px 5px 16px 0px #0000003b',
                    fontSize: '16px'
                },
                success: {
                    icon: <BiCheckCircle style={{ color: '#2E7D32' }} />,
                    style: {
                        background: '#EDF7ED',
                        color: '#1E4620',
                        borderRadius: '4px',
                        fontWeight: '600',
                        fontFamily: 'var(--font-inter)',
                    }
                },
                error: {
                    style: {
                        background: '#FFF1DE',
                        color: '#121212',
                        borderRadius: '15px',
                        border: '1px solid #FF0000',
                        fontWeight: '400',
                        fontFamily: 'var(--font-inter)'
                    }
                },
            }}
        />
    )
}

export default ToasterAlert;