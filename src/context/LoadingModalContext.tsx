import React, { createContext, useState } from 'react';
import { LoadingModal } from '../components/commons';

type TLoadingModalProps = {
  children: React.ReactNode;
};

type TLoadingModalContext = {
  loading: boolean;
  show: () => void;
  hide: () => void;
};

const LoadingModalContext = createContext<TLoadingModalContext | null>(null);

const LoadingModalProvider = (props: TLoadingModalProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const value: TLoadingModalContext = {
    loading: loading,
    show: () => setLoading(true),
    hide: () => setLoading(false),
  };

  return (
    <LoadingModalContext.Provider value={value}>
      {loading && <LoadingModal />}
      {props.children}
    </LoadingModalContext.Provider>
  );
};

export { LoadingModalContext, LoadingModalProvider };
