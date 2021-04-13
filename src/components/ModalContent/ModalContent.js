import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function ModalContent({ onClose }) {
     const userEmail = useSelector(authSelectors.getUserEmail);
//   const userCode = useSelector(authSelectors.getCode);
    const formatUserEmail = 'https://' + userEmail;
    // const handleClick = (event) => {
    //     if (event.currentTarget === event.target) {
    //         onClose()
    //     } else {
    //         return
    //     }
    // }
    return (
        <p>
            confirm your email{' '}
            <a target="blank" href={formatUserEmail} onClick={onClose}>{userEmail}</a>
          </p>
    )
}