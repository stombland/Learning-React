import { useLocation } from 'react-router-dom';

function LinkResult() {
  const { state } = useLocation();
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${state.shortUrl}`;
  // https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

  return (
    <div>
      <p>Shortened Link: {state.shortUrl}</p>
      <img src={qrCodeUrl} alt="QR Code" />
    </div>
  );
}

export default LinkResult;
