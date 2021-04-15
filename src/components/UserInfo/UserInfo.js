import { NavLink } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import routes from '../../routes';
import { authOperations } from '../../redux/auth';
import { ReactComponent as SignOutIcon } from '../../assets/icons/svg/signOut.svg';
import { ReactComponent as AddIcon } from '../../assets/icons/svg/checkmark.svg';
import styles from './UserInfo.module.css';

function UserInfo({ onOpenMobileMenu }) {
  const dispatch = useDispatch();
  const { name, email, avatarURL } = useSelector(
    state => state.auth.registration,
  );

  const [showModal, setShowModal] = useState(false);
  const [checkName, setCheckName] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  useEffect(() => {
    if (avatarURL !== undefined) {
      document.getElementById('img-insert').src = avatarURL;
    }
  });

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setShowModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const uploadImage = e => {
    const avatar = e.target.files[0];
    const data = new FormData();
    data.append('avatar', avatar);
    setLoading(true);
    dispatch(authOperations.updateAvatar(data));
    let fr = new FileReader();
    fr.onload = function () {
      document.getElementById('img-insert').src = fr.result;
    };
    fr.readAsDataURL(avatar);

    setLoading(false);
  };

  const handleChange = e => setNameInput(e.currentTarget.value);

  const handleSubmit = e => e.preventDefault();

  const onChangeName = () => {
    const userName =
      nameInput.length < 9 ? nameInput : nameInput.slice(0, 9) + '...';
    const userNameArr = { name: userName };
    dispatch(authOperations.updateName(userNameArr));
    setCheckName(nameInput);
    setNameInput('');
  };

  let isName = 'Guest';

  const checkIsName = () => {
    if (checkName !== '') {
      return (isName = checkName);
    }
    if (name !== null && name !== undefined) {
      return (isName = name);
    }
    if (email !== null && name !== undefined) {
      return (isName = email);
    }
  };

  checkIsName();

  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <div className={styles.avatar} onClick={toggleModal}>
          <div className={styles.avatarImgWrapper}>
            {loading ? (
              <h3 className={styles.loading}>Loading...</h3>
            ) : (
              <img
                id="img-insert"
                alt="avatar"
                width="40"
                className={styles.avatarImg}
              />
            )}
          </div>
          <span className={styles.dropdownCaret}></span>
          <div
            className={
              !showModal ? styles.userInfoModal : styles.userInfoModalActive
            }
          >
            <label
              htmlFor="fileUpload"
              name="avatar"
              className={styles.customFileUpload}
            >
              Change avatar
            </label>
            <input
              type="file"
              name="avatar"
              id="fileUpload"
              placeholder="Upload an image"
              onChange={uploadImage}
              onClick={toggleModal}
            />

            <form onSubmit={handleSubmit}>
              <label
                htmlFor="nameUpload"
                name="name"
                className={styles.customNameUpload}
              >
                Change name
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="name"
                  name="name"
                  id="nameUpload"
                  value={nameInput}
                  placeholder="Change name"
                  onClick={toggleModal}
                  onChange={handleChange}
                  className={styles.nameUpload}
                  autoComplete="off"
                  autoFocus
                />
                {nameInput && (
                  <button
                    className={styles.addBtn}
                    type="submit"
                    onClick={onChangeName}
                  >
                    <AddIcon className={styles.addIcon} />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        <span className={styles.name}>
          {isName.length < 9 ? isName : isName.slice(0, 9) + '...'}
        </span>
      </div>

      <NavLink to={routes.AUTH_VIEW} onClick={() => onOpenMobileMenu(false)}>
        <SignOutIcon
          className={styles.signOutBtnLg}
          width="16px"
          height="16px"
          onClick={() => dispatch(authOperations.logOut())}
        />
      </NavLink>
    </div>
  );
}

export default UserInfo;
