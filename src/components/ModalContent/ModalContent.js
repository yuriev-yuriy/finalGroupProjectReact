import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function ModalContent({ onClose }) {
     const userEmail = useSelector(authSelectors.getUserEmail);
    const formatUserEmail = 'https://' + userEmail;
    return (
        <p>
            confirm your email{' '}
            <a target="blank" href={formatUserEmail} onClick={onClose}>{userEmail}</a>
          </p>
    )
}