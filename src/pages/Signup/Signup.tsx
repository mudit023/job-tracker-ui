import React from 'react';
import styles from './Signup.module.scss';

interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
  return <div className={styles.Signup}>Signup Component</div>;
};

export default Signup;

