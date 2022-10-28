import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';

const center = { lat: 21.018022, lng: 105.8249968 };

const Option2 = () => {
  const { isLoaded }: any = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAF9pFGHSpnvR7CXJMWdJ-JXBlT6QYbvR0',
  });
  console.log('loader', isLoaded);

  if (!isLoaded) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  return (
    <>
      <h1>Option 2</h1>
      <div>
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
        >
          {/* Display markers, or directions*/}
        </GoogleMap>
      </div>
    </>
  );
};

export default Option2;
