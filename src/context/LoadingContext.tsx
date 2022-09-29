import React, { createContext, useState } from 'react';
import { Loading } from '~/components/commons';

type TLoadingProps = {
  children: React.ReactNode;
};

type TLoadingContext = {
  loading: boolean;
  show: () => void;
  hide: () => void;
};

const LoadingContext = createContext<TLoadingContext | null>(null);

const LoadingProvider = (props: TLoadingProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const value: TLoadingContext = {
    loading: loading,
    show: () => setLoading(true),
    hide: () => setLoading(false),
  };

  return (
    <LoadingContext.Provider value={value}>
      {loading && <Loading />}
      {props.children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingProvider };
